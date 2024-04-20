from pymongo import MongoClient

def get_database():
    CONNECTION_STRING = "mongodb+srv://skiesofjune:IMBTFOLPO553@lahacks.4e8kzqe.mongodb.net/"
    client = MongoClient(CONNECTION_STRING)
    return client['fridge']

if __name__ == "main":
    db = get_database()