import { Link } from "react-router-dom";
import Floating from "../Components/Floating";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProductImg1 from '../assets/images/Produk2.png';
import ProductImg2 from '../assets/images/Produk3.png';
import ProductImg3 from '../assets/images/Produk4.png';
import ProductImg4 from '../assets/images/Produk5.png';
import ProductImg5 from '../assets/images/Produk4.png';
import ProductImg6 from '../assets/images/hero-1.png';

const Solutions = () => {
  // Card Component
  const CardProduct = [
    {
      title: "Digital Lending",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas voluptate vitae ullam fuga repellendus.",
      image: ProductImg1,
      link: '/DigitalLending',
    },
    {
      title: "Collection Management System",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas voluptate vitae ullam fuga repellendus.",
      image: ProductImg2,
      link: '/CollectionMS',
    },
    {
      title: "Custody Management System",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas voluptate vitae ullam fuga repellendus.",
      image: ProductImg3,
      link: '/CustodyMS',
    },
    {
      title: "SLIK Robotic",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas voluptate vitae ullam fuga repellendus.",
      image: ProductImg4,
      link: '/SLIKRobotic',
    },
    {
      title: "Credit Recovery",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas voluptate vitae ullam fuga repellendus.",
      image: ProductImg5,
      link: '/CreditRecovery',
    },
    {
      title: "Why choose us?",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas voluptate vitae ullam fuga repellendus.",
      image: ProductImg6,
      link: '/WhyChooseUs',
    },
  ];

  return (
    <>
      <Navbar />
      <Floating />
      <div className="w-full h-auto bg-sky-400">
        <div className="container mx-auto p-2 2xl:p-8">
          <div className="flex justify-center items-center py-16">
            <h1 className="text-white font-Roboto text-[2rem] rounded-lg p-2 shadow-emerald-400 lg:text-[3rem]">Lorem, ipsum dolor.</h1>
          </div>
          <div className="flex justify-center items-center mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CardProduct.map((card, index) => (
                <Link to={card.link} key={index} className="text-black">
                  <div
                    className="bg-white w-72 md:w-100 h-80 shadow-md shadow-indigo-400 hover:shadow-emerald-400 p-6 rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105 duration-300"
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-32 object-cover mb-4 rounded-md"
                    />
                    <h2 className="text-[1rem] font-bold mb-2 flex justify-center">{card.title}</h2>
                    <p className="text-gray-600 flex text-[1rem] text-justify p-2">{card.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Solutions;
