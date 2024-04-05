import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/ContextComponent";

const Login = () => {
    const { logIn  } = useContext(AuthContext)
    
    const [successfullMessage,setSuccessfullMessage] = useState('')
    const [ errorMessage, setErrorMessage ] = useState('')

    const navigate = useNavigate();
    const location = useLocation();
    const history = location.state?.from || '/';

    const navigateNow = () => {
        setTimeout(() => { navigate(history, { replace: true }) }, 1)
    }

    const handleLogIn = e => {
        e.preventDefault();
        setSuccessfullMessage('');
        setErrorMessage('');
        const email = e.target.email.value;
        const password = e.target.password.value;

        

        logIn(email,password)
        .then( result => {
            if(result.user){
                setSuccessfullMessage('Login Successful')
                navigateNow()
            }
        } )
        .catch( error => {
            setErrorMessage(error.message.split('/')[1].split(')')[0])
            console.log(error.message);
        } )


    }

    return (
        <section className="bg-Dark3 font-poppins">
        <Navbar/>
        <div className="flex justify-between items-center h-[calc(100vh-88px)]">
            <div className="bg-white w-[750px] mx-auto p-16 rounded-md">
                 <h1 className="text-4xl font-semibold text-center">Login your account</h1>
                 <hr className="my-12" />
                 <form onSubmit={handleLogIn}>
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