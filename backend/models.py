from pydantic import BaseModel

class User(BaseModel):
    username: str

class Food(BaseModel):
    username: str
    ingredients: list
