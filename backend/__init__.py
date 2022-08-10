from flask import Flask
from flask_cors import CORS

from backend.json_encoder import OrderJSONEncoder
from common.database import Session
from common.database.models.order import Order

app = Flask(__name__)
CORS(app)

app.config.from_prefixed_env()
app.json_encoder = OrderJSONEncoder


@app.route("/", methods=["GET"])
def index():
    session = Session()
    return session.query(Order).all()
