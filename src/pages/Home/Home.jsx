import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
    const news = useLoaderData();
    //console.log(news);

    return (
        <div>
            <Header />
            <BreakingNews />
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="">
                    <LeftSideNav />
                </div>

                {/* News container */}
                <div className="md:col-span-2 ">
                    {news.length > 0 ? (
                        news.map(aNews => (
                            <NewsCard key={aNews._id} news={aNews} />
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No news available at the moment.</p>
                    )}
                </div>

                <div className="">
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;
