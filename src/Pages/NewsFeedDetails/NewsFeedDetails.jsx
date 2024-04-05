import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../Component/Header/Header";
import RightBar from "../../Component/RightBar/RightBar";
import { FaArrowLeftLong } from "react-icons/fa6";
import pic1 from '../../assets/1.png';
import pic2 from '../../assets/2.png';
import pic3 from '../../assets/3.png';
import { CiCalendar } from "react-icons/ci";

const NewsFeedDetails = () => {

    const news = useLoaderData()

    const {id} = useParams()

    const aNews = news.find( n => n._id == id )

    const {image_url , title , details} = aNews;

    console.log(aNews);


    return (
        <section className="max-w-screen-xl mx-auto">
            <Header></Header>
            <div className="grid grid-cols-4 gap-x-6">
                <div className="col-span-3">
                        <h1 className="font-semibold text-xl text-Dark1 mb-5">Dragon News Home</h1>
                    <div className="p-8 border h-fit rounded-md">
                        <div>
                            <img className="w-full" src={image_url} alt="" />
                            <h1 className="text-Dark1 my-5 text-2xl font-bold">{title}</h1>
                            <p className="text-Dark2 font-normal text-base">{details}</p>
                            <button className="bg-Btnbg text-white px-6 py-2 gap-x-2 flex text-xl font-medium items-center mt-8"> <FaArrowLeftLong className="text-2xl" /> All news in this category</button>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h1 className="font-semibold text-xl text-Dark1 mb-5">Editors Insight</h1>
                        <div className="grid grid-cols-3 gap-x-6">
                            <div className='mb-4 mt-7'>
                                <img className='w-full' src={pic1} alt="" />
                                <h1 className='text-xl font-semibold text-Dark1 my-5'>21 The Most Stylish Wedding Guest Dresses For Spring</h1>
                                <div className='flex gap-x-5'>
                                    <p className='text-base font-medium text-Dark1'>Sports</p>
                                    <p className='flex items-center text-Dark2 gap-x-3'><CiCalendar className='text-2xl'></CiCalendar>Jan 4, 2022</p>
                                </div>
                            </div>
                            <div className='mb-4 mt-7'>
                                <img className='w-full' src={pic2} alt="" />
                                <h1 className='text-xl font-semibold text-Dark1 my-5'>21 The Most Stylish Wedding Guest Dresses For Spring</h1>
                                <div className='flex gap-x-5'>
                                    <p className='text-base font-medium text-Dark1'>Sports</p>
                                    <p className='flex items-center text-Dark2 gap-x-3'><CiCalendar className='text-2xl'></CiCalendar>Jan 4, 2022</p>
                                </div>
                            </div>
                            <div className='mb-4 mt-7'>
                                <img className='w-full' src={pic3} alt="" />
                                <h1 className='text-xl font-semibold text-Dark1 my-5'>21 The Most Stylish Wedding Guest Dresses For Spring</h1>
                                <div className='flex gap-x-5'>
                                    <p className='text-base font-medium text-Dark1'>Sports</p>
                                    <p className='flex items-center text-Dark2 gap-x-3'><CiCalendar className='text-2xl'></CiCalendar>Jan 4, 2022</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <RightBar></RightBar>
                </div>
            </div>
        </section>
    );
};

export default NewsFeedDetails;