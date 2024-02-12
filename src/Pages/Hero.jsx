import Footer from "../Components/Footer";
import Slider from "react-slick";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import cardImg from '../assets/images/logo.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardImgSatu from '../assets/images/hero-4.png'
import CardImgDua from '../assets/images/hero-5.png'
import CardImgTiga from '../assets/images/hero-7.png'
import CardImgEmpat from '../assets/images/hero-3.png'
import Floating from "../Components/Floating";
// import Floating from "../Components/Floating";

const Hero = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: 5000,
  };
  return (
    <>
      <Navbar />
      <Floating />
      <div className="w-full lg:h-screen xl:h-screen 2xl:h-screen p-2 py-12 lg:py-8 bg-blue-500">
        <div className="container rounded-lg mx-auto my-auto grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2">
       {/* Left Section */}
       <div className="container p-8 md:p-14 rounded-lg space-y-2 py-16 xl:py-6 lg:translate-y-36 xl:translate-y-20">
            {/* Slider */}
            <Slider {...sliderSettings}>
              <div>
                <img
                  className="d-block w-100"
                  src={CardImgSatu}
                  alt="First slide"
                />
              </div>
              <div>
                <img
                  className="d-block w-100"
                  src={CardImgDua}
                  alt="Second slide"
                />
              </div>
              <div>
                <img
                  className="d-block w-100"
                  src={CardImgTiga}
                  alt="Third slide"
                />
              </div>
              <div>
                <img
                  className="d-block w-100"
                  src={CardImgEmpat}
                  alt="Fourth slide"
                />
              </div>
            </Slider>
          </div>

         {/* Right Section */}
         <div className="">
         <div className="mx-auto w-[300px] h-auto md:w-[700px] lg:w-[500px] lg:h-0 xl:w-[500px] xl:h-0 2xl:h-[620px] 2xl:w-[500px] flex flex-wrap justify-center items-center ml-auto lg:py-14 xl:py-8 2xl:translate-x-24 2xl:py-12 ">
              <h1 className="font-Roboto text-[1.5rem] md:text-[3rem] lg:text-[2rem] xl:text-[1.7rem]  2xl:text-[2rem] p-2 text-white text-back ">Our Product</h1>
              <div className="grid grid-cols-2 gap-2 md:gap-4 xl:gap-4 flex flex-wrap items-start hover:cursor-pointer">
              {/* card 1*/}
                <Link to="/DigitalLending">
                <div className="p-2 py-0 border w-36 h-48 md:w-80 md:h-80 lg:w-56 lg:h-60 xl:w-56 xl:h-56 2xl:w-56 2xl:h-56 bg-white border-2 shadow-md shadow-indigo-400 border-indigo-300 rounded-xl text-center transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-300">
                <h1 className="font-bold text-[1.1rem] md:text-[1.3rem] xl:text-[1rem] p-2">Lorem, ipsum.</h1>
                <div className="rounded-md h-28 w-38 flex justify-center items-center md:mt-4 lg:mt-0 ">
                <img src={CardImgSatu} alt="logo" className="w-full lg:w-44 p-2 " />
                </div>
                <p className="text-[0.8rem] md:text-[1rem] xl:text-[1rem] text-start xl:p-0 p-2 hidden md:flex md:p-8 lg:p-0 lg:flex 2xl:flex">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div> 
                </Link>

                {/* Card 2 */}
                <Link to="/CollectionMS">
                <div className="p-2 py-0 border w-36 h-48 md:w-80 md:h-80 lg:w-56 lg:h-60 xl:w-56 xl:h-56 2xl:w-52 2xl:w-56 2xl:h-56 bg-white border-2 shadow-md shadow-indigo-400 border-indigo-300 rounded-xl text-center transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-300">
                <h1 className="font-bold text-[1.1rem] md:text-[1.3rem] xl:text-[1rem] p-2">Lorem, ipsum.</h1>
                <div className="rounded-md h-28 w-38  flex justify-center items-center md:mt-4 lg:mt-0">
                 <img src={CardImgDua} alt="logo" className="w-full lg:w-44 p-2" />
                </div>
                <p className="text-[0.8rem] md:text-[1rem] xl:text-[1rem] text-start p-2 md:p-8 lg:p-0 hidden md:flex lg:flex 2xl:flex">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>  
                </Link>

                {/* Card 3 */}
                <Link to="/CustodyMS">
                <div className="p-2 py-0 border w-36 h-48 md:w-80 md:h-80 lg:w-56 lg:h-60 xl:w-56 xl:h-56 2xl:w-56 2xl:h-56 bg-white border-2 shadow-md shadow-indigo-400 border-indigo-300 rounded-xl text-center transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-300">
                <h1 className="font-bold text-[1.1rem] md:text-[1.3rem] xl:text-[1rem] p-2">Lorem, ipsum.</h1>
                <div className="rounded-md h-28 w-38 flex justify-center items-center md:mt-4 lg:mt-0">
                 <img src={CardImgTiga} alt="logo" className="w-full lg:w-44 p-2" />
                </div>
                <p className="text-[0.8rem] md:text-[1rem] xl:text-[1rem] text-start p-2 md:p-8 lg:p-0 hidden md:flex lg:flex 2xl:flex">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>  
                </Link>

                {/* Card 4 */}
                <Link to="/SLIKRobotic">
                <div className="p-2 py-0 border w-36 h-48 md:w-80 md:h-80 lg:w-56 lg:h-60 xl:w-56 xl:h-56 2xl:w-56 2xl:h-56 bg-white border-2 shadow-md shadow-indigo-400 border-indigo-300 rounded-xl text-center transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-300">
                <h1 className="font-bold text-[1.1rem] md:text-[1.3rem] xl:text-[1rem] p-2">Lorem, ipsum.</h1>
                <div className="rounded-md h-28 w-38 md:w-auto flex justify-center items-center md:mt-4 lg:mt-0 xl:mt-0">
                 <img src={CardImgEmpat} alt="logo" className="w-full lg:w-44 p-2" />
                </div>
                <p className="text-[0.8rem] md:text-[1rem] xl:text-[1rem] text-start p-2 md:p-8 lg:p-0 xl:p-0 2xl:p-0 hidden md:flex lg:flex xl:flex 2xl:flex">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>               
                </Link>
                
              </div>

              {/* Product Lainnya */}
              <div className="grid grid-cols-1 2xl:grid-cols-2 flex py-8 md:p-8 xl:p-4">
              <Link to="/Solutions">
              <button className="p-2 py-2 border-2 border-white rounded-lg text-white text-[0.9rem] md:text-[1rem] xl:text-[1rem] 2xl:text-[1rem] cursor-pointer flex justify-center items-center transform hover:scale-105 transition-transform duration-300 hover:bg-red-700 hover:text-white">Product Lainnya </button>
                </Link>
              </div>
                {/* button */}
              <div className="py-4 cursor-pointer md:text-[1rem] flex justify-end items-end ml-8 md:ml-auto md:p-8 xl:p-2">
                <Link to='/contact'>
                <button className="bg-yellow-500  p-2 shadow-sm shadow-red-500 rounded-br-xl text-white hover:bg-red-700 transform hover:scale-105 transition-transform duration-300">
                  Request Demo
                </button>
                </Link>
              </div>
            </div>
              </div>
          </div>
        {/* <Floating /> */}
        </div>
      {/* <Footer /> */}
    </>
  );
};

export default Hero;
