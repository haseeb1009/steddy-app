import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import "./Contact.scss";

const Contact = () => {
  const [state, handleSubmit] = useForm("xbjqbeov");
  useEffect(() => {
    if (state.succeeded) {
      alert("Submitted successfully");
    }
  }, [state.succeeded]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }, []);

  return (
    <>
      <Header title="Contact Us" />
      <div className="contact-root">
        <h2 className="title">We appreciate your feedback!</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="label">Email Address</div>
            <input type="email" id="email" name="email" required />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <div className="label">Your Message</div>
            <textarea id="message" name="message" required />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div>
            <button type="submit" disabled={state.submitting}>
              Send Message
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
