from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from models import User, Food
from pymongo_get_database import get_database
import google.generativeai as genai
import datetime
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
    genai.configure(api_key=os.environ.get("API_KEY"))
    model = genai.GenerativeModel('gemini-pro')
    prompt = "give me a one number response in the unit of days. What is the average refrigeration shelf life of "
    try:
        for ingredient in food.ingredients:
            while True:
                response = model.generate_content(prompt + ingredient)
                if response.text.isnumeric():
                    shelf_life = int(response.text)
                    food_item = {
                        "username": food.username,
                        "name": ingredient,
                        "bought_date": str(datetime.date.today()),
                        "expiration_date": str(datetime.date.today() + datetime.timedelta(days=shelf_life))
                    }
                    food_collection.insert_one(food_item)
                    break
        return {"Added food": True}
    except Exception as e:
        print(e)
        raise HTTPException(status_code=400, detail=f"Cannot add food: {e}")


@app.get("/all_food/{username}")
def mongodb_get_all_food(username):
    try:
        food_list = []
        for food in food_collection.find({"username": username}):
            food_list.append((food.get("name"), food.get("expiration_date")))
        print(food_list)

        less_than_7 = []
        less_than_30 = []
        greater_than_30 = []

        for food, date in food_list:
            date_fr = datetime.datetime.strptime(date, "%Y-%m-%d")
            delta = (date_fr.date() - datetime.date.today()).days
            if delta < 7:
                less_than_7.append(food)
            elif delta < 30:
                less_than_30.append(food)
            else:
                greater_than_30.append(food)

        return {"less_than_7": list(set(less_than_7)), "less_than_30": list(set(less_than_30)), "greater_than_30": list(set(greater_than_30))}
    except Exception as e:
        print(e)
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
        return {"list": food_list}
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
    
@app.get("/get_recipes/{username}")
def get_recipes(username):
    genai.configure(api_key=os.environ.get("API_KEY"))
    model = genai.GenerativeModel('gemini-pro')

    prompt = "give me 3 recipes using 1 or more ingredients from this list: "

    for food in mongodb_get_all_food(username):
        prompt += food + " "

    prompt += ". please separate each recipe using an @ symbol"
    response = model.generate_content(prompt)

    response_list = response.text.split("@")

    return {"res": response_list}

# not implemented
def mongodb_clear():
    food_collection.delete_many({})
    user_collection.delete_many({})
