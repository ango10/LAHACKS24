import { ReactTyped } from "react-typed";
import videoBG from "../assets/video.mp4";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <video
        src={videoBG}
        autoPlay
        loop
        muted
        className="absolute inset-0 h-screen object-cover z-0"
      ></video>
      <div className="absolute w-screen h-screen bg-black opacity-60 z-1"></div>

      <div className="pt-4 pr-4 flex justify-end z-10">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-10"
          onClick={() => navigate("/Camera")}
        >
          Begin
        </button>
      </div>
      <div className="text-center flex justify-center mt-80" style={{fontFamily: "Indie Flower"}}>
        <h1 className="font-bold text-8xl text-white z-20">
          Welcome to<br></br>
          <ReactTyped
            strings={["Recipes Remagined"]}
            className="text-blue-500"
            typeSpeed={150}
            loop
            backSpeed={150}
          />
        </h1>
      </div>
    </div>
  );
};

export default Home;
