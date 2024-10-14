import { useLocation,Link } from "react-router-dom";
import Home from "./Components/Home";
import Router from "./Utils/Router";
import { FaArrowLeftLong } from "react-icons/fa6";

const App = () => {
  const { search, pathname } = useLocation();
  return (
    <div className="w-full h-screen relative">
      {search && pathname && <div className="ml-[22%] mt-10"><Link to='/'>
            <FaArrowLeftLong  className=" text-3xl" />
            Go Back
          </Link></div>}
      <Router />
    </div>
  );
};
export default App;
