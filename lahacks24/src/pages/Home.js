import { useAuth0 } from "@auth0/auth0-react";
import { ReactTyped } from "react-typed";
import videoBG from '../assets/video.mp4';

const Home = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className='relative'>
      <video src={videoBG} autoPlay loop muted className='absolute inset-0 w-full h-full object-cover z-0'></video>
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 z-1'></div>
      <div className='absolute'>
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <ul class="font-bold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                class="block py-2 px-3 text-blue-700 rounded md:border-0 md:p-0 dark:text-white :bg-transparent"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/Camera"
                class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
      </div>
      <div className='pt-3 pr-4 flex justify-end z-10'>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-10"
          onClick={() => loginWithRedirect()}
        >
          Log In
        </button>
      </div>
      <div className='text-center flex justify-center items-center h-screen'>
        <h1 className='font-bold text-8xl text-white z-20'>
          Welcome to<br></br>
          <ReactTyped strings={["Reimagined"]} className='text-blue-500' typeSpeed={175} loop backSpeed={175}/>
        </h1>
      </div>
    </div>
  );
};

export default Home;
