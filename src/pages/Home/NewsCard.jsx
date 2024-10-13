import { useState } from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { title, author, published_date, details, rating, total_view, image_url, _id } = news;

    // State to track whether the full details are shown
    const [isExpanded, setIsExpanded] = useState(false);

    // Function to toggle the text expansion
    const toggleDetails = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="card bg-base-100 shadow-md rounded-md overflow-hidden mb-5">
            <div className="flex items-center mb-2">
                <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full mr-2" />
                <div>
                    <h3 className="font-semibold">{author.name}</h3>
                    <p className="text-gray-500 text-sm">{new Date(published_date).toLocaleDateString()}</p>
                </div>
            </div>



            <div className="p-4">

                <img src={image_url} alt={title} className="w-full h-48 object-cover" />

                <h2 className="text-xl font-bold mb-2">{title}</h2>

                {/* Conditional rendering for details: slice if not expanded */}
                <p className="text-gray-700 mb-2">
                    {isExpanded ? details : `${details.slice(0, 150)}...`}
                </p>

                {/* Read More / Read Less button */}
                <div className="flex justify-between items-center my-3">
                    <button
                        className="text-blue-500 hover:underline text-sm mb-2"
                        onClick={toggleDetails}
                    >
                        {isExpanded ? "Read Less" : "Read More"}
                    </button>

                    <Link to={`/news/${_id}`} className="btn "> View Details</Link>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <span className="text-yellow-500">{'★'.repeat(Math.floor(rating.number))}</span>
                        <span className="text-gray-500 text-sm ml-1">({rating.number})</span>
                    </div>
                    <span className="text-gray-500 text-sm">{total_view} Views</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
