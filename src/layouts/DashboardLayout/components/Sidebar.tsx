import {Link, NavLink} from 'react-router-dom'
import { FaTachometerAlt  } from 'react-icons/fa';
import { MdEvent } from 'react-icons/md';
import Logo from './Logo'
const Sidebar = () => {
    return ( 
        <div className='w-1/5 h-full pl-3 pr-10 py-5 flex flex-col'>
            <Link to='/' className="flex items-center justify-center">
                <Logo/>
            </Link>
            <div className='flex flex-col items-center gap-3 mt-10 '>   
                <NavLink to='/dashboard' className="w-30 px-10 py-2 text-xl flex justify-center items-center gap-3 focus:text-xl focus:shadow-lg focus:rounded-lg">
                <FaTachometerAlt color='#00B7BF'/>
                    Dashboard
                </NavLink>
                <NavLink to='/dashboard/events' className="w-30 px-10 py-2  text-xl flex justify-center items-center gap-3  focus:text-xl focus:shadow-lg focus:rounded-lg">
                <MdEvent color='#00B7BF'/>
                    My Events
                </NavLink>
                <NavLink to='/login' className="w-30 px-10 py-2 rounded-md text-xl">
                    Logout
                </NavLink>
            </div>
            
        </div>
     );
}
 
export default Sidebar;