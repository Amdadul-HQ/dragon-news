import { Link, NavLink } from "react-router-dom";
import userIcon from '../../assets/user.png'

const Navbar = () => {
    return (
        <nav className="font-poppins flex justify-between items-center">
            <div>

            </div>
            <div className="ml-44">
                <ul className="text-Dark2  text-lg font-normal space-x-4">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/'>Career</NavLink>
                </ul>
            </div>
            <div className="flex items-center gap-x-3">
                <img className="w-10" src={userIcon} alt="" />
                <Link><button className="bg-Dark1 py-3 px-10 text-[#fff] ">Login</button></Link>
            </div>
        </nav>
    );
};

export default Navbar;