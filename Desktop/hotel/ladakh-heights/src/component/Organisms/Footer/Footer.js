import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import Copyright from "../../../assets/common/copyright.png";
import Email from "../../../assets/common/email.png";
import Facebook from "../../../assets/common/facebook.png";
import Instagram from "../../../assets/common/instagram.png";
import Linkedin from "../../../assets/common/linkedin.png";
import Logo from "../../../assets/TL.png";
import Phone from "../../../assets/common/phone.png";
import Twitter from "../../../assets/common/twitter.png";
import emailWhite from "../../../assets/emailWhite.png";
import "./Footer.css";
import FooterMobile from "./FooterMobile";

function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.outerWidth <= 600) {
      setIsMobile(true);
    }
  }, [window.outerWidth]);

  const handleNewsletter = () => { };

  return (
    <div>
      {isMobile ? (
        <FooterMobile />
      ) : (
        <div className="footer">
          <div className="upperFooter">
            <div className="upperChild1">
              <div className="logoImage">
                <a href="/">
                  <img alt="Logo" src={Logo} />
                </a>
              </div>
              <div className="addressFooterCompanyName">
                Ladakh Heights
              </div>
              <div className="addressFooter">
                <p style={{ lineHeight: "1.4vw" }}>
                  Gonpa gangles, Lamdon Road  <br />
                  Ladakh <br />
                  Leh - 194101
                </p>
                {/* <p style={{ lineHeight: "1.4vw" }}>
                  B-1/632 Janak puri, 3rd Floor,
                  <br /> Opposite Metro Pillar No.566 Janakpuri,
                  <br />
                  Above Galway Store, New Delhi-110058
                </p> */}
              </div>
              <div className="emailContact">
                <img alt="Email" src={Email} />
                <a
                  href="mailto: support@ladakhHeights.in"
                  style={{ color: "#44576A" }}
                >
                  <p>support@ladakhHeights.in</p>{" "}
                </a>
              </div>
              <div className="phoneContact">
                <img alt="Phone" src={Phone} />
                <p>+91 9622972222 </p>
              </div>

              <div className="socialmediaContact">
                <a
                  href="https://www.instagram.com/yuva_health/"
                  target="_blank"
                >
                  <img alt="Instagram" src={Instagram} />
                </a>
                <a
                  href="https://www.facebook.com/yuvahealthwellness"
                  target="_blank"
                >
                  <img alt="Facebook" src={Facebook} />
                </a>
                <a href="https://twitter.com/" target={"_blank"}>
                  <img alt="Twitter" src={Twitter} />
                </a>
                <a
                  href="https://www.linkedin.com/company/yuvahealth/"
                  target={"_blank"}
                >
                  <img alt="Linkedin" src={Linkedin} />
                </a>
              </div>
            </div>
            <div className="upperChild2Footer">
              <p style={{marginLeft:"2vw"}}>Ladakh Heights</p>
              <ol>
                <a href="/about-us">
                  <li>About Us</li>
                </a>
                <a href="/terms-and-conditions">
                  <li>Terms and Conditions</li>
                </a>
                <a href="/privacy-policy">
                  <li>Privacy Policy</li>
                </a>
                <a href="/cancellation-and-refund-policy">
                  <li>Cancellation And Refund</li>
                </a>
                <a href="/under-construction">
                  {/* <li>FAQ's</li> */}
                </a>
                <a href="/contact-us">
                  <li>Contact Us</li>
                </a>
              </ol>
            </div>
            <div className="upperChild3Footer">
              <p style={{marginLeft:"2vw"}}>Services</p>
              <ol>
                <a href={localStorage.getItem("token") !== null ? "/health-risk-assessment-locked" : "/health-risk-assessment"}>
                  <li>Gallery</li>
                </a>
                <a href="/health-checkup">
                  <li> Rooms</li>
                </a>
                <a href="/rental-equipment">
                  <li>About ladakh</li>
                </a>
                {/* <a href="/consultation/cashless-opd">
                  <li> </li>
                </a>
                <a href="/talk-to-doctor">
                  <li>Talk to Doctor</li>
                </a>
                <a href="/subscription">
                  <li>Our Plans</li>
                </a> */}
              </ol>
            </div>
            <div className="upperChild4">
                <p>Newsletter</p>

              <div className="upperChild4Description">
                <span>
                  Signup our newsletter to get update on information, news,
                  insights and promotions.
                </span>
              </div>
              <Formik
                initialValues={{
                  Email: "",
                }}
                enableReinitialize={true}
                // validationSchema={loginSchema}
                onSubmit={handleNewsletter}
              >
                {
                  <Form>
                    <div className="emailInput">
                      <Field
                        placeholder=" Email"
                        name="Email"
                        type="text"
                        className="newsLetterInput"
                      ></Field>
                      <ErrorMessage name="Name" component="div" />
                    </div>
                    <button
                      className="signup"
                      type="submit"
                      onClick={handleNewsletter}
                    >
                      <img alt="Email" src={emailWhite} />
                      Sign-up
                    </button>
                  </Form>
                }
              </Formik>
              <span id="siteseal">
                <script async type="text/javascript" src="https://seal.starfieldtech.com/getSeal?sealID=ESPpgYVQ4Aie7coD4f2WEvPiNwWZhmTygcn8wBi6WR2HxkvADAL0C14ofBxp">
                </script>
              </span>
            </div>
          </div>
          <div className="downFooter">
            <div className="copyrightSign">
              <img alt="Copyright" src={Copyright} />
            </div>
            <div className="copyrightText">
              <p>Ladakh Heights - 2024. All right reserved.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
