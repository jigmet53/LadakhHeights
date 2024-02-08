import React, { useEffect, useState } from "react";
import FooterBackgroundImgArcPrivacyPolicy from "../../../assets/common/FooterBackgroundImage.png";
import FooterBackgroundImgPrivacyPolicy from "../../../assets/common/FooterBackgroundImg.png";
import FooterImgPrivacyPolicy from "../../../assets/common/FooterImg.png";
import Footer from "../../Organisms/Footer/Footer";
import "./PrivacyPolicy.css";
import Title from "../../Atoms/Title/Title";

function CancellationAndRefundPolicy() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.outerWidth <= 600) {
      setIsMobile(true);
    }
  }, [window.outerWidth]);
  return (
    <div className="Cancellation And Refund">
      <Title title="Yuva | Cancellation and Refund Policy"></Title>

      {/* {isMobile?<div style={{marginLeft:"-4em",marginBottom:".5em"}}> <Breadcrumb /></div>:<div><Breadcrumb /></div>} */}
      <div className="privacyPolicyTop">
        <img
          src={FooterBackgroundImgPrivacyPolicy}
          alt="FooterBackgroundImgPrivacyPolicy"
          className="FooterBackgroundImagePrivacyPolicy"
        />
        <img
          src={FooterBackgroundImgArcPrivacyPolicy}
          alt="FooterBackgroundImgArcPrivacyPolicy"
          className="FooterBackgroundImgArcPrivacyPolicy"
        />
        <img
          src={FooterImgPrivacyPolicy}
          alt="FooterImgPrivacyPolicy"
          className="FooterImagePrivacyPolicy"
        />
      </div>
      <div className="privacyPolicyBottom">
        <div className="contentPrivacyPolicy">
          <span className="contentPrivacyPolicyHeading1">
            Cancellation and Refund Policy
          </span>
          <p>
            Eines Healthcare Private Limited, a company incorporated under the Companies
            Act, 1956 and having its registered office at 1025 & 1030, 80 feet
            road, Koramangala 1st Block, Bangalore 560034, (“Yuva Health, we,
            us”), owns and operates www.yuvahealth.in and a mobile application
            under the brand name Yuva Health (collectively referred to as the
            “Platform”) where users can place orders to purchase the Products
            and/or Services offered by us listed/available on the Platform
            (“User” or “Users” or “you”).
          </p>
          <p>
            This cancellation and refund policy (“Policy”), together with the
            Terms and Conditions [accessible at Terms of Use | Yuva Health] sets
            out Yuva Health’s procedures and policies in accepting: (a)
            Cancellation and (b) Refund thereof. Any cancellation of Products or
            Services by you is subject to the terms and conditions set out under
            this Policy.
          </p>
          <span className="contentPrivacyPolicyBottomHeading">
            Cancellation Policy
          </span>
          <p>
            Subscriptions: Subscriptions can be cancelled within a time frame of
            over 30 days. The amount will be refunded to your mode of payment
            after a cancellation fee of 600 INR/- has been deducted.
          </p>
          <p>
            Lab/Diagnostics Tests: A Lab/Diagnostics Test can be cancelled until
            the status of the Lab/Diagnostic Test turns to “sample collected” on
            the Platform. Once the sample is collected, the Test cannot be
            cancelled and no refund will be provided to the User. A
            Lab/Diagnostics Test can also be refused when empanelled
            phlebotomist arrives at the pickup location provided by the User. In
            such cases refund will be initiated as per the refund policy. No
            cancellation charges shall be levied for the cancellation of an
            order in accordance with the terms of this policy.
          </p>{" "}
          <p>
            Medicines and OTC: Order cannot be cancelled once the order is
            accepted by our Pharmacy partner. Please reach out to{" "}
            <a
              href="mailto:contact@yuvahealth.in"
              style={{ color: "#0270e0", textDecoration: "none" }}
            >
              contact@yuvahealth.in
            </a>{" "}
            for any further assistance
          </p>
          <span className="contentPrivacyPolicyBottomHeading">
            Refund Policy
          </span>
          <span className="contentPrivacyPolicyBottomHeading">
            Lab/Diagnostics Tests:
          </span>
          <p>
            To claim a refund, kindly support it with related documents/reports.
            In normal cases, any report comparisons beyond 7 days will not be
            considered. In the case of chronic diseases, an exception can be
            made up to 15 days, only after approval from our Quality team.
          </p>
          <p>
            In the case of Thyroid, TSH values can vary due to various factors
            like time of sample collection and fasting status. Only significant
            variations in TSH levels will be considered. Any variation in Lipid
            profile will not be considered.
          </p>
          <p>
            In the case of any discrepancy in test results, a free re-sample
            will be collected and sent to 2 partner labs. 1 sample will be sent
            to our partner lab and another to a standard lab. If a variation is
            found in the results, we will refund the entire test amount. Our
            quality team reserves the right to make the final decision.
          </p>
          <span className="contentPrivacyPolicyBottomHeading">
            Online Consultation:
          </span>
          <p>
            In case of online consultation, a customer will be eligible to raise
            a request for a Refund only in case the consultation query is not
            replied to within the specified timeline. The customer is required
            to raise the Refund request with Yuva Health customer care within 72
            (seventy-two) hours from the time of submission of the query or
            receiving of response. The request for the Refund will be validated
            by the Yuva Health customer care team.
          </p>
          <p>
            In case of a valid Refund, the same will be done by crediting the
            bank account of the customer. The refund process shall be completed
            within 30 (thirty) days from the date of submission of the request
            for Refund
          </p>
          <span className="contentPrivacyPolicyBottomHeading">
            Medical Tests
          </span>
          <p>
            In the case of medical tests, a refund request may be raised in the
            following cases:
          </p>
          <p>
            If the patient has suffered from Haematoma or any prick-related
            injury; If the report has been challenged and no proper
            justification (i.e. reasonable clarification provided either by Yuva
            Health or the diagnostic centre) has been provided;
          </p>
          <p>
            If the time limit within which a report has to be provided to the
            patient is breached by 72 (seventy-two) hours and no proper
            justification (i.e reasonable clarification provided either by Yuva
            health or the diagnostic centre) has been provided.
          </p>
          <span className="contentPrivacyPolicyBottomHeading">
            Subscription Plan:
          </span>
          <p>
            Refunds for Cancelled Subscription Plans will be processed to the
            source of payment once a cancellation fee of 600 INR/- has been
            deducted.
          </p>
          <span className="contentPrivacyPolicyBottomHeading">
            Refund Process:
          </span>
          <p>
            In all the above cases, if the claim is found to be valid, Refund
            will be made as mentioned below:
          </p>
          <p>
            Online Banking: 2-7 Working Days
            <br />
            Online refund: 7-10 business days subject to the bank turnaround
            time and RBI Guidelines.
            <br />
            Other Wallets: 2 -7 Working Days
          </p>
          <span className="contentPrivacyPolicyBottomHeading">OTC:</span>
          <p>
            If the order is cancelled or partially delivered, the amount will be
            restored back within 5-7 working days to the source account
          </p>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default CancellationAndRefundPolicy;
