import React from "react";
import fridgeLogo from "../assets/fridgeIcon.png";

const Camera = () => {
  const [ingredients, setIngredients] = React.useState([]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const ingredientList = inputValue
      .split(",")
      .map((ingredient) => ingredient.trim());
    setIngredients(ingredientList);
  };

  // React.useEffect(() => {
  //   if (!isLoading && user !== undefined) {
  //     console.log(JSON.stringify({ username: user.email }));
  //     fetch("http://localhost:8000/user/", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ username: user.email }),
  //     })
  //       .then((data) => {
  //         // change later, does nothing
  //         console.log(data.json());
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [isLoading]);

  return (
    <div style={{ backgroundImage: `url("/fridge.jpg")` }} className="h-screen">
      <div class="flex flex-wrap items-center justify-between mx-auto p-4">
        <ul class="font-bold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a
              href="/"
              class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/Camera"
              class="block py-2 px-3 text-blue-500 rounded md:border-0 md:p-0 dark:text-white :bg-transparent"
            >
              Enter Ingredients
            </a>
          </li>
          <li>
            <a
              href="/View"
              class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              View Ingredients
            </a>
          </li>
          <li>
            <a
              href="/Recipes"
              class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Recipes
            </a>
          </li>
        </ul>
      </div>
      <form className="flex justify-center">
        <div className="bg-slate-300 rounded-lg text-white text-center mt-36 w-96">
          <img src={fridgeLogo} width={500} alt="Logo" />
          <h1 className="text-2xl font-bold text-center py-2 text-blue-500">
            Enter Ingredients Here
          </h1>
          <form className="flex-1 justify-center items-center">
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
                class="block w-full max-w-md p-4 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-slate-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
                onChange={handleInputChange}
              />
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
