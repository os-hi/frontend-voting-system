import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Breadcrumbs from "../../components/Breadcrumbs";

const DashboardLayout = () => {
    return ( 
        <div className="w-full h-screen flex">
            <Sidebar/>
            <div className="w-full h-full flex flex-col p-10 gap-5">
                <Breadcrumbs/>
                <div className="w-full h-full bg-white shadow-xl rounded-3xl">
                    <Outlet/>
                </div>
            </div>
        </div>
     );
}
 
export default DashboardLayout;