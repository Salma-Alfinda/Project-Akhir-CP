import { Link } from 'react-router-dom';
import FloatingImg from '../assets/Icons/Floating.png';

const Floating = () => {
  return (
    <>
      <div className="fixed bottom-0 right-0 z-10 transform hover:scale-105 duration-300" title='contact us'>
        <div className="w-12 h-12 bg-white rounded-l-3xl flex items-center justify-center">
          <Link to="https://wa.me//62888888888" target="_blank" rel="noopener noreferrer">
            <button>
              <img src={FloatingImg} alt="" className="w-full p-2" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Floating;
