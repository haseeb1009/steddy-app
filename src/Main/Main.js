import React from "react";
import qrCode from "../qr-code.svg";
import signal from "../signal.svg";
import plan1 from "../plan1.svg";
import plan2 from "../plan2.svg";
import img1 from "../img1.svg";
import img2 from "../img2.svg";
import img3 from "../img3.svg";
import img4 from "../img4.svg";

import Footer from "../components/Footer/Footer";
import "./Main.scss";

const Main = () => {
  return (
    <div className="app">
      <div className="section1">
        <p>
          It’s time to go <strong className="title"> steddy </strong> with your
          exercise routine.
        </p>
        <img src={qrCode} alt="QR Code" />
      </div>

      <div className="section2">
        <img src={signal} alt="Signal" />
        <p>
          Planning makes it possible to get the hard stuff done. But planning
          itself? That part should be easy. <strong> Steddy </strong>is the
          fastest and simplest way to build a weekly fitness regimen.
          <br />
          <strong>
            Scan the QR code to see how far a little commitment can take you.
          </strong>
        </p>
      </div>

      <div className="section3">
        <div>
          <div className="details-container">
            <img src={img3} alt="Signal" />
            <div className="details">
              <h2>Plan Flexibility</h2>
              <p>
                Who says your fitness planner can’t be your vacation planner
                too? Well, we’re not booking flights quite yet, but we do
                understand that a break week is in order every so often.
                <br />
                <br />
                Steddy helps users stay intentional about when they take breaks
                from their exercise routine, and helps user ease back into the
                swing of things when the time finally comes.
              </p>
            </div>
          </div>
          <div className="details-container">
            <img src={img2} alt="Signal" />
            <div className="details">
              <h2>Find Routines</h2>
              <p>
                Who says your fitness planner can’t be your vacation planner
                too? Well, we’re not booking flights quite yet, but we do
                understand that a break week is in order every so often.
                <br />
                <br />
                Steddy helps users stay intentional about when they take breaks
                from their exercise routine, and helps user ease back into the
                swing of things when the time finally comes.
              </p>
            </div>
          </div>
        </div>
        <img src={plan1} alt="Signal" />
      </div>

      <div className="section4">
        <img src={plan2} alt="Signal" />
        <div>
          <div className="details-container">
            <div className="details">
              <h2>Kick Back</h2>
              <p>
                Who says your fitness planner can’t be your vacation planner
                too? Well, we’re not booking flights quite yet, but we do
                understand that a break week is in order every so often.
                <br />
                <br />
                Steddy helps users stay intentional about when they take breaks
                from their exercise routine, and helps user ease back into the
                swing of things when the time finally comes.
              </p>
            </div>
            <img width="95px" src={img4} alt="Signal" />
          </div>
          <div className="details-container">
            <div className="details">
              <h2>Track Progress</h2>
              <p>
                We’re of the mindset that, for most people, it’s not too
                important to overanalyze as long as you’re getting active every
                day, but we’ll throw you a bone (and a few stats):
                <br />
                <br />
                Steddy provides an easy way to track your own effort, activity
                streaks, and even your own discipline over time.
              </p>
            </div>
            <img src={img1} alt="Signal" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Main;
