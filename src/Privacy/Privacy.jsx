import React, { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import "./Privacy.scss";

const Privacy = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }, []);
  
  return (
    <>
      <Header title="Steddy’s Privacy Policy" />
      <div className="privacy-root">
        <div className="privacy-content">
          <h2>Privacy Policy</h2>
          <p>
            Swetty Apps, LLC built the Steddy app as a Free app. This SERVICE is
            provided by Swetty Apps, LLC at no cost and is intended for use as
            is.
            <br />
            <br />
            This page is used to inform visitors regarding our policies with the
            collection, use, and disclosure of Personal Information for those
            who decide to use this Service.
            <br />
            <br />
            If you choose to use this Service, then you agree to the collection
            and use of information in relation to this policy. The Personal
            Information that I collect is used for providing and improving the
            Service. We will not use or share your information with anyone
            except as described in this Privacy Policy.
            <br />
            <br />
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, which is accessible at Steddy unless
            otherwise defined in this Privacy Policy.
          </p>
        </div>
        <div className="privacy-content">
          <h2>Information Collection and Use</h2>
          <p>
            For a better experience, while using our Service, I may require you
            to provide us with certain personally identifiable information,
            including but not limited to first name, email address. The
            information that I request will be retained on your device and is
            not collected by me in any way.
          </p>
        </div>
        <div className="privacy-content">
          <h2>Log Data</h2>
          <p>
            Whenever you use this Service, in a case of an error in the app I
            collect data and information (through third party products) on your
            phone called Log Data. This Log Data may include information such as
            your device Internet Protocol (“IP”) address, device name, operating
            system version, the configuration of the app when utilizing my
            Service, the time and date of your use of the Service, and other
            statistics.
          </p>
        </div>
        <div className="privacy-content">
          <h2>Cookies</h2>
          <p>
            Cookies are files with a small amount of data that are commonly used
            as anonymous unique identifiers. These are sent to your browser from
            the websites that you visit and are stored on your device’s internal
            memory.
            <br /> <br />
            This Service does not use these “cookies” explicitly. However, the
            app may use third party code and libraries that use “cookies” to
            collect information and improve their services. You have the option
            to either accept or refuse these cookies and know when a cookie is
            being sent to your device. If you choose to refuse our cookies, you
            may not be able to use some portions of this Service.
          </p>
        </div>
        <div className="privacy-content">
          <h2>Service Providers</h2>
          <p>
            I may employ third-party companies and individuals due to the
            following reasons:
            <br />
            <br />
            - To facilitate our Service;
            <br />
            - To provide the Service on our behalf;
            <br />
            - To perform Service-related services; or
            <br />
            - To assist us in analyzing how our Service is used.
            <br />
            <br />
            <br />I want to inform users of this Service that these third
            parties have access to your Personal Information. The reason is to
            perform the tasks assigned to them on our behalf. However, they are
            obligated not to disclose or use the information for any other
            purpose.
          </p>
        </div>
        <div className="privacy-content">
          <h2>Security</h2>
          <p>
            I value your trust in providing us your Personal Information, thus
            we are striving to use commercially acceptable means of protecting
            it. But remember that no method of transmission over the internet,
            or method of electronic storage is 100% secure and reliable, and I
            cannot guarantee its absolute security.
          </p>
        </div>
        <div className="privacy-content">
          <h2>Links to Other Sites</h2>
          <p>
            This Service may contain links to other sites. If you click on a
            third-party link, you will be directed to that site. Note that these
            external sites are not operated by me. Therefore, I strongly advise
            you to review the Privacy Policy of these websites. I have no
            control over and assume no responsibility for the content, privacy
            policies, or practices of any third-party sites or services.
          </p>
        </div>
        <div className="privacy-content">
          <h2>Children’s Privacy</h2>
          <p>
            These Services do not address anyone under the age of 13. I do not
            knowingly collect personally identifiable information from children
            under 13 years of age. In the case I discover that a child under 13
            has provided me with personal information, I immediately delete this
            from our servers. If you are a parent or guardian and you are aware
            that your child has provided us with personal information, please
            contact me so that I will be able to do necessary actions.
          </p>
        </div>
        <div className="privacy-content">
          <h2>Changes to This Privacy Policy</h2>
          <p>
            I may update our Privacy Policy from time to time. Thus, you are
            advised to review this page periodically for any changes. I will
            notify you of any changes by posting the new Privacy Policy on this
            page.
            <br />
            <br />
            This policy is effective as of 2021-10-10
          </p>
        </div>
        <div className="privacy-content">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or suggestions about my Privacy Policy, do
            not hesitate to contact me at raffi@steddy.health.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
