// Import necessary modules from React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Your components
import Home from "./Pages/Hero";
import About from "./Pages/About";
import Solutions from "./Pages/Solutions";
import DigitalLending from "./Pages/Menu/DigitalLending";
import CollectionMS from "./Pages/Menu/CollectionMS";
import CustodyMS from "./Pages/Menu/CustodyMS";
import SLIKRobotic from "./Pages/Menu/SLIKRobotic";
import CreditRecovery from "./Pages/Menu/CreditRecovery";
import WhyChooseUs from "./Pages/Menu/WhyChooseUs";
import OurClient from "./Pages/OurClient";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";

// Your main component
function App() {
  return (
    <Router>
      <Routes>
        {/* Each Route should be a child of Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Solutions" element={<Solutions />} />
        <Route path="/digitallending" element={<DigitalLending />} />
        <Route path="/collectionms" element={<CollectionMS />} />
        <Route path="/custodyms" element={<CustodyMS />} />
        <Route path="/slikrobotic" element={<SLIKRobotic />} />
        <Route path="/creditrecovery" element={<CreditRecovery />} />
        <Route path="/WhyChooseUs" element={<WhyChooseUs />} />
        <Route path="/ourclient" element={<OurClient />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <NotFound />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
