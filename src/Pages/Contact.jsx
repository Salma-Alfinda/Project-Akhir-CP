import Navbar from "../Components/Navbar";
import OfficeImg from "../assets/Icons/city.svg";
import ContactImg from "../assets/Icons/whatsapp.png";
import EmailImg from "../assets/Icons/envelope.svg";
import CardContact from "../Components/CardContact";
import Floating from "../Components/Floating";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Spinner } from "react-bootstrap";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  // ref untuk form
  const form = useRef();

  // fungsi untuk form submission
  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // masukkan service id, template iid, dan user id pada emailjs disini...
      const result = await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID');
      console.log(result.text);
      window.alert('Your email has been sent successfully!');
    } catch (error) {
      console.log(error.text);
      window.alert('Oops! Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const cards = [
    {
      image: OfficeImg,
      title: "Office",
      describe:
        "Perumahan Gebang Baru No.28, RW.62, Jetis, Wedomartani, Ngemplak, Sleman Regency, Special Region of Yogyakarta 55584",
      path: "https://maps.app.goo.gl/UcZ2DDpRJUNWocpg7",
    },
    {
      image: ContactImg,
      title: "Contact",
      describe: "WhatsApp : +62 888 888 888",
      path: "https://wa.me//62888888888",
    },
    {
      image: EmailImg,
      title: "Email",
      describe: "cloufinanatakarya@gmail.com",
      path: "mailto:cloufinanatakarya@gmail.com",
    },
  ];

  return (
    <>
      <Navbar />
      <Floating />
      <div className="w-full h-full p-8 2xl:p-16 bg-blue-500">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 py-8 lg:py-16">
            {/* heading */}
            <div className="w-full h-auto md:p-8 2xl: text-white">
              <div className="justify-center items-center space-y-4 py-8 lg:py-2">
                <h1 className="uppercase font-Roboto text-[2.2rem] flex justify-center lg:text-[3rem] ">
                  Lorem, ipsum dolor.
                </h1>
                <p className="font-light text-[1rem] md:text-[1.3rem] lg:text-[1.2rem] text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum natus nesciunt hic excepturi accusantium ex numquam
                  quis, enim quae ea.
                </p>

                {/* card */}
                <div className="grid text-black grid-cols-3 gap-4 hidden md:flex md:py-8">
                  {cards.map((card) => (
                    <CardContact
                      key={card.title}
                      title={card.title}
                      image={card.image}
                      describe={card.describe}
                      path={card.path}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* inputan contact */}
            <div className="lg:py-12">
              <div className="w-full h-[540px] lg:w-100 lg:ml-auto p-8 2xl:p-14 bg-white rounded-lg border-2 shadow-lg shadow-emerald-400">
                <h1 className="flex justify-center font-Poppins text-[1.3rem] mb-4">Lorem ipsum dolor sit.</h1>
                <form ref={form} onSubmit={sendEmail}>
                  {/* name */}
                  <label htmlFor="name">
                    <input
                      className="w-full border border-2 border-emerald-400 p-4 text-[1.2rem] rounded-lg"
                      type="text"
                      placeholder="name"
                      name="user_name"
                    />
                  </label>
                  {/* email */}
                  <label htmlFor="email">
                    <input
                      className="mt-8 w-full border-emerald-400 p-4 border border-2 rounded-lg text-[1.2rem]"
                      type="email"
                      placeholder="email address"
                      name="user_email"
                    />
                  </label>
                  {/* message */}
                  <label htmlFor="message">
                    <textarea
                      className="mt-8 w-full border-2 rounded-lg text-[1.2rem] border-emerald-400 p-4"
                      placeholder="tinggalkan komentar"
                      name="message"
                      id=""
                      cols="46"
                      rows="5"
                    ></textarea>
                  </label>
                  {/* button */}
                  <button
                    className="mt-2 flex items-end ml-auto bg-indigo-500 hover:bg-emerald-500 p-2 rounded-lg text-white text-[1.2rem] transform hover:scale-105 transition-transform duration-300"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <Spinner animation="border" role="status" size="sm" className="mr-2">
                        <span className="sr-only">Loading...</span>
                      </Spinner>
                    ) : null}
                    {loading ? "Sending..." : "Send!"}
                  </button>
                </form>
              </div>
            </div>

            {/* Icons Saat di mobile */}
            <h1 className="flex justify-center font-Poppins text-white py-4 md:hidden">Lorem, ipsum dolor.</h1>
            <div className="flex justify-center md:hidden">
              <div className="grid grid-cols-3 gap-6 w-32">
                <button>
                  <a href="https://maps.app.goo.gl/UcZ2DDpRJUNWocpg7" target="_blank">
                    <img src={OfficeImg} alt="" />
                  </a>
                </button>
                <button>
                  <a href="https://wa.me//62888888888" target="_blank">
                    <img src={ContactImg} alt="" />
                  </a>
                </button>
                <button>
                  <a href="mailto:cloufinanatakarya@gmail.com" target="_blank">
                    <img src={EmailImg} alt="" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
