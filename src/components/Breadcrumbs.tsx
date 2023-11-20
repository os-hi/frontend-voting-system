import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
    const location = useLocation();

    let currentLink = ''
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`
            return (
                <div key={crumb} className="flex gap-2 text-lg after:content-['>'] last:after:hidden">
                    <Link to={currentLink} className="font-semibold text-lg">{crumb}</Link>
                </div>
            )
        })
    return ( 
        <div className="flex gap-2 ">
            {crumbs}
        </div>
     );
}
 
export default Breadcrumbs;