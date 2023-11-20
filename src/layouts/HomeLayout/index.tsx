import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

const HomeLayout = () => {
    return ( 
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <NavBar/>
            <Outlet/>
        </div>
     );
}
 
export default HomeLayout;