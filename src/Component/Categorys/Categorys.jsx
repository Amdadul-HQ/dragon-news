import pic1 from '../../assets/1.png'
import pic2 from '../../assets/2.png'
import pic3 from '../../assets/3.png'
import { CiCalendar } from "react-icons/ci";

const Categorys = () => {
    return (
        <div>
            <h1 className="font-semibold text-xl text-Dark1 mb-5">All Caterogy</h1>
            <div>
                <button className="block text-xl font-semibold text-Dark1 py-4 bg-Dark3 w-full">National News</button>
                <button className="block text-xl font-medium text-Dark2 py-4 w-full">Breaking News</button>
                <button className="block text-xl font-medium text-Dark2 py-4 w-full">Regular News</button>
                <button className="block text-xl font-medium text-Dark2 py-4 w-full">International News</button>
                <button className="block text-xl font-medium text-Dark2 py-4 w-full">Sports</button>
                <button className="block text-xl font-medium text-Dark2 py-4 w-full">Entertainment</button>
                <button className="block text-xl font-medium text-Dark2 py-4 w-full">Culture</button>
                <button className="block text-xl font-medium text-Dark2 py-4 w-full">Arts</button>
                <button className="block text-xl font-medium text-Dark2 py-4 w-full">All News</button>
            </div>
            <div>
                <div>
                    <img src={pic1} alt="" />
                    <h1>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                    <div>
                        <p>Sports</p>
                        <p><CiCalendar></CiCalendar></p>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Categorys;