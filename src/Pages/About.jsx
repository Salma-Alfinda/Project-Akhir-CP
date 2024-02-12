import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import AboutGambar from "../assets/images/hero-2.png";
import CardImage1 from "../assets/images/FotoCowok.jpg";
import CardImage2 from "../assets/images/FotoCewek.jpg";
import CardImage3 from "../assets/images/FotoCewek2.jpg";
import Floating from "../Components/Floating";

const About = () => {
  // Placeholder data for cards
  const cards = [
    {
      title: "Adi Wijaya, M.T.I",
      description: "- Lorem ipsum dolor -",
      image: CardImage1,
    },
    {
      title: "Ani Fitriani, Ph.D.",
      description: "- Lorem ipsum dolor -",
      image: CardImage2,
    },
    {
      title: "Dewi Sari, M.Sc.",
      description: "- Lorem ipsum dolor -",
      image: CardImage3,
    },
    {
      title: "Budi Pratama, S.Kom",
      description: "- Lorem ipsum dolor -",
      image: CardImage1,
    },
    {
      title: "Rini Permata, MBA",
      description: "- Lorem ipsum dolor -",
      image: CardImage2,
    },
    {
      title: "Siti Rahayu, S.Kom",
      description: "- Lorem ipsum dolor -",
      image: CardImage3,
    },
  ];

  return (
    <>
      <Navbar />
      <Floating />
      <div className="w-full h-auto text-white bg-blue-500">
        <div className="container mx-auto py-16">
          <div className="py-2">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between ml-auto">
              {/* heading */}
              <div className="md:pr-8 p-8 order-2 md:order-1">
                <h1 className="text-[1.3rem] md:text-[1.9rem] font-bold mb-2 flex justify-center">Welcome to Our Story</h1>
                <p className="flex justify-center items-center text-justify text-[1rem] md:text-[1.1rem]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At similique aliquam distinctio ipsum ex! Iure incidunt itaque nulla? Molestiae provident quisquam sit impedit repellendus deserunt id consequuntur? Excepturi repudiandae incidunt ut est cumque, voluptatum accusamus maiores animi cum ipsa illum magnam accusantium ex, harum vitae quas quae architecto aut laudantium!
                </p>
              </div>
              {/* image */}
              <div className="flex justify-center items-center ml-auto w-full order-1">
                <img
                  src={AboutGambar}
                  alt="About Us"
                  className="w-[300px] md:w-[400px] rounded-lg md:ml-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full py-8 bg-gray-200">
        <div className="container mx-auto">
          {/* cards */}
          <div className="flex justify-center items-center p-8">
          <h1 className="text-black text-[2rem] md:text-[3rem] font-Condensed">Lorem ipsum dolor sit.</h1>
          </div>

        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white w-80 md:w-100 h-80 shadow-md shadow-indigo-400 p-6 rounded-lg shadow-md"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-44 object-cover mb-4 rounded-md"
                />
                <h2 className="text-xl font-bold mb-2 flex justify-center">{card.title}</h2>
                <p className="text-gray-600 flex justify-center">{card.description}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
