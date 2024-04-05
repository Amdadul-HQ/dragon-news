import Header from "../../Component/Header/Header";
import Marquee from "react-fast-marquee";
import Navbar from "../../Component/Navbar/Navbar";
import Categorys from "../../Component/Categorys/Categorys";
import NewsFeed from "../../Component/NewsFeed/NewsFeed";
import RightBar from "../../Component/RightBar/RightBar";

const Home = () => {
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
            <section className="grid grid-cols-4">
                <div>
                    {/* Category */}
                    <Categorys/>
                </div>
                <div className="col-span-2">
                    {/* news */}
                    <NewsFeed/>
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