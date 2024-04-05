import { FaGoogle , FaGithub , FaFacebookF , FaTwitter} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import pic1 from '../../assets/qZone1.png'
import pic2 from '../../assets/qZone2.png'
import pic3 from '../../assets/qZone3.png'

const RightBar = () => {
    return (
        <div>
            <h1 className="font-semibold text-xl text-Dark1 mb-5">Login With</h1>
            <div className="w-full space-y-3">
                <button className="flex items-center text-lg justify-center gap-x-2 font-medium py-2 rounded-lg text- border w-full"><FaGoogle/>Login With Google</button>
                <button className="flex items-center text-lg justify-center gap-x-2 font-medium py-2 rounded-lg border w-full"><FaGithub/>Login With Github</button>
            </div>
            <h1 className="font-semibold text-xl text-Dark1 mb-5 mt-8">Find Us On</h1>
            <div className="text-base font-medium text-Dark2">
                <Link className="block flex w-full py-4 items-center border rounded-t-lg pl-4 border-Dark3"><FaFacebookF className="border text-3xl text-Btnbg rounded-full mr-3 p-2"/> Facebook</Link>
                <Link className="block flex w-full py-4 items-center border-x pl-4 border-Dark3"><FaTwitter className="border text-3xl text-Btnbg rounded-full mr-3 p-2"/>Twitter</Link>
                <Link className="block flex w-full py-4 items-center border rounded-b-lg pl-4 border-Dark3"><FaInstagram className="border text-3xl text-Btnbg rounded-full mr-3 p-2"/>Instagram</Link>
            </div>
            <div className="bg-Dark3 p-4 mt-5">
                <h1 className="font-semibold text-xl text-Dark1">Q-Zone</h1>
                <img className="mt-8" src={pic1} alt="" />
                <img className="mt-8" src={pic2} alt="" />
                <img className="mt-8" src={pic3} alt="" />
            </div>
        </div>
    );
};

export default RightBar;