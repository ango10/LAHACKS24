from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

def get_database():
    CONNECTION_STRING = os.environ.get("MONGODB_URI")
    client = MongoClient(CONNECTION_STRING)
    return client['fridge']

if __name__ == "main":
    db = get_database()