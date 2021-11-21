import React, { useEffect, useRef } from "react";

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
      <div className="section1">
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
        <img src={signal} alt="Signal" height = {100}/>
        <p> Steddy is the simplest way to build a weekly fitness plan.
          <br />
            <span style = {{ color: 'black', backgroundColor: '#e8d4f9', fontWeight: 700 }}>
            Scan the QR code 
            </span>
          {' '}to see how far a little commitment can take you.
        </p>
      </div>

      <div className="section3">
        <div>
          
          <div className="details-container">
            <img className="icon" src={img1} alt="Hammer" />
            <h2 className="heading">Plan Flexibly</h2>
                <p className="description">
                  Steddy lets users plan any type of workout, whether it be yoga class, leg day, or a company softball game.
                </p>
                <p className="mobile-description">
                  Steddy lets users plan any type of workout, whether it be yoga class, leg day, or a company softball game.
                </p>
          </div>

          <div className="details-container reverse">
            <img className="icon" src={img2} alt="Magnifier" />
            <h2 className="heading">Find Routines</h2>
            <p className="description">
              Not sure where to start? Use the Explore option to find preset plans based on the results you're looking for.
            </p>
            <p className="mobile-description">
              Not sure where to start? Use the Explore option to find preset plans based on the results you're looking for.
            </p>
          </div>

      </div>
        <img className="section3-image" src={plan1} alt="PalmTree" />
      </div>

      <div className="section4">
        <img className="section4-image" src={plan2} alt="Data" />
        <div>
          <div className="details-container">
            <h2 className="heading">Kick Back</h2>
            <p className="description">
              Steddy helps you stay intentional about your exercise AND your time off by letting you schedule the breaks you need :)
            </p>
            <p className="mobile-description">
              Steddy helps you stay intentional about your exercise AND your time off by letting you schedule the breaks you need :)
            </p>
            <img src={img3} alt="Signal" className="icon" />
          </div>
          <div className="details-container reverse">
            <h2 className="heading">Track Progress</h2>
            <p className="description">
              Week streaks, follow-through rates, intensity scores, and not much more. You won't be buried in a pile of statistics, but you'll know how you're doing.
            </p>
            <p className="mobile-description"> 
              Week streaks, follow-through rates, intensity scores, and not much more. You won't be buried in a pile of statistics, but you'll know how you're doing.
            </p>
            <img src={img4} alt="Signal" width="15px" className="icon" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Main;
