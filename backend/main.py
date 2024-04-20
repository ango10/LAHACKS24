from fastapi import FastAPI, HTTPException
from models import User, Food
from pymongo_get_database import get_database
import datetime

db = get_database()
user_collection = db["users"]
food_collection = db["food"]

app = FastAPI()


@app.post("/user/")
def mongodb_insert_user(user: User):
    try:
        # change database schema, check if user exists already
        # user = {
        #     "username" : user.username,
        #     "password" : password
        # }
        # user_collection.insert_one(user)
        return "Added user"
    except:
        raise HTTPException(status_code=400, detail="Cannot add user")


@app.post("/food/")
def mongodb_insert_food(food: Food):
    try:
        food = {
            "username": food.username,
            "food_name": food.name,
            "bought_date": food.bought_date,
            "expiration_date": food.expiration_date,
        }
        food_collection.insert_one(food)
        return "Added food"
    except:
        raise HTTPException(status_code=400, detail="Cannot add food")


@app.get("/all_food/")
def mongodb_get_all_food(username):
    try:
        food_list = []
        for food in food_collection.find({"username": username}):
            food_list.append(food.get("food_name"))

        # may need to jsonify it
        return food_list
    except:
        raise HTTPException(status_code=400, detail="Cannot get all food")


@app.get("/expiring_food/")
def mongodb_get_expiring_food(username, expiration_date):
    try:
        food_list = []
        for food in food_collection.find(
            {"username": username}, {"expiration_date": {"$lte": expiration_date}}
        ):
            food_list.append(food.get("food_name"))

        # may need to jsonify it
        return food_list
    except:
        raise HTTPException(status_code=400, detail="Cannot get expiring food")


@app.post("/remove_user/")
def mongodb_remove_user(user: User):
    try:
        user_collection.delete_one({"username": user.username})
        return "Deleted user"
    except:
        raise HTTPException(status_code=400, detail="Cannot delete user")


@app.post("/remove_food/")
def mongodb_remove_food(food: Food):
    try:
        food_collection.delete_one(
            {"username": food.username},
            {"food_name": food.name},
            {"bought_date": food.bought_date},
            {"expiration_date": food.expiration_date},
        )
        return "Deleted food"
    except:
        raise HTTPException(status_code=400, detail="Cannot delete food")


# not implemented
def mongodb_clear():
    food_collection.delete_many({})
    user_collection.delete_many({})
