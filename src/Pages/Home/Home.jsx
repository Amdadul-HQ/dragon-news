import Header from "../../Component/Header/Header";
import Marquee from "react-fast-marquee";
import Navbar from "../../Component/Navbar/Navbar";
import Categorys from "../../Component/Categorys/Categorys";
import NewsFeed from "../../Component/NewsFeed/NewsFeed";
import RightBar from "../../Component/RightBar/RightBar";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {

    const news = useLoaderData()
    const [showNews,setShowNews] = useState(news)

    const handleShowNews = (id) => {
       const filterNews = news.filter( n => n.category_id == id )
       setShowNews(filterNews)
    }


// func
// onClick
// perametar
// 

    return (
        <>
        <header className="max-w-screen-xl mx-auto">
            <Header></Header>
                <div className="p-4 bg-Dark3 flex items-center mt-7 mb-5">
                    <button className="text-xl font-poppins font-medium py-2 px-6 bg-Btnbg text-[#fff]">Latest</button>
                    <Marquee className="text-Dark1 text-lg font-semibold">
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                    </Marquee>
                </div>
            <Navbar></Navbar>
        </header>
        <main className="max-w-screen-xl mx-auto font-poppins">
            <section className="grid grid-cols-4 gap-x-6 mt-20">
                <div>
                    {/* Category */}
                    <Categorys handleShowNews={handleShowNews} />
                </div>
                <div className="col-span-2">
                    {/* news */}
                    <h1 className="font-semibold text-xl text-Dark1 mb-5">Dragon News Home</h1>
                    {
                        showNews.map( aNews => <NewsFeed key={aNews._id} news={aNews} /> )
                    }
                </div>
                <div>
                    {/* right side bar */}
                    <RightBar/>
                </div>
            </section>
        </main>
        </>
    );
};

export default Home;