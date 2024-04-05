import pic1 from '../../assets/1.png'
import pic2 from '../../assets/2.png'
import pic3 from '../../assets/3.png'
import { CiCalendar } from "react-icons/ci";

const Categorys = ({handleShowNews}) => {




    return (
        <div>
            <h1 className="font-semibold text-xl text-Dark1 mb-5">All Caterogy</h1>
            <div>
                {

                }
                <button onClick={()=> handleShowNews()} className="block text-xl font-semibold text-Dark1 py-4 bg-Dark3 w-full">National News</button>
                <button onClick={()=> handleShowNews(1)} className="block text-xl font-medium text-Dark2 py-4 w-full">Breaking News</button>
                <button onClick={()=> handleShowNews(2)} className="block text-xl font-medium text-Dark2 py-4 w-full">Regular News</button>
                <button onClick={()=> handleShowNews(3)} className="block text-xl font-medium text-Dark2 py-4 w-full">International News</button>
                <button onClick={()=> handleShowNews(4)} className="block text-xl font-medium text-Dark2 py-4 w-full">Sports</button>
                <button onClick={()=> handleShowNews(5)} className="block text-xl font-medium text-Dark2 py-4 w-full">Entertainment</button>
                <button onClick={()=> handleShowNews(6)} className="block text-xl font-medium text-Dark2 py-4 w-full">Culture</button>
                <button onClick={()=> handleShowNews(7)} className="block text-xl font-medium text-Dark2 py-4 w-full">Arts</button>
                <button onClick={()=> handleShowNews(0)} className="block text-xl font-medium text-Dark2 py-4 w-full">All News</button>
            </div>
            <div>
                <div className='mb-4 mt-7'>
                    <img className='w-full' src={pic1} alt="" />
                    <h1 className='text-xl font-semibold text-Dark1 my-5'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                    <div className='flex gap-x-5'>
                        <p className='text-base font-medium text-Dark1'>Sports</p>
                        <p className='flex items-center text-Dark2 gap-x-3'><CiCalendar className='text-2xl'></CiCalendar>Jan 4, 2022</p>
                    </div>
                </div>
                <div className='mb-4 mt-7'>
                    <img className='w-full' src={pic2} alt="" />
                    <h1 className='text-xl font-semibold text-Dark1 my-5'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                    <div className='flex gap-x-5'>
                        <p className='text-base font-medium text-Dark1'>Sports</p>
                        <p className='flex items-center text-Dark2 gap-x-3'><CiCalendar className='text-2xl'></CiCalendar>Jan 4, 2022</p>
                    </div>
                </div>
                <div className='mb-4 mt-7'>
                    <img className='w-full' src={pic3} alt="" />
                    <h1 className='text-xl font-semibold text-Dark1 my-5'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                    <div className='flex gap-x-5'>
                        <p className='text-base font-medium text-Dark1'>Sports</p>
                        <p className='flex items-center text-Dark2 gap-x-3'><CiCalendar className='text-2xl'></CiCalendar>Jan 4, 2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categorys;