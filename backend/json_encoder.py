import time
from flask.json import JSONEncoder

from common.database.models.order import Order
from common.database.utils import model_to_dict


class OrderJSONEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Order):
            data = model_to_dict(obj)
            data |= {
                "date": time.mktime(obj.date.timetuple()),
                "cost_dollars": float(obj.cost_dollars),
                "cost_rubles": float(obj.cost_rubles),
            }
            return data
        return super().default(obj)
