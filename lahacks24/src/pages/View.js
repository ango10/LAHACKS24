import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Fridge = () => {
  const location = useLocation();
  const [email, setEmail] = useState("rileysw@uci.edu");
  const [lessThan7, setLessThan7] = useState([]);
  const [lessThan30, setLessThan30] = useState([]);
  const [greaterThan30, setGreaterThan30] = useState([]);
  React.useEffect(() => {
    let thisEmail = email;
    if (location.state !== null) {
      thisEmail = location.state.email;
      setEmail(thisEmail);
    }
    fetch("http://localhost:8000/all_food/" + thisEmail)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLessThan7(data.less_than_7);
        setLessThan30(data.less_than_30);
        setGreaterThan30(data.greater_than_30);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      style={{
        overflow: "hidden",
        backgroundImage: "url('/empty.jpg'",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "15% 15%",
        fontFamily: "Indie Flower",
      }}
    >
      <div class="absolute">
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
                  class="block py-2 px-3 text-blue-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
                  class="block py-2 px-3 text-gray-900 md:hover:text-blue-700 rounded md:border-0 md:p-0 dark:text-white :bg-transparent"
                >
                  Recipes
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div>
        <ul
          style={{
            fontFamily: "Indie Flower",
            color: "#515959",
            textAlign: "center",
            alignContent: "center",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            margin: "auto",
            fontSize: "25px",
          }}
        >
          <li style={{ marginTop: "200px", height: "calc(100vh/3 - 45px)" }}>
            <b>Expiring in &lt;7 days: </b>
            <br></br>
            {lessThan7.map((food) => (
              <p style={{ display: "inline-block", padding: "10px" }}>{food}</p>
            ))}
          </li>
          <li style={{ height: "calc(100vh/3 - 100px)" }}>
            <b>Expiring in 7-30 days: </b>
            <br></br>
            {lessThan30.map((food) => (
              <p style={{ display: "inline-block", padding: "10px" }}>{food}</p>
            ))}
          </li>
          <li style={{ height: "calc(100vh/3)" }}>
            <b>Expiring in 30+ days: </b>
            <br></br>
            {greaterThan30.map((food) => (
              <p style={{ display: "inline-block", padding: "10px" }}>{food}</p>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Fridge;
