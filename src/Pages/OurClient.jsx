import React, {useState} from "react";
import Navbar from "../Components/Navbar";
import cardImg from '../assets/images/logo.png';
import Footer from "../Components/Footer";
import Floating from "../Components/Floating";

// card component
const Card = ({ title, image }) => {
    return (
<div className="w-full flex justify-center items-center">
  <div className="bg-white w-44 lg:w-56 xl:w-60 2xl:w-72 rounded-xl shadow-md shadow-indigo-400 p-4">
    <div className="flex justify-center items-center mb-4">
      <img src={image} alt={title} className="w-20 h-20 rounded-md" />
    </div>
    <div className=""> 
    <h2 className="text-[0.8rem] md:text-[1rem] xl:text-[1.2rem] font-semibold text-center">{title}</h2>
    </div>
  </div>
</div>
  );
};

const OurClient = () => {
    const [activeTab, setActiveTab] = useState("All");
 
    const tabs = ["All","Finance", "Bank"];

    const cardsData = [
        {
            title: 'lorem ipsum',
            image: cardImg,
            category: 'Finance'
        },
        {
            title: 'lorem ipsum',
            image: cardImg,
            category: 'Finance'
        },
        {
            title: 'lorem ipsum',
            image: cardImg,
            category: 'Bank'
        },
        {
            title: 'lorem ipsum',
            image: cardImg,
            category: 'Bank'
        },
        {
            title: 'lorem ipsum',
            image: cardImg,
            category: 'Finance'

        },
        {
            title: 'lorem ipsum',
            image: cardImg,
            category: 'Bank'
        },
        {
            title: 'lorem ipsum',
            image: cardImg,
            category: 'Bank'
        },
        {
            title: 'lorem ipsum',
            image: cardImg,
            category: 'Finance'
        },
        {
            title: 'lorem ipsum',
            image: cardImg,
            category: 'Finance'
        },
        {
            title: 'lorem ipsum',
            image: cardImg,
            category: 'Finance'
        },
    ];

    const filteredCards = activeTab === "All" ? cardsData : cardsData.filter(card => card.category === activeTab);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return(
        <>
        <Navbar />
        <Floating />
        {/* content */}
        <div className="w-full h-auto bg-gray-100">
            <div className="container mx-auto p-2">
                {/* card */}
                <div className="container mx-auto p-2 py-8">
                {/* heading */}
                <div className="flex justify-center items-center py-8">
                    <h1 className="text-[1.5rem] text-black font-semibold uppercase font-Roboto">Lorem, ipsum dolor.</h1>
                </div>
                {/* tab buttons */}
                <div className="flex justify-center space-x-2">
                    {tabs.map((tab) => (
                        <button
                        key={tab}
                        className={`p-2 px-4 rounded-md ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-400 transition`}
                        onClick={() => handleTabClick(tab)}
                      >
                        {tab}
                      </button>
                    ))}
                </div>
                {/* cards */}
                <div className="container mx-auto py-2">
                </div>
                    {/* grid */}
                    <div className="flex flex-wrap grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {/* card */}
                        {filteredCards.map((card, index) => (
                            <Card key={card.index} title={card.title} image={card.image} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default OurClient;