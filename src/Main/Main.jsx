import React, { useEffect } from "react";

// import qrCode from "../qr-code.svg";
import qrCode from "../qr-code-2.svg";
// import signal from "../signal.svg";
import signal from "../signal-2.svg";
import plan1 from "../plan1.svg";
import plan2 from "../plan2.svg";
import img1 from "../img1.svg";
import img2 from "../img2.svg";
import img3 from "../img3.svg";
import img4 from "../img4.svg";
import colorful from "../colorful.jpg";
import appStore from "../app-store.svg";
import playStore from "../play-store.svg";

import Footer from "../components/Footer/Footer";
import "./Main.scss";

const Main = () => {

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }, []);


  return (
    <div className="app">
      <div className = "shell" 
        //   style = {{
        //     backgroundImage: 'url("../colorful.jpg")',
        //     width: '100%', height: '100%',
        //     backgroundRepeat: 'no-repeat',
        //     backgroundAttachment: 'fixed'
        // }}
        >
      <div className="section1" >
        <p>
          It’s time to go <br /> <strong className="title"> steddy </strong> with your <br /> exercise routine.
        </p>
        <img className="web-image" src={qrCode} alt="QR Code" />
        <img className="mobile-image" src={plan1} alt="plan1" />
      </div>
      <div className="app-links">
          <img src={appStore} alt="App Store" />
          <img src={playStore} alt="Play Store" />
      </div>

      <div className="section2" >
        <img src={signal} alt="Signal" />
        <p> Steddy is the simplest way to build a weekly exercise plan.
          <br />
            <span style = {{ color: 'black', textDecoration: 'underline', fontWeight: 700 }}>
            Scan the QR code 
            </span>
          {' '}to see how far a little commitment can take you.
        </p>
      </div>

    
      <div className="section3">
        <div>
          <div className="details-container">
            {/* HAMMER */}
            <img className="icon" src={img1} alt="Hammer" /> 
            <h2 className="heading">Plan Flexibly</h2>
            <p className="description">
              <span style = {{ color: 'black', backgroundColor: '#e8d4f9', fontWeight: 700 }}>Plan any type of workout</span>{' '}
              be it yoga class, leg day, or your company softball game.</p>
            <p className="mobile-description">
              <span style = {{ color: 'black', backgroundColor: '#e8d4f9', fontWeight: 700 }}>Plan any type of workout</span>{' '}
              be it yoga class, leg day, or your company softball game.</p>
          </div>
          <div className="details-container reverse">
            {/* MAGNIFYING GLASS */}
            <img className="icon" src={img2} alt="Magnifier" />
            <h2 className="heading">Find Routines</h2>
            <p className="description">Not sure where to start? Explore our presets to find plans based on the results you're looking for.</p>
            <p className="mobile-description">Not sure where to start? Explore our presets to find plans based on the results you're looking for.</p>
          </div>
        </div>
        <img className="section3-image" src={plan1} alt="SCREENSHOT" />
      </div>

      <div className="section4">
        <img className="section4-image" src={plan2} alt="SCREENSHOT" />
        <div>
          <div className="details-container">
            <h2 className="heading">Kick Back</h2>
            <p className="description">Stay intentional about your exercise and your sanity by scheduling unplanned time :D</p>
            <p className="mobile-description">Stay intentional about your exercise and your sanity by scheduling unplanned time :D</p>
            {/* PALM TREE */}
            <img src={img3} alt="palmTree" className="icon" />
          </div>
          <div className="details-container reverse">
            <h2 className="heading">Track Progress</h2>
            <p className="description">We track your streaks, follow-through, and more so you know exactly how you're doing.</p>
            <p className="mobile-description">We track your streaks, follow-through, and more so you know exactly how you're doing.</p>
            {/* DATA */}
            <img src={img4} alt="data" className="icon" />
          </div>
        </div>
      </div>

      <Footer />
      </div>
    </div>
  );
};

export default Main;
