from sqlalchemy.dialects.postgresql import insert

from common.database import ModelType, Session
from common.database.utils.model_to_dict import model_to_dict


def add_or_update(items: list[ModelType]):
    """
    Inserts items to DB or updates them if the matching IDs are already there.
    """
    if len(items) == 0:
        return

    model = items[0].__class__
    items_as_dicts = [model_to_dict(item) for item in items]

    session = Session()
    insert_stmt = insert(model).values(items_as_dicts)
    upsert_stmt = insert_stmt.on_conflict_do_update(
        index_elements=[model.id],
        set_={
            col.name: col for col in insert_stmt.excluded if col.name != model.id.name
        },
    )
    session.execute(upsert_stmt)
    session.commit()
    session.close()
