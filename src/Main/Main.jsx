import React, { useEffect } from "react";

import qrCode from "../qr-code.svg";
import signal from "../signal.svg";
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
          It’s time to go <br /> <strong className="title"> steddy </strong> with your <br />
          exercise routine.
        </p>
        <img className="web-image" src={qrCode} alt="QR Code" />
        <img className="mobile-image" src={plan1} alt="plan1" />
      </div>
      <div className="app-links">
          <img src={appStore} alt="App Store" />
          <img src={playStore} alt="Play Store" />
      </div>

      <div className="section2">
        <img src={signal} alt="Signal" />
        <p>
          Planning makes it possible to get the hard stuff done. But planning
          itself? That part should be easy.
          <br /> <strong className="title"> Steddy </strong>is the fastest and simplest way to
          build a weekly fitness regimen.
          <br />
          <strong>
            Scan the QR code to see how far a little commitment can take you.
          </strong>
        </p>
      </div>

      <div className="section3">
        <div>
          <div className="details-container">
            <img className="icon" src={img1} alt="Signal" />
            <h2 className="heading">Plan Flexibly</h2>
            <p className="description">
              Most health and fitness apps are pretty niche: map your runs in
              one and follow that lifting routine that Arnold himself programmed
              just for you in another.
              <br />
              <br />
              Steddy lets users plan and record any type of workout, whether it
              be yoga class, leg day at the gym, or your company softball game.
            </p>
            <p className="mobile-description">
              Steddy lets users plan and record any type of workout, whether it
              be yoga class, leg day at the gym, or your company softball game.
            </p>
          </div>
          <div className="details-container reverse">
            <img className="icon" src={img2} alt="Signal" />
            <h2 className="heading">Find Routines</h2>
            <p className="description">
              Not sure where to start? We’ve got you covered.
              <br />
              <br />
              Choose from 9 preset plans tailored to 3 themes (cardio health;
              energy and focus; physique) until you’ve developed the intuitions
              you need to go rogue and write your own programs.
            </p>
            <p className="mobile-description">
              Choose from 9 preset plans tailored to 3 themes (cardio health;
              energy and focus; physique) until you’ve developed the intuitions
              you need to go rogue.
            </p>
          </div>
        </div>
        <img className="section3-image" src={plan1} alt="Signal" />
      </div>

      <div className="section4">
        <img className="section4-image" src={plan2} alt="Signal" />
        <div>
          <div className="details-container">
            <h2 className="heading">Kick Back</h2>
            <p className="description">
              Who says your fitness planner can’t be your vacation planner too?
              Well, we’re not booking flights quite yet, but we do understand
              that a break week is in order every so often.
              <br />
              <br />
              Steddy helps users stay intentional about when they take breaks
              from their exercise routine, and helps user ease back into the
              swing of things when the time finally comes.
            </p>
            <p className="mobile-description">
              Steddy helps users stay intentional about when they take breaks
              from their exercise routine, and helps user ease back into the
              swing of things when the time finally comes.
            </p>
            <img width="95px" src={img3} alt="Signal" className="icon" />
          </div>
          <div className="details-container reverse">
            <h2 className="heading">Track Progress</h2>
            <p className="description">
              We’re of the mindset that, for most people, it’s not too important
              to overanalyze as long as you’re getting active every day, but
              we’ll throw you a bone (and a few stats):
              <br />
              <br />
              Steddy provides an easy way to track your own effort, activity
              streaks, and even your own discipline over time.
            </p>
            <p className="mobile-description">
              Steddy provides an easy way to track your own effort, activity
              streaks, and even your own discipline over time.
            </p>
            <img src={img4} alt="Signal" width className="icon" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Main;
