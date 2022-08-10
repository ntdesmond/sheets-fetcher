from common.database import ModelType


def model_to_dict(model: ModelType):
    return {col.name: getattr(model, col.name) for col in model.__table__.columns}
