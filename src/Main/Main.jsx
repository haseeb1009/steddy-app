import React, { useEffect } from "react";

import signal from "../signal-2.svg";
import plan1 from "../plan1.svg";
import plan2 from "../plan2.svg";
import img1 from "../img1.svg";
import img2 from "../img2.svg";
import img3 from "../img3.svg";
import img4 from "../img4.svg";
import appStore from "../app-store.svg";
import playStore from "../play-store.svg";

// QR CODE
import qrCode from "../qr-code-4.svg";

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
      <div className = "shell" >
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
        <p> 
        Steddy is the 
        {' '}
        <span style = {{ 
          fontSize: 'calc(11px + 1.2vw)', 
          backgroundColor: '#e8d4f9', 
          color: '#4E0591', 
          // backgroundColor: '#E3FDF0', 
          // color: '#103B26', 
          padding: '2px 10px', 
          borderRadius: '5px', 
          fontWeight: '600',
          borderWidth: '3px',
          borderColor: '#103B26', 
          }}>
          free and simple
        </span> 
        {' '}
        way to build a weekly exercise plan.
          <br />
            <span style = {{ fontSize: 'calc(14px + 1.5vw)', marginRight: '6px'}}>📷  </span>
            Scan the QR code to see how far a little commitment can take you.
        </p>
      </div>

    
      <div className="section3">
        <div>
          <div className="details-container">
            {/* HAMMER */}
            <img className="icon" src={img1} alt="Hammer" /> 
            <h2 className="heading">Plan Flexibly</h2>
            <p className="description">
              <span style = {{ color: 'black', fontWeight: 700 }}>Plan any type of workout</span>{' '}
              be it yoga class, leg day, or your company softball game.</p>
            <p className="mobile-description">
              <span style = {{ color: 'black', fontWeight: 700 }}>Plan any type of workout</span>{' '}
              be it yoga class, leg day, or your company softball game.</p>
          </div>
          <div className="details-container reverse">
            {/* MAGNIFYING GLASS */}
            <img className="icon" src={img2} alt="Magnifier" />
            <h2 className="heading">Find Routines</h2>
            <p className="description">Not sure where to start? 
            {' '}<span style = {{ color: 'black', fontWeight: 700 }}>Explore our presets to find plans</span>{' '}
            based on the results you're looking for.</p>
            <p className="mobile-description">Not sure where to start? 
            {' '}<span style = {{ color: 'black', fontWeight: 700 }}>Explore our presets to find plans</span>{' '}
            based on the results you're looking for.</p>
          </div>
        </div>
        <img className="section3-image" src={plan1} alt="SCREENSHOT" />
      </div>

      <div className="section4">
        <img className="section4-image" src={plan2} alt="SCREENSHOT" />
        <div>
          <div className="details-container">
          <h2 className="heading">Track Progress</h2>
            <p className="description">
            We track your
            {' '}<span style = {{ color: 'black', fontWeight: 700 }}>streaks, follow-through, and more</span>{' '}
            so you know exactly how you're doing.</p>
            <p className="mobile-description">
            We track your
            {' '}<span style = {{ color: 'black', fontWeight: 700 }}>streaks, follow-through, and more</span>{' '}
            so you know exactly how you're doing.</p>
            {/* DATA */}
            <img src={img4} alt="data" className="icon" />
          </div>
          <div className="details-container reverse">
          <h2 className="heading">Kick Back</h2>
            <p className="description">
            Stay intentional about your exercise and your sanity 
            {' '}<span style = {{ color: 'black', fontWeight: 700 }}>by scheduling unplanned time :)</span></p>
            <p className="mobile-description">
            Stay intentional about your exercise and your sanity 
            {' '}<span style = {{ color: 'black', fontWeight: 700 }}>by scheduling unplanned time :)</span></p>
            {/* PALM TREE */}
            <img src={img3} alt="palmTree" className="icon" />
          </div>
        </div>
      </div>

      <Footer />
      </div>
    </div>
  );
};

export default Main;
