import { CiBookmark , CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoEye } from "react-icons/io5";



const NewsFeed = ({news}) => {

    const {_id ,author,title,image_url,details,rating,total_view} = news


    return (
        <div className="mb-8 border rounded-md">
            <div className="flex justify-between bg-Dark3 py-4 px-5 mb-4">
                <div className="flex gap-x-4">
                    <img className="w-10 rounded-full" src={author.img} alt="" />
                    <div>
                        <p className="text-Dark1 text-base font-semibold">{author.name}</p>
                        <p className="text-Dark2 text-sm font-normal">{author.published_date}</p>
                    </div>
                </div>
                <div className="text-2xl flex items-center gap-x-2">
                <CiBookmark/>
                <CiShare2/>
                </div>
            </div>
            <div className="p-5">
                <h1 className="text-Dark1 font-bold text-xl mb-5">{title}</h1>
                <img className="mb-8" src={image_url} alt="" />
                <p className="text-Dark2 text-base font-normal">{ details.length > 200 ? details.slice(0,200) : details}.... <Link to={`/news/${_id}`} className="text-[#FF8C47] font-semibold">Read More</Link></p>
                <hr className="mt-5" />
            </div>
            <div className="flex items-center justify-between mt-6 px-5 mb-5">
                <div className="flex gap-x-3">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p>{rating.number}</p>
                </div>
                <p className="flex items-center gap-x-2"><IoEye className="text-2xl"/>{total_view}</p>
            </div>
        </div>
    );
};

export default NewsFeed;