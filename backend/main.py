from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from models import User, Food
from pymongo_get_database import get_database
import google.generativeai as genai
from datetime import date
import os


db = get_database()
user_collection = db["users"]
food_collection = db["food"]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins="http://localhost:3000",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/user/")
async def mongodb_insert_user(user: User):
    try:
        user = {
            "username" : user.username
        }
        if len([_ for _ in user_collection.find(user)]) == 0:
            user_collection.insert_one(user)
        return {"Added user": True}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Cannot add user: {e}")


@app.post("/food/")
def mongodb_insert_food(food: Food):
    try:
        for ingredient in food.ingredients:
            food_item = {
                "username": food.username,
                "name": ingredient,
                "bought_date": str(date.today()),
                "expiration_date": str(date.today())
            }
            food_collection.insert_one(food_item)
        return {"Added food": True}
    except Exception as e:
        print(e)
        raise HTTPException(status_code=400, detail=f"Cannot add food: {e}")


@app.get("/all_food/")
def mongodb_get_all_food(username):
    try:
        food_list = []
        for food in food_collection.find({"username": username}):
            food_list.append(food.get("name"))

        # may need to jsonify it
        return food_list
    except Exception as e:
        raise HTTPException(status_code=400, detail="Cannot get all food: {e}")


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
    
@app.get("/get_recipes")
def get_recipes():
    genai.configure(api_key=os.environ.get("API_KEY"))
    model = genai.GenerativeModel('gemini-pro')

    prompt = "give me 3 recipes using 1 or more ingredients from this list: "

    for food in mongodb_get_all_food("jennil38@uci.edu"):
        prompt += food + " "

    prompt += ". please separate each recipe using an @ symbol"
    response = model.generate_content(prompt)

    response_list = response.text.split("@")

    return {"res": response_list}

# not implemented
def mongodb_clear():
    food_collection.delete_many({})
    user_collection.delete_many({})


get_recipes()