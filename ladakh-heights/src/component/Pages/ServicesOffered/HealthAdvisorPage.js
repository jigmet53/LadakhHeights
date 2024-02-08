import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Swal from "sweetalert2";
import * as Yup from "yup";
import Ellipse from "../../../assets/LandingPage_Services/Ellipse.png";
import coverImage from "../../../assets/LandingPage_Services/coverImage.png";
import { getCallRequest } from "../../../redux/Action/Advertisement/GetCallRequestAction";
import { viewAllCityRequest } from "../../../redux/Action/Landing/viewAllCityAction";
import TypeABanner from "../../Organisms/Banner/TypeABanner";
import "./HealthAdvisorPage.css";
import { useNavigate } from "react-router-dom";
import YuvaLoader from "../../Atoms/Loader/YuvaLoader";

const getCallFormValidation = Yup.object().shape({
  mobileNumber: Yup.string()
    .matches(/^\d{10}$/, "Please Enter a Valid 10-digit Number")
    .required("Mobile Number is Required"),
  Name: Yup.string().required("Name is a Required Field"),
  city: Yup.string().required("City is a Required Field"),
});


function HealthAdvisorPage({ position, screenType, mapData }) {
  const [isMobile, setIsMobile] = useState(false);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isClick, setIsClick] = useState(false);

  const handleSubmit = (values) => {
    dispatch(getCallRequest(values));
    setIsClick(true)
  };

  const initialValues = {
    Name: name,
    mobileNumber: mobileNumber,
    city: city,
  };


  const formik = useFormik({
    initialValues,
    validationSchema: getCallFormValidation,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });


  useEffect(() => {
    if (window.outerWidth <= 600) {
      setIsMobile(true);
    }
  }, [window.outerWidth]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(viewAllCityRequest());
  }, []);


  const getCall = useSelector((state) => state.advertisement.getCall);
  const viewAllCity = useSelector((state) => state.landing.viewAllCity);

  useEffect(() => {
    if (
      getCall?.data?.data.status === 201 &&
      getCall?.data?.data.data.message !== ""
    ) {
      Swal.fire({
        text: getCall.data.data.data.message,
        icon: "success",
      }).then(() => {
        formik.resetForm({ values: initialValues });
        setIsClick(false)
      });
      getCall.data.data.status = "";
    }
  }, [getCall?.data?.data.status])

  var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  const handleBookPopularTest= () => {
    localStorage.setItem(
      "viewEvery",
      JSON.stringify({
        radioItem: "NO_RANGE",
        minPrice: 0,
        maxPrice: 10000,
        allChecked: ["Test"],
      })
    );
    navigate("/view-test");
  };

  const handleBookTest = () => {
    localStorage.setItem(
      "viewEvery",
      JSON.stringify({
        radioItem: "NO_RANGE",
        minPrice: 0,
        maxPrice: 10000,
        allChecked: ["Test", "Packages"],
      })
    );
    navigate("/view-test");
  };

  const handleBookPackage = () => {
    localStorage.setItem(
      "viewEvery",
      JSON.stringify({
        radioItem: "NO_RANGE",
        minPrice: 0,
        maxPrice: 10000,
        allChecked: ["Packages"],
      })
    );
    navigate("/view-test");
  };

  const handleRadiology = () => {
    localStorage.setItem(
      "viewEvery",
      JSON.stringify({
        radioItem: "NO_RANGE",
        minPrice: 0,
        maxPrice: 10000,
        allChecked: [],
        radiology: true,
      })
    );
    navigate("/view-test");
  };

  const handleHRA = () => {
    if (localStorage.getItem("token") === null) {
      navigate("/health-risk-assessment");
    } else {
      navigate("/health-risk-assessment-locked");
    }
  };

  const handleOPD = () => {
    navigate("/consultation/cashless-opd");
  };

  return (
    <>
      {isMobile ? (
        <>
          <div>
            <div className="HealthAdvisorBannerMain1">
              <div>
                <div className="HealthAdvisorMainSlider">
                  <div>
                    <TypeABanner
                      position={position}
                      screenType={screenType}
                      mapData={mapData}
                    />
                  </div>
                </div>
              </div>
              <div className="HealthAdvisorGridSecondContainer">
                <div
                  style={{
                    backgroundImage: `url(${coverImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                  }}
                  className="AdvisorGridSecondContainer"
                  onClick={handleBookTest}
                >
                  Book Test
                </div>
                <div
                  style={{
                    backgroundImage: `url(${coverImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                  }}
                  className="AdvisorGridSecondContainer"
                  onClick={handleBookPopularTest}
                >
                  Popular Test
                </div>

                <div
                  style={{
                    backgroundImage: `url(${coverImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                  }}
                  className="AdvisorGridSecondContainer"
                  onClick={handleBookPackage}
                >
                  Popular Package
                </div>

                <div
                  style={{
                    backgroundImage: `url(${coverImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                  }}
                  className="AdvisorGridSecondContainer"
                  onClick={handleRadiology}
                >
                  Book Radiology Test{" "}
                </div>

                <div
                  style={{
                    backgroundImage: `url(${coverImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                  }}
                  className="AdvisorGridSecondContainer"
                  onClick={handleOPD}
                >
                  Book OPD Appointment
                </div>

                <div
                  style={{
                    backgroundImage: `url(${coverImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                  }}
                  className="AdvisorGridSecondContainer"
                  onClick={handleHRA}
                >
                  Health Risk Assessment
                </div>
              </div>
            </div>
            <div>
              <div className="HealthAdvisorForm">
                <img
                  alt=""
                  className="HealthAdvisorFormimage"
                  src={Ellipse}
                ></img>
                <div className="HealthAdvisorFormHeading">
                  Request A Call From Health Adviser
                </div>
                <div className="HealthAdvisorFormList">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="AdvertisementForm">
                      <label className="HealthAdvisorFormListsubHeading">Name</label>
                      <input
                        type="text"
                        name="Name"
                        placeholder="Provide Your Name"
                        className="HealthAdvisorInput"
                        onWheel={(event) => event.currentTarget.blur()}
                        {...formik.getFieldProps("Name")}
                      />
                      {formik.touched.Name && formik.errors.Name && (
                        <div className="AdvisorerrorMessageValidation">{formik.errors.Name}</div>
                      )}

                      <label className="HealthAdvisorFormListsubHeading">Phone Number</label>
                      <input
                        type="number"
                        name="mobileNumber"
                        className="HealthAdvisorInput"
                        placeholder="To Coordinate With You"
                        {...formik.getFieldProps("mobileNumber")}
                      />
                      {formik.touched.mobileNumber && formik.errors.mobileNumber && (
                        <div className="AdvisorerrorMessageValidation">
                          {formik.errors.mobileNumber}
                        </div>
                      )}

                      <label className="HealthAdvisorFormListsubHeading">Location</label>
                      <select
                        name="city"
                        className="HealthAdvisorInput"
                        placeholder="Your Location"
                        {...formik.getFieldProps("city")}
                      >
                        <option value="" disabled>
                          Select Your City
                        </option>
                        {viewAllCity?.data?.data?.data.data.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      {formik.touched.city && formik.errors.city && (
                        <div className="AdvisorerrorMessageValidation">{formik.errors.city}</div>
                      )}

                      <p className="HealthAdvisorParaText">
                        *I authorize YuvaHealth representative to contact me. I understand that this will override the DND status on my mobile number
                      </p>

                      <div className="HealthAdvisorButton" type="submit">
                        <button className="HealthAdvisorBtn" type="submit" disabled={isClick}>
                          BOOK APPOINTMENT
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="HealthAdvisorMainContainer">
              <div className="HealthAdvisorBannerMain1">
                <div>
                  <div className="HealthAdvisorMainSlider">
                      <div>
                        <TypeABanner
                          position={position}
                          screenType={screenType}
                          mapData={mapData}
                        />
                      </div>
                  </div>
                </div>
                <div className="HealthAdvisorGridSecondContainer">
                  <div
                    style={{
                      backgroundImage: `url(${coverImage})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                    }}
                    className="AdvisorGridSecondContainer"
                    onClick={handleBookTest}
                  >
                    Book <br /> Test
                  </div>
                  <div
                    style={{
                      backgroundImage: `url(${coverImage})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                    }}
                    className="AdvisorGridSecondContainer"
                    onClick={handleBookPopularTest}
                  >
                    Popular <br /> Test
                  </div>

                  <div
                    style={{
                      backgroundImage: `url(${coverImage})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                    }}
                    className="AdvisorGridSecondContainer"
                    onClick={handleBookPackage}
                  >
                    Popular<br /> Package
                  </div>

                  <div
                    style={{
                      backgroundImage: `url(${coverImage})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                    }}
                    className="AdvisorGridSecondContainer"
                    onClick={handleRadiology}
                  >
                    XRAY & <br />SCAN
                  </div>

                  <div
                    style={{
                      backgroundImage: `url(${coverImage})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                    }}
                    className="AdvisorGridSecondContainer"
                    onClick={handleOPD}
                  >
                    Book OPD Appointment
                  </div>

                  <div
                    style={{
                      backgroundImage: `url(${coverImage})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                    }}
                    className="AdvisorGridSecondContainer"
                    onClick={handleHRA}
                  >
                    Health Risk Assessment
                  </div>
                </div>
              </div>
              <div>
                <div className="HealthAdvisorForm">
                  <img
                    alt=""
                    className="HealthAdvisorFormimage"
                    src={Ellipse}
                  ></img>
                  <div className="HealthAdvisorFormHeading">
                    Request A Call From Health Adviser
                  </div>
                  <div className="HealthAdvisorFormList">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="AdvertisementForm">
                        <label className="HealthAdvisorFormListsubHeading">Name</label>
                        <input
                          type="text"
                          name="Name"
                          placeholder="Provide Your Name"
                          className="HealthAdvisorInput"
                          onWheel={(event) => event.currentTarget.blur()}
                          {...formik.getFieldProps("Name")}
                        />
                        {formik.touched.Name && formik.errors.Name && (
                          <div className="AdvisorerrorMessageValidation">{formik.errors.Name}</div>
                        )}

                        <label className="HealthAdvisorFormListsubHeading">Phone Number</label>
                        <input
                          type="number"
                          name="mobileNumber"
                          className="HealthAdvisorInput"
                          placeholder="To Coordinate With You"
                          {...formik.getFieldProps("mobileNumber")}
                        />
                        {formik.touched.mobileNumber && formik.errors.mobileNumber && (
                          <div className="AdvisorerrorMessageValidation">
                            {formik.errors.mobileNumber}
                          </div>
                        )}

                        <label className="HealthAdvisorFormListsubHeading">Location</label>
                        <select
                          name="city"
                          className="HealthAdvisorInput"
                          placeholder="Your Location"
                          {...formik.getFieldProps("city")}
                        >
                          <option value="" disabled>
                            Select Your City
                          </option>
                          {viewAllCity?.data?.data?.data.data.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                        {formik.touched.city && formik.errors.city && (
                          <div className="AdvisorerrorMessageValidation">{formik.errors.city}</div>
                        )}

                        <p className="HealthAdvisorParaText">
                          *I authorize YuvaHealth representative to contact me. I understand that this will override the DND status on my mobile number
                        </p>

                        <div className="HealthAdvisorButton" type="submit">
                          <button className="HealthAdvisorBtn" type="submit" disabled={isClick}>
                            BOOK APPOINTMENT
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default HealthAdvisorPage;
