from pydantic import BaseModel

class User(BaseModel):
    username: str

class Food(BaseModel):
    username: str
    name: str
    bought_date: str
    expiration_date: str
