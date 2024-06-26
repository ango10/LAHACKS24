import React from "react";
import { useNavigate } from "react-router-dom";
import fridgeLogo from "../assets/fridgeIcon.png";

const Camera = () => {
  const [email, setEmail] = React.useState("");
  const [ingredients, setIngredients] = React.useState([]);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    fetch("http://localhost:8000/food/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: email, ingredients: ingredients }),
    })
      .then((_) => {
        navigate("/View", { state: { email: email } });
      })
      .catch((err) => {
        console.log(err);
      });
    event.preventDefault();
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const ingredientList = inputValue
      .split(",")
      .map((ingredient) => ingredient.trim());
    setIngredients(ingredientList);
  };

  return (
    <div style={{ backgroundImage: `url("/fridge.jpg")`}} className="h-screen">
      <div class="absolute h-screen flex-col items-center justify-between mx-auto p-4">
          <ul style={{fontFamily: "Indie Flower"}} class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <div class='font-bold' style={{backgroundColor: "#debb8e", padding: "8px", borderRadius: "10px"}}>
              <li>
              <a href="/" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent background-color:white">Home</a>
              </li>
              </div>
              <div class='font-bold' style={{backgroundColor: "#debb8e", padding: "8px", borderRadius: "10px"}}>
              <li>
              <a href="/Camera" class="block py-2 px-3 text-blue-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Enter Ingredients</a>
              </li>
              </div>
          </ul>
      </div>
      <form className="flex justify-center" style={{fontFamily: "Indie Flower"}}>
        <div className="rounded-lg text-white text-center mt-36 w-96" style={{backgroundColor: "#debb8e"}}>
          <img src={fridgeLogo} className='rounded-lg m-8 w-80' alt="Logo" />
          <h1 className="text-2xl font-bold text-center py-2 text-blue-500">
            Email
          </h1>
          <input
            style={{backgroundColor: "#debb8e"}} class="font-bold block w-full max-w-md p-4 ps-10 text-sm text-white border border-orange-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={email}
            onChange={handleEmailChange}
          />
          <h1 className="text-2xl font-bold text-center py-2 text-blue-500">
            Enter Ingredients Here
          </h1>
          <form className="flex-1 justify-center items-center font-bold">
            <label
              for="search"
              class="mb-2 font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                style={{backgroundColor: "#debb8e"}} class="block w-full max-w-md p-4 ps-10 text-sm text-white border border-orange-300 rounded-lg bg-slate-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
                onChange={handleInputChange}
              />
              <button
                type="submit"
                class="text-orange-300 absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleSubmit}
              >
                Store
              </button>
            </div>
          </form>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </form>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default Camera;
