import { Link, NavLink } from "react-router-dom";
import userIcon from '../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../Context/ContextComponent";

const Navbar = () => {

    const {user ,logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then( () => console.log('Log Out Successful'))
        .catch( error =>  console.log(error.message))
    }

    return (
        <nav className="max-w-screen-xl mx-auto py-5 font-poppins flex justify-between items-center">
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
                {
                    user ? <Link onClick={handleLogOut} ><button className="bg-Dark1 py-3 px-10 text-[#fff] ">Log Out</button></Link> : <Link to='/login'><button className="bg-Dark1 py-3 px-10 text-[#fff] ">Login</button></Link> 
                }
            </div>
        </nav>
    );
};

export default Navbar;