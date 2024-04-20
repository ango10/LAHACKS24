from fastapi import FastAPI
from pymongo_get_database import get_database
import datetime

db = get_database()
user_collection = db["users"]
food_collection = db["food"]

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


def mongodb_insert_user(username, password):
    user = {
        "username" : username,
        "password" : password
    }
    user_collection.insert_one(user)


def mongodb_insert_food(username, food_name, bought_date, expiration_date):
    food = {
        "username" : username,
        "food_name" : food_name,
        "bought_date" : bought_date,
        "expiration_date" : expiration_date
    }
    food_collection.insert_one(food)


def mongodb_get_all_food(username):
    food_list = []
    for food in food_collection.find({"username" : username}):
        food_list.append(food.get("food_name"))

    return food_list


def mongodb_get_expiring_food(username, expiration_date):
    food_list = []
    for food in food_collection.find({"username" : username}, {"expiration_date" : {"$lte" : expiration_date}}):
        food_list.append(food.get("food_name"))

    return food_list

def mongodb_remove_user(username):
    user_collection.delete_one({"username" : username})

def mongodb_remove_food(username, food_name, bought_date, expiration_date):
    food_collection.delete_one({"username" : username}, {"food_name" : food_name}, {"bought_date" : bought_date}, {"expiration_date" : expiration_date})

def mongodb_clear():
    food_collection.delete_many({})
    user_collection.delete_many({})
