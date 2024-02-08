import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import * as Yup from "yup";
import WriteToUsImage from "../../../assets/ContactUs/WriteToUsImage.png";
import JoinNetworkButton1 from "../../../assets/ContactUs/contactPagePic1.png";
import JoinNetworkButton3 from "../../../assets/ContactUs/contactPagePic2.png";
import ContactUsPart3Image1 from "../../../assets/ContactUs/contactt1.png";
import ContactUsPart3Image2 from "../../../assets/ContactUs/contactt2.png";
import ContactUsPart3Image3 from "../../../assets/ContactUs/contactt3.png";
import JoinNetworkButton2 from "../../../assets/ContactUs/location.png";
import { QueryTypeRequest } from "../../../redux/Action/ContactUsPage/QueryTypeAction";
import { WriteToUseRequest } from "../../../redux/Action/ContactUsPage/WriteToUsAction";
import Footer from "../../Organisms/Footer/Footer";
import FooterMobile from "../../Organisms/Footer/FooterMobile";
import FrequentlyAskedQuestion from "../FrequentlyAskedQuestions/FrequentlyAskedQuestion";
import "./ContactUsPage.css";
import Title from "../../Atoms/Title/Title";
function ContactUsPage(props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.outerWidth <= 600) {
      setIsMobile(true);
    }
  }, [window.outerWidth]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(QueryTypeRequest());
  }, []);

  const QueryType = useSelector((state) => state.contactUs.contactUsQueryType);

  const loginSchema = Yup.object().shape({
    contactNumber: Yup.string()
      .min(10, "Must be exactly 10 digits")
      .max(10, "Must be exactly 10 digits")
      .required("Required Field"),
    queryType: Yup.string().required("Required Field"),
    email: Yup.string()
      .matches(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
        "Enter a Valid E-mail Address"
      )
      .required("Email is required"),
    name: Yup.string().required("Required Field"),
    message: Yup.string().required("Required Field"),
  });

  const handleSubmit = (values) => {
    let dataArray = Object.keys(values).map(function (k) {
      return values[k];
    });

    let submitdata = {
      contactNumber: dataArray[2],
      email: dataArray[1],
      message: dataArray[3],
      name: dataArray[0],
      queryType: dataArray[4],
    };
    dispatch(WriteToUseRequest(submitdata));
  };

  const WriteToUs = useSelector((state) => state.contactUs.writeToUs);
  if (
    WriteToUs?.data?.data?.data.message ===
    "Customer Feedback Sent Successfully"
  ) {
    Swal.fire({
      title: "Customer Feedback Sent Successfully",
      icon: "success",
    }).then(() => {
      window.location.reload();
    });
  }
  const data = [
    {
      question: "What kind of services does Yuva Health offer?",
      answer:
        "Yuva Health offers a range of wellness and preventive health care services, including cashless OPD, health check-ups, pre-policy and pre-employment health check-ups, wellness programs such as weight loss, fitness, and mental wellness, first and second medical opinions, gym and spa memberships, dedicated wellness portal, health risk assessment, virtual corporate clinics, ambulance helpline, equipment rental, wellness and pharmacy store, and medical tourism. ",
    },
    {
      question: "What is Cashless OPD?",
      answer:
        "Cashless OPD is a service offered by Yuva Health that allows customers to make cashless payments for outpatient appointments such as lab tests, medicines, and doctor consultations. It is available as part of the Chronic Management Program and is available at all diagnostic centers, pharmacies, and outpatient clinics within Yuva Health's healthcare network.",
    },
    {
      question: "What kind of health check-ups does Yuva Health offer?",
      answer:
        "Yuva Health offers various health check-up packages, including preventive health care packages, pre-policy health check-up, and pre-employment health check-up. These packages are available at home or hospital from various renowned labs at discounted prices.",
    },
    {
      question: "What is Yuva Health Assessment?",
      answer:
        "Yuva Health Assessment is a risk assessment tool that helps customers understand their risk of disease based on their family history and various lifestyle factors. It compares the customer's risk to the overall average in terms of age and ethnicity and identifies any risk factors that they may have.",
    },
    {
      question: "What kind of wellness programs does Yuva Health offer?",
      answer:
        "Yuva Health offers various wellness programs, including weight loss programs, quit smoking programs, fitness programs, mental wellness programs, women wellness programs, and hypertension management programs. ",
    },
    {
      question: "What is the dedicated wellness portal?",
      answer:
        "The dedicated wellness portal is a platform offered by Yuva Health that allows corporate clients to choose the services they need without any manual intervention. It is a tailor-made service that provides various subscription plans directly to retail or end customers based on their needs. ",
    },
    {
      question: "What is the virtual corporate clinic?",
      answer:
        "The virtual corporate clinic is a service offered by Yuva Health that provides virtual consultations with doctors for corporate clients. It is designed to help employees access healthcare services from the comfort of their workplace or home. ",
    },
    {
      question: "What is the ambulance helpline?",
      answer:
        "The ambulance helpline is a service offered by Yuva Health that provides emergency medical assistance to customers in case of an emergency. The service is available 24/7 and customers can call the helpline number for assistance. ",
    },
    {
      question: "What is equipment rental?",
      answer:
        "Equipment rental is a service offered by Yuva Health that provides medical equipment such as BIPAP, CPAP, oxygen concentrator, and others on rent. The service is designed to help customers access medical equipment at an affordable price. ",
    },
  ];
  return (
    <>
      <Title title="Yuva | Contact Us"></Title>

      {isMobile ? (
        <div>
          {/* <BreadCrums /> */}

          {/* <HelpCenter /> */}
          <div className="ContactUsMainy">
            <div className="ContactUsPart1Mobile">
              <div className="ContactUsHeaderMobile">We’re Here to Help</div>
              {/* {props} */}
              <div className="ContactUsSubHeader">Reach us at</div>
              <div className="ContactUsInforCardsWrapperMobile">
                <div className="ContactUsInforCardMobile">
                  <div className="ContactUsInforCardImage">
                    <img
                      src={JoinNetworkButton1}
                      alt="error"
                      className="buttonImage"
                    />
                  </div>
                  <div className="ContactUsInforCardInformationMobile">
                    +91-8929945228
                    {/* BENGALURU : +91-9108678193 <br /> DELHI : +91-7303557243 */}
                  </div>
                </div>

                <div className="ContactUsInforCardMobile">
                  <div className="ContactUsInforCardImage">
                    <img
                      src={JoinNetworkButton2}
                      alt="error"
                      className="buttonImage"
                    />
                  </div>
                  <div className="ContactUsInforCardInformationMobile">
                    1025-1030, 80ft Main Road, <br />
                    Koramangala 1st Block, <br />
                    Bengaluru - 560034
                    <br /> <br />
                    B-1/632 Janak puri, 3rd Floor, <br /> Opposite Metro Pillar
                    No.566 Janakpuri,
                    <br />
                    Above Galway Store,
                    <br /> New Delhi-110058
                  </div>
                </div>

                <div className="ContactUsInforCardMobile">
                  <div className="ContactUsInforCardImage">
                    <img
                      src={JoinNetworkButton3}
                      alt="error"
                      className="buttonImage"
                    />
                  </div>
                  <div className="ContactUsInforCardInformationMobile">
                    support@yuvahealth.in <br /> hello@yuvahealth.in
                  </div>
                </div>
              </div>
            </div>

            <div className="ContactUsPart2Mobile">
              <div className="ContactUsHeader">Write to Us</div>
              <div className="ContactUsSubHeader2">
                Do you have questions, doubts or just want to talk, write to us
                and one of our executives will get in touch with you shortly
              </div>

              <div className="WriteToUsWrapperMobile">
                <div className="WriteToUsFormMobile">
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      contactNumber: "",
                      message: "",
                      queryType: "",
                    }}
                    enableReinitialize={true}
                    validationSchema={loginSchema}
                    onSubmit={handleSubmit}
                  >
                    {
                      <Form>
                        <div className="WriteToUsFormRowMobile">
                          <label>
                            <Field
                              placeholder=" Name"
                              name="name"
                              type="text"
                              className="WriteToUsFormInputFields1Mobile"
                            ></Field>
                            <ErrorMessage
                              className="contactusvalidation"
                              name="name"
                              component="div"
                            />
                          </label>
                        </div>
                        <div className="WriteToUsFormRowMobile">
                          <label>
                            <Field
                              placeholder="Email "
                              name="email"
                              type="email"
                              className="WriteToUsFormInputFields1Mobile"
                            ></Field>
                            <ErrorMessage
                              className="contactusvalidation"
                              name="email"
                              component="div"
                            />
                          </label>
                        </div>
                        <div className="WriteToUsFormRowMobile">
                          <label>
                            <Field
                              placeholder="Contact Number"
                              name="contactNumber"
                              type="number"
                              className="WriteToUsFormInputFields1Mobile"
                            ></Field>
                            <ErrorMessage
                              className="contactusvalidation"
                              name="contactNumber"
                              component="div"
                            />
                          </label>
                        </div>
                        <div className="WriteToUsFormRowMobile">
                          <label>
                            <Field
                              as="select"
                              name="queryType"
                              className="WriteToUsFormInputFields1Mobile"
                            >
                              <option value="" disabled selected>
                                Query Type
                              </option>
                              {QueryType?.data?.data?.data?.data.map(
                                (item, index) => (
                                  <option key={index} value={item}>
                                    {item}
                                  </option>
                                )
                              )}
                            </Field>
                            <ErrorMessage
                              className="contactusvalidation"
                              name="queryType"
                              component="div"
                            />
                          </label>
                        </div>
                        <div className="WriteToUsFormRowMobile">
                          <label>
                            <Field
                              type="textarea"
                              name="message"
                              component="textarea"
                              placeholder="Message"
                              rows="5"
                              cols="23"
                              wrap="soft"
                              className="WriteToUsFormInputFields1Mobile1"
                            />

                            <ErrorMessage
                              name="message"
                              className="contactusvalidation"
                              component="div"
                            />
                          </label>
                        </div>
                        <div className="contactUsButtonMobile">
                          <button
                            className="WriteToUsFormSubmitButtonMobile"
                            type="submit"
                          >
                            Send Message
                          </button>
                        </div>
                      </Form>
                    }
                  </Formik>
                </div>
              </div>
            </div>

            <div className="ContactUsPart3Mobile">
              <div className="ContactUsHeader3Mobile">YOU CAN ALSO</div>

              <div className="ContactUsPart3InfoCardsWrapperMobile">
                <div className="ContactUsPart3InfoCardMobile">
                  <div className="ContactUsPart3InfoCardImage">
                    <img
                      src={ContactUsPart3Image1}
                      alt="error"
                      style={{ marginRight: "16vw" }}
                      className="buttonImage"
                    />
                  </div>
                  <div className="contactText">
                    Reach out to our 24 x 7 Help Center
                  </div>
                </div>

                <div className="ContactUsPart3InfoCardMobile ContactUsPart3InfoCard2">
                  <div className="ContactUsPart3InfoCardImage">
                    <img
                      src={ContactUsPart3Image2}
                      alt="error"
                      style={{ marginRight: "16vw" }}
                      className="buttonImage"
                    />
                  </div>
                  <div className="contactText">Check FAQs</div>
                </div>

                <div className="ContactUsPart3InfoCardMobile ContactUsPart3InfoCard3">
                  <div className="ContactUsPart3InfoCardImage">
                    <img
                      src={ContactUsPart3Image3}
                      alt="error"
                      style={{ marginRight: "16vw" }}
                      className="buttonImage"
                    />
                  </div>
                  <div className="contactText">Chat with us</div>
                </div>
              </div>
            </div>
            <FrequentlyAskedQuestion data={data} />
          </div>
          <FooterMobile />
        </div>
      ) : (
        <div>
          {/* <BreadCrums /> */}

          {/* <HelpCenter /> */}
          <div className="ContactUsMain">
            <div className="ContactUsPart1">
              <div className="ContactUsHeader">We’re Here to Help</div>
              {/* {props} */}
              <div className="ContactUsSubHeader">Reach us at</div>
              <div className="ContactUsInforCardsWrapper">
                <div className="ContactUsInforCard">
                  <div className="ContactUsInforCardImage">
                    <img
                      src={JoinNetworkButton1}
                      alt="error"
                      className="buttonImage"
                    />
                  </div>
                  <div className="ContactUsInforCardInformation">
                    +91-8929945228
                    {/* BENGALURU : +91-9108678193 <br /> DELHI : +91-7303557243 */}
                  </div>
                </div>

                <div className="ContactUsInforCard">
                  <div className="ContactUsInforCardImage">
                    <img
                      src={JoinNetworkButton2}
                      alt="error"
                      className="buttonImage"
                    />
                  </div>
                  <div className="ContactUsInforCardInformation">
                    1025-1030, 80ft Main Road, <br />
                    Koramangala 1st Block, <br />
                    Bengaluru - 560034
                    <br /> <br />
                    B-1/632 Janak puri, 3rd Floor, <br /> Opposite Metro Pillar
                    No.566 Janakpuri,Above Galway Store,
                    <br /> New Delhi-110058
                  </div>
                </div>

                <div className="ContactUsInforCard">
                  <div className="ContactUsInforCardImage">
                    <img
                      src={JoinNetworkButton3}
                      alt="error"
                      className="buttonImage"
                    />
                  </div>
                  <div className="ContactUsInforCardInformation">
                    support@yuvahealth.in <br /> hello@yuvahealth.in
                  </div>
                </div>
              </div>
            </div>

            <div className="ContactUsPart2">
              <div className="ContactUsHeader">Write to Us</div>
              <div className="ContactUsSubHeader2">
                Do you have questions, doubts or just want to talk, write to us
                and one of our executives will get in touch with you shortly
              </div>

              <div className="WriteToUsWrapper">
                <div className="WriteToUsImageWrapper">
                  <img
                    src={WriteToUsImage}
                    alt="error"
                    className="WriteToUsImage"
                  />
                </div>

                <div className="WriteToUsForm">
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      contactNumber: "",
                      message: "",
                      queryType: "",
                    }}
                    enableReinitialize={true}
                    validationSchema={loginSchema}
                    onSubmit={handleSubmit}
                  >
                    {
                      <Form>
                        <div className="WriteToUsFormRow">
                          <label>
                            <Field
                              placeholder=" Name"
                              name="name"
                              type="text"
                              className="WriteToUsFormInputFields1"
                            ></Field>
                            <ErrorMessage
                              className="contactusvalidation"
                              name="name"
                              component="div"
                            />
                          </label>
                          <label>
                            <Field
                              placeholder="Email "
                              name="email"
                              type="email"
                              className="WriteToUsFormInputFields1"
                            ></Field>
                            <ErrorMessage
                              className="contactusvalidation"
                              name="email"
                              component="div"
                            />
                          </label>
                        </div>
                        <div className="WriteToUsFormRow">
                          <label>
                            <Field
                              placeholder="Contact Number"
                              name="contactNumber"
                              type="number"
                              className="WriteToUsFormInputFields1"
                            ></Field>
                            <ErrorMessage
                              className="contactusvalidation"
                              name="contactNumber"
                              component="div"
                            />
                          </label>

                          <label>
                            <Field
                              as="select"
                              name="queryType"
                              className="WriteToUsFormInputFields1"
                            >
                              <option value="" disabled selected>
                                Query Type
                              </option>
                              {QueryType?.data?.data?.data?.data.map(
                                (item, index) => (
                                  <option key={index} value={item}>
                                    {item}
                                  </option>
                                )
                              )}
                            </Field>
                            <ErrorMessage
                              className="contactusvalidation"
                              name="queryType"
                              component="div"
                            />
                          </label>
                        </div>
                        <div className="WriteToUsFormRow">
                          <label>
                            <Field
                              type="textarea"
                              name="message"
                              component="textarea"
                              placeholder="Message"
                              rows="5"
                              cols="23"
                              wrap="soft"
                              style={{ color: "#44576A" }}
                              className="WriteToUsFormInputMessage"
                            />

                            <ErrorMessage
                              className="contactusvalidation"
                              name="message"
                              component="div"
                            />
                          </label>
                        </div>
                        <div className="contactUsButton">
                          <button
                            className="WriteToUsFormSubmitButton"
                            type="submit"
                          >
                            Send Message
                          </button>
                        </div>
                      </Form>
                    }
                  </Formik>
                </div>
              </div>
            </div>

            <div className="ContactUsPart3">
              <div className="ContactUsHeader3">YOU CAN ALSO</div>

              <div className="ContactUsPart3InfoCardsWrapper">
                <div className="ContactUsPart3InfoCard">
                  <div className="ContactUsPart3InfoCardImage">
                    <img
                      src={ContactUsPart3Image1}
                      alt="error"
                      className="buttonImage"
                    />
                  </div>
                  <div className="contactText1">
                    Reach out to our 24 x 7 Help Center
                  </div>
                </div>
                {/* <div class="vl"></div> */}

                <div className="ContactUsPart3InfoCard ContactUsPart3InfoCard2">
                  <div className="ContactUsPart3InfoCardImage">
                    <img
                      src={ContactUsPart3Image2}
                      alt="error"
                      className="buttonImage"
                    />
                  </div>
                  <div className="contactText1">Check FAQs</div>
                </div>
                {/* <div class="vl"></div> */}

                <div className="ContactUsPart3InfoCard ContactUsPart3InfoCard3">
                  <div className="ContactUsPart3InfoCardImage">
                    <img
                      src={ContactUsPart3Image3}
                      alt="error"
                      className="buttonImage"
                    />
                  </div>
                  <div className="contactText1">Chat with us</div>
                </div>
              </div>
            </div>
            <FrequentlyAskedQuestion data={data} />
          </div>
          <Footer />
        </div>
      )}
      {/*  */}
    </>
  );
}

export default ContactUsPage;
