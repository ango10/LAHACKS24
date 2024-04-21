import { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";

const Extra = () => {
  const email = "rileysw@uci.edu";

  useEffect(() => {
    fetch("http://localhost:8000/get_recipes/" + email)
      .then((res) => {
        return res.json();
      })
      .then((data) => setRecipes(data.res));
  }, []);

  const [recipes, setRecipes] = useState([]);

  return recipes.length === 0 ? (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url("/anime_fridge.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "15% 15%",
        fontFamily: "Indie Flower",
      }}
    >
      <div>
        <div className='absolute'>
        <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
            <ul class="font-bold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <div
                style={{
                  backgroundColor: "#debb8e",
                  padding: "8px",
                  borderRadius: "10px",
                }}
              >
                <li>
                  <a
                    href="/"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent background-color:white"
                  >
                    Log Out
                  </a>
                </li>
              </div>
              <div
                style={{
                  backgroundColor: "#debb8e",
                  padding: "8px",
                  borderRadius: "10px",
                }}
              >
                <li>
                  <a
                    href="/Camera"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Enter Ingredients
                  </a>
                </li>
              </div>
              <div
                style={{
                  backgroundColor: "#debb8e",
                  padding: "8px",
                  borderRadius: "10px",
                }}
              >
                <li>
                  <a
                    href="/View"
                    class="block py-2 px-3 text-gray-900 md:hover:text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    View Ingredients
                  </a>
                </li>
              </div>
              <div
                style={{
                  backgroundColor: "#debb8e",
                  padding: "8px",
                  borderRadius: "10px",
                }}
              >
                <li>
                  <a
                    href="/Recipes"
                    class="block py-2 px-3 text-blue-500 rounded md:border-0 md:p-0 dark:text-white :bg-transparent"
                  >
                    Recipes
                  </a>
                </li>
              </div>
            </ul>
        </div>
        </div>
      </div>
      <div>
        <div
          style={{
            textAlign: "center",
            borderRadius: "10px",
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            margin: "auto",
            fontFamily: "Caveat, cursive",
            alignContent: "center",
            border: "7px solid #cdcdcd",
            borderColor: "rgba(0,0,0,.15)",
            backgroundColor: "#dedb97",
            width: "30%",
            height: "30%",
          }}
        >
          <h1
            class="text-white"
            style={{ fontFamily: "Pixelify Sans", fontSize: "50px" }}
          >
            LOADING
            <ReactTyped
              strings={["..."]}
              className="text-white"
              typeSpeed={150}
              loop
              backSpeed={150}
            />
          </h1>
        </div>
      </div>
    </div>
  ) : (
    <div
      className="h-screen"
      style={{ backgroundImage: `url("/anime_fridge.jpg")` }}
    >
      <div>
      <div className='absolute' style={{fontFamily: "Indie Flower"}}>
        <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
            <ul class="font-bold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <div
                style={{
                  backgroundColor: "#debb8e",
                  padding: "8px",
                  borderRadius: "10px",
                }}
              >
                <li>
                  <a
                    href="/"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent background-color:white"
                  >
                    Log Out
                  </a>
                </li>
              </div>
              <div
                style={{
                  backgroundColor: "#debb8e",
                  padding: "8px",
                  borderRadius: "10px",
                }}
              >
                <li>
                  <a
                    href="/Camera"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Enter Ingredients
                  </a>
                </li>
              </div>
              <div
                style={{
                  backgroundColor: "#debb8e",
                  padding: "8px",
                  borderRadius: "10px",
                }}
              >
                <li>
                  <a
                    href="/View"
                    class="block py-2 px-3 text-gray-900 md:hover:text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    View Ingredients
                  </a>
                </li>
              </div>
              <div
                style={{
                  backgroundColor: "#debb8e",
                  padding: "8px",
                  borderRadius: "10px",
                }}
              >
                <li>
                  <a
                    href="/Recipes"
                    class="block py-2 px-3 text-blue-500 rounded md:border-0 md:p-0 dark:text-white :bg-transparent"
                  >
                    Recipes
                  </a>
                </li>
              </div>
            </ul>
        </div>
        </div>
      </div>
      <div className="h-full">
        <br></br>
        <br></br>
        <br></br>
        <ul className="flex columns-3 flex-nowrap">
          <div
            className="flex-nowrap h-full"
            style={{
              borderRadius: "10px",
              padding: "20px",
              margin: "20px",
              fontFamily: "Caveat, cursive",
              alignContent: "center",
              border: "7px solid #cdcdcd",
              borderColor: "rgba(0,0,0,.15)",
              backgroundColor: "#97cdde",
            }}
          >
            <li>
              <h1
                class="text-white"
                style={{ textAlign: "center", fontSize: "50px" }}
              >
                Recipe 1{" "}
              </h1>
              <p class="text-white" style={{ fontSize: "23px" }}>
                {recipes.length === 4 ? recipes[1] : recipes[0]}
              </p>
            </li>
          </div>
          <div
            className="flex-nowrap h-full"
            style={{
              borderRadius: "10px",
              padding: "20px",
              margin: "20px",
              fontFamily: "Caveat, cursive",
              alignContent: "center",
              border: "7px solid #cdcdcd",
              borderColor: "rgba(0,0,0,.15)",
              backgroundColor: "#7fc990",
            }}
          >
            <li>
              <h1
                class="text-white"
                style={{ textAlign: "center", fontSize: "50px" }}
              >
                Recipe 2
              </h1>
              <p class="text-white" style={{ fontSize: "23px" }}>
                {recipes.length === 4 ? recipes[2] : recipes[1]}
              </p>
            </li>
          </div>
          <div
            className="flex-nowrap h-full"
            style={{
              borderRadius: "10px",
              padding: "20px",
              margin: "20px",
              fontFamily: "Caveat, cursive",
              alignContent: "center",
              border: "7px solid #cdcdcd",
              borderColor: "rgba(0,0,0,.15)",
              backgroundColor: "#d9a5c2",
            }}
          >
            <li>
              <h1
                class="text-white"
                style={{ textAlign: "center", fontSize: "50px" }}
              >
                Recipe 3
              </h1>
              <p class="text-white" style={{ fontSize: "23px" }}>
                {recipes.length === 4 ? recipes[3] : recipes[2]}
              </p>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Extra;
