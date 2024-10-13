import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import frame from '../../../src/assets/Frame.png'
import { useRef } from "react";

const NewsDetails = () => {
    const { id } = useParams();
    const news = useLoaderData();


    const newsItem = news.find(n => n._id === id);


    const relatedNews = news.filter(n => n.category_id === newsItem.category_id && n._id !== id);


    const editorsInsight = relatedNews.slice(0, 6);

    if (!newsItem) {
        return <div>News not found</div>;
    }



    const topRef = useRef(null); // For top div




    const scrollToTop = () => {
        topRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll back to top
    };


    return (
        <div>
            <Header />
            <Navbar />
            <div className="container mx-auto grid grid-cols-4 gap-4 mt-8">

                {/* News details container */}
                <div ref={topRef} className="col-span-3 bg-white p-6 rounded shadow-md">
                    <h1 className="text-2xl font-bold mb-4">{newsItem.title}</h1>
                    <p className="text-gray-600 mb-2">Published on: {newsItem.author.published_date}</p>
                    <img src={newsItem.image_url} alt={newsItem.title} className="mb-4 w-full h-auto rounded" />
                    <p className="text-gray-800 mb-6">{newsItem.details}</p>





                </div>

                {/* Right-side navigation */}
                <div>
                    <RightSideNav />
                </div>
            </div>

            {/* Editor's Insight */}
            <div onClick={scrollToTop} className="container mx-auto mt-8">
                <h3 className="text-xl font-semibold mb-4">Editors Insight</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {editorsInsight.map(item => (

                        <Link to={`/news/${item._id}`} key={item._id} >
                            <div key={item._id} className="bg-white p-4 rounded shadow-md">
                                <img src={item.image_url} alt={item.title} ></img>

                                <h4 className="text-lg font-medium">{item.title}</h4>

                                <p className="flex gap-2"><img src={frame} alt="" /> {item.author?.published_date?.split(' ')[0]} </p>

                            </div>
                        </Link>
                    ))}

                </div>
            </div>
        </div >
    );
};

export default NewsDetails;
