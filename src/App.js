import logo from './logo.svg';
import './App.css';
import Header from "./component/header/index.js";
import MovingFrwrd from './component/movingForward/index.js';
import HowItWorks from './component/howItWorks/index.js';
import ReadyToDiveIn from './component/readyToDiveIn/index.js';
import TrstdBy from './component/trustedBy/index.js';
import StayInTouch from './component/stayInTouch/index.js';
import Footer from './component/footer/index.js';
import SmllOffers from './component/smallOfferSection';

function App() {
  return (
    <div>
      <Header />
      <MovingFrwrd />
      <SmllOffers />
      <HowItWorks />
      <ReadyToDiveIn />
      <TrstdBy />
      <StayInTouch />
      <Footer />
    </div>
  );
}

export default App;
