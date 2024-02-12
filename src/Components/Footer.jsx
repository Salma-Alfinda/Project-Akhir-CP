import WaIMG from '../assets/Icons/whatsapp.png';
import EmailIMG from '../assets/Icons/mail.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <>
       <div className="w-full h-auto bg-blue-500 text-white">
        <div className="container mx-auto 2xl:p-8">
            <div className="flex justify-center ml-auto items-center">
            <div className="grid lg:grid-cols-2 md:gap-2">
                {/* grid */}
            {/* cloufina */}
            <div className="p-8 w-[100%] text-white space-y-2 order-2 md:order-2 lg:order-1">
                <h1 className="text-[1.5rem] md:text-[2.3rem]  flex justify-start items-start font-Poppins">clou<span className='font-bold font-Roboto'>fina.</span></h1>
                <p className="text-[1rem] md:text-[1.5rem] font-Condensed text-justify"><span className='font-bold'>Alamat : <br /></span>Perumahan Gebang Baru No.28, RW.62, Jetis, Wedomartani, Ngemplak, Sleman Regency, Special Region of Yogyakarta 55584</p>
                <div className="py-4 flex justify-center md:justify-start space-x-4 md:space-x-8">
                    {/* Icons WA */}
                    <a href="https://wa.me//62888888888" target='_blank'>
                    <button className='transform hover:scale-105 mb-8' title='WhatsApp'>
                    <img src={WaIMG} alt="" className='w-6 md:w-8'/>
                    </button>
                    </a>

                    {/* Icons Mail */}
                    <a href="mailto:cloufinanatakarya@gmail.com">
                    <button className='transform hover:scale-105' title='Mail'>
                    <img src={EmailIMG} alt="" className='w-6 md:w-8'/>
                    </button>
                    </a>
                </div>
            </div>
            {/* Product */}
            <div className="p-8 w-full text-white space-y-2 order-1">
            <h1 className="text-[1.5rem] flex justify-start items-center font-Roboto">Product</h1>
            <ul className="p-2 text-[0.8rem] md:text-[1.3rem] space-y-2">
                <Link to="/DigitalLending">
                <li className='hover:underline'>Digital Lending</li>
                </Link>
                <Link to="/CollectionMS">
                <li className='hover:underline'>Collection Management System</li>
                </Link>
                <Link to="/CustodyMS">
                <li className='hover:underline'>Custody Management System</li>
                </Link>
                <Link to="/SLIKRobotic">
                <li className='hover:underline'>SLIK Robotic</li>
                </Link>
                <Link to="/CreditRecovery">
                <li className='hover:underline'>Credit Recovery</li>
                </Link>
            </ul>
            </div>
            </div>
            </div>
            <hr className='w-[100%]' />
            <div className="flex justify-center text-[0.8rem] md:text-[1.2rem] py-6 pb-6">
                <h1>Copyright © {currentYear} by <span><a href="/" className='underline'>ClouFina</a></span> | All Rights Reserved</h1>
            </div>
        </div>
       </div>
        </>
    )
}
export default Footer;