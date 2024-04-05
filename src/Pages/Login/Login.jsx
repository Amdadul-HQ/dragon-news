import { Link } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";

const Login = () => {
    return (
        <section className="bg-Dark3 font-poppins">
        <Navbar/>
        <div className="flex justify-between items-center h-[calc(100vh-88px)]">
            <div className="bg-white w-[750px] mx-auto p-16 rounded-md">
                 <h1 className="text-4xl font-semibold text-center">Login your account</h1>
                 <hr className="my-12" />
                 <form>
                   <div>
                        <label className="text-Dark1 text-xl font-semibold" htmlFor="email">Email address</label>
                        <input className="bg-Dark3 px-5 py-5 block mt-4 w-full" type="email" name="email" id="email" placeholder="Enter your email address"  required/>
                   </div>
                   <div className="mt-6">
                        <label className="text-Dark1 text-xl font-semibold" htmlFor="Password">Password</label>
                        <input className="bg-Dark3 px-5 py-5 block mt-4 w-full" type="password" name="password" id="Password" placeholder="Enter your Password"  required/>
                   </div>
                   <button type="submit" className="mt-8 bg-Dark1 w-full py-4 rounded-md text-white text-xl font-semibold">Login</button>
                 </form>
                 <p className="text-base text-Dark2 text-center mt-8 font-semibold">Dont’t Have An Account ? <Link to='/register' className="text-[#F75B5F]">Register</Link></p>
            </div>
        </div>
       </section>
    );
};

export default Login;