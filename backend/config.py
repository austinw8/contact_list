from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
# CORS(app)
CORS(app, origins=["http://localhost:5173"], supports_credentials=True)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydatabase.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)
