import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Fridge = () => {
    const location = useLocation();
  const [email, setEmail] = useState("");
  React.useEffect(() => {
    setEmail(location.state.email);
  }, []);

    return <div style={{overflow: "hidden", backgroundImage: "url('/empty.jpg'", height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "15% 15%"}}>
        <div class = "absolute">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                    <a href="/" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
                    </li>
                    <li>
                    <a href="/Camera" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Enter Ingredients</a>
                    </li>
                    <li>
                    <a href="/View" class="block py-2 px-3 text-gray-900 rounded md:border-0 md:p-0 dark:text-white :bg-transparent">View Ingredients</a>
                    </li>
                    <li>
                    <a href="/Recipes" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Recipes</a>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <ul style={{fontFamily: "Josefin Sans", color: "#515959", textAlign: "center", alignContent: "center", top: "0", bottom: "0", left: "0", right: "0", margin: "auto", fontSize:"25px"}}>
                <li style={{marginTop: "200px", height: "calc(100vh/3 - 45px)"}}>
                    <b>Expiring in &lt;7 days: </b>
                </li>
                <li style={{height: "calc(100vh/3 - 100px)"}}>
                    <b>Expiring in 7-30 days: </b>
                </li>
                <li style={{height: "calc(100vh/3)"}}>
                    <b>Expiring in 30+ days: </b>
                </li>
            </ul>
        </div>
    </div>
    };



export default Fridge;
