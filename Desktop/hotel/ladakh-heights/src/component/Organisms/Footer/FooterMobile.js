import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import Copyright from "../../../assets/common/copyright.png";
import Email from "../../../assets/common/email.png";
import Facebook from "../../../assets/common/facebook.png";
import Instagram from "../../../assets/common/instagram.png";
import Linkedin from "../../../assets/common/linkedin.png";
import Logo from "../../../assets/common/logoPrimaryFooter.png";
import Phone from "../../../assets/common/phone.png";
import Twitter from "../../../assets/common/twitter.png";
import "./FooterMobile.css";
import emailWhite from "../../../assets/emailWhite.png";

function FooterMobile() {
  return (
    <div className="footerMobile">
      <div className="upperChild2FooterMobile">
        <p>Company</p>
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
          <a href="/contact-us">
            <li>Contact Us</li>
          </a>
        </ol>
      </div>
      <div className="upperChild2FooterMobile">
        <p>Services</p>
        <ol>
          <a
            href={
              localStorage.getItem("token") !== null
                ? "/health-risk-assessment-locked"
                : "/health-risk-assessment"
            }
          >
            <li>Health Risk Assessment</li>
          </a>
          <a href="/health-checkup">
            <li> Health Checkup & Diagnostics</li>
          </a>
          <a href="/rental-equipment">
            <li>Rental Equipment</li>
          </a>
          <a href="/consultation/cashless-opd">
            <li> OPD Consultation Program</li>
          </a>
          <a href="/talk-to-doctor">
            <li>Talk to Doctor</li>
          </a>
          <a href="/subscription">
            <li>Our Plans</li>
          </a>
        </ol>
      </div>
      <div className="upperChild4Mobile">
        <div className="upperChild4Heading">
          <p>Newsletter</p>
        </div>

        <div className="upperChild4DescriptionMobile">
          <span>
            Signup our newsletter to get update on information, news, insights
            and promotions.
          </span>
        </div>
        <div className="footerContact">
          <Formik
            initialValues={{
              Email: "",
            }}
            enableReinitialize={true}
          // validationSchema={loginSchema}
          >
            {
              <Form>
                <div className="emailInputMobile">
                  <Field
                    placeholder=" Email"
                    name="Email"
                    type="text"
                    className="newsLetterInput"
                  ></Field>
                  <ErrorMessage name="Name" component="div" />
                </div>
                <button className="signupFooterMobile" type="submit">
                  <img alt="Email" src={emailWhite} />
                  Sign-up
                </button>
              </Form>
            }
          </Formik>
        </div>
      </div>
      <div className="upperChild1Mobile">
        <div className="logoImageMobile">
          <a href="/">
            {" "}
            <img alt="Logo" src={Logo} />
          </a>
        </div>
        <div className="addressFooterMobile">
          Eines Healthcare Private Limited

        </div>
        <div className="addressFooterMobile">
          <p>
            1025-1030, 80ft Main Road, <br />
            Koramangala 1st Block, <br />
            Bengaluru - 560034
          </p>
          <p>
            B-1/632 Janak puri, 3rd Floor,
            <br /> Opposite Metro Pillar No.566 Janakpuri,
            <br />
            Above Galway Store, New Delhi-110058
          </p>
        </div>
        <div className="emailContact">
          <img alt="Email" src={Email} />
          <a href="mailto: support@yuvahealth.in">
            <p style={{ color: " #1D2334" }}>support@yuvahealth.in</p>{" "}
          </a>
        </div>
        <div className="phoneContact">
          <img alt="Phone" src={Phone} />
          <p>+91 8929945228 </p>
        </div>

        <div className="socialmediaContactMobile">
          <a href="https://www.instagram.com/yuva_health/" target="_blank">
            <img alt="Instagram" src={Instagram} />
          </a>
          <a href="https://www.facebook.com/yuvahealthwellness" target="_blank">
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
      <div className="downFooterMobile">
        <div className="copyrightSign">
          <img alt="Copyright" src={Copyright} />
        </div>
        <div className="copyrightText">
          <p>Yuva Health - 2023. All right reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default FooterMobile;
