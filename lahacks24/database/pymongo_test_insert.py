from LAHACKS24.backend.pymongo_get_database import get_database

db = get_database()
user_collection = db["users"]
food_collection = db["food"]

user_1 = {
    "_id" : "1",
    "username" : "bob"
}

food_1 = {
    "food_name" : "egg",
    "user" : "bob",
    "bought_date" : "4/19/2024",
    "expiration_date" : "5/19/2024"
}

user_collection.insert_one(user_1)
food_collection.insert_many([food_1])

