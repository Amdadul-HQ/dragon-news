import { Link } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Context/ContextComponent";

const Register = () => {


    const { createUser } = useContext(AuthContext)

    const handleRegSubmit = e => {
        e.preventDefault()

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

       createUser(email,password)
       .then(  )
    }


    return (
       <section className="bg-Dark3 font-poppins">
       <Navbar/>
       <div className="flex justify-between items-center ">
           <div className="bg-white w-[750px] mx-auto py-6 px-10 rounded-md">
                <h1 className="text-4xl font-semibold text-center">Register your account</h1>
                <hr className="my-7" />
                <form onSubmit={handleRegSubmit}>
                  <div>
                       <label className="text-Dark1 text-xl font-semibold" htmlFor="name">Your Name</label>
                       <input className="bg-Dark3 px-5 py-5 block mt-4 w-full" type="text" name="name" id="name" placeholder="Enter your name"  required/>
                  </div>
                  <div className="mt-6">
                       <label className="text-Dark1 text-xl font-semibold" htmlFor="name">Your Photo</label>
                       <input className="bg-Dark3 px-5 py-5 block mt-4 w-full" type="text" name="name" id="name" placeholder="Enter your Photo URL"  required/>
                  </div>
                  <div className="mt-6">
                       <label className="text-Dark1 text-xl font-semibold" htmlFor="email">Email address</label>
                       <input className="bg-Dark3 px-5 py-5 block mt-4 w-full" type="email" name="email" id="email" placeholder="Enter your email address"  required/>
                  </div>
                  <div className="mt-6">
                       <label className="text-Dark1 text-xl font-semibold" htmlFor="Password">Password</label>
                       <input className="bg-Dark3 px-5 py-5 block mt-4 w-full" type="password" name="password" id="Password" placeholder="Enter your Password"  required/>
                  </div>
                  <div className="mt-5 flex gap-x-2 items-center">
                    <input type="checkbox" id="checkbox"  className="checkbox" required />
                    <label htmlFor="checkbox" className="text-Dark2 text-base font-semibold">Accept Term & Conditions</label>
                  </div>
                  <button type="submit" className="mt-8 bg-Dark1 w-full py-4 rounded-md text-white text-xl font-semibold">Register</button>
                </form>
                <p className="text-base text-Dark2 text-center mt-8 font-semibold">Already Have An Account ? <Link to='/login' className="text-[#F75B5F]">Login</Link></p>
           </div>
       </div>
      </section>
    );
};

export default Register;