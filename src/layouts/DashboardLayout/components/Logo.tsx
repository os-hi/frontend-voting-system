import logo from '../assets/logo.png'
const Logo = () => {
    return (
        <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-12 h-12"/>
            <h1 className="font-bold text-2xl">HackVote</h1>
        </div>
     );
}
 
export default Logo;