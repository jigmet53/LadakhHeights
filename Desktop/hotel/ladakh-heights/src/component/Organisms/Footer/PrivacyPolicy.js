import React, { useEffect, useState } from "react";
import FooterBackgroundImgArcPrivacyPolicy from "../../../assets/common/FooterBackgroundImage.png";
import FooterBackgroundImgPrivacyPolicy from "../../../assets/common/FooterBackgroundImg.png";
import FooterImgPrivacyPolicy from "../../../assets/common/FooterImg.png";
import Footer from "../../Organisms/Footer/Footer";
import "./PrivacyPolicy.css";
import Title from "../../Atoms/Title/Title";

function PrivacyPolicy() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.outerWidth <= 600) {
      setIsMobile(true);
    }
  }, [window.outerWidth]);
  return (
    <div className="mainPrivacyPolicy">
      <Title title="Yuva | Privacy Policy"></Title>

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
          <span className="contentPrivacyPolicyHeading1">Privacy Policy</span>
          <p>
            When you interact with Eines Healthcare Private Limited, the
            transaction is initiated by demarcating the data of one customer
            from another. This identification is required to deliver the
            personalized services demanded by our customers. These transactions
            inevitably lead to data exchange or transfer between Eines
            Healthcare Private Limited and the end-user.
          </p>
          <p>
            At Eines Healthcare Private Limited, we are committed to protecting
            the data shared by the customers, for the utilization of our
            services. We exercise extreme precaution and care while dealing with
            the privacy and protection of the information shared with us. This
            Privacy Policy is intended to better equip users with information
            regarding how the data that they provide is collected, what for and
            in what manner is it collected, to offer various services and
            benefits through our platform. The scope for this policy extends to
            all users engaging the services of Eines Healthcare Private Limited,
            across all platforms and services offered by us.
          </p>
          <p>
            By using the services offered by Eines Healthcare Private Limited
            across its various platforms, you consent to the collection of data
            and use of information as set forth by the terms laid out under this
            privacy policy. Further, you acknowledge that Eines Healthcare
            Private Limited reserves the right to periodically change, modify,
            add or remove or otherwise update the provisions contained herein at
            its discretion, without prior notification.
          </p>

          <p>
            To help you understand our privacy practices more clearly, please
            refer to our Privacy Overview detailed below along with the Terms &
            Conditions governing your use of our services.
          </p>

          <span className="contentPrivacyPolicyBottomHeading">
            1. Definitions
          </span>
          <p>
            Certain terms used in this privacy policy shall have the meaning as
            defined hereunder unless the context otherwise requires:
          </p>

          <ol>
            <li>"Act" means the Information Technology Act, 2000</li>

            <li>
              “Application or mobile application” may mean such software
              developed by, or for, Eines Healthcare Private Limited on various
              mediums including but not limited to mobile phones for the purpose
              of accessing its products, policies, features and services.
            </li>

            <li>
              "Call Centre" means a call centre facility set up/ engaged by
              Eines Healthcare Private Limited to assist its Customers with
              respect to various transactions and to furnish information etc.,
              regarding its products and such other related information.
            </li>

            <li>
              "Data" includes any information submitted to Eines Healthcare PVT
              LTD via its platforms.
            </li>

            <li>
              “Dashboard” may mean such interface, software, and graphical
              summary that provides insight and access into Eines Healthcare PVT
              LTD’s policies, products, features and services regardless of the
              medium of access.
            </li>

            <li>
              “Partners” refers to any such entities, or persons engaged by, or
              associated/affiliated with the Company in connection with its
              business activities in any form. Provided that any third parties
              whose products/services are advertised, promoted, marketed and/or
              sold on the Company's website shall also be deemed Partners
              notwithstanding that such parties may not be engaged by,
              associated/affiliated with the Company.
            </li>

            <li>
              "Personal Data" or "Personal Information" means any information
              relating to a person who can be identified either directly from
              that data, or from that data together with any other information
              that either is or is likely to be available. Provided that any
              information or data available in the public domain, or accessible
              under the Right to Information Act, 2005, shall not be construed
              as being “Personal Data” or “Personal Information”.
            </li>

            <li>
              “Privacy Policy” refers to this Privacy Policy, and any subsequent
              amendments thereto.
            </li>

            <li>
              “Rules” mean the Information Technology (Reasonable Security
              Practices and Procedures and Sensitive Personal Data or
              Information) Rules, 2011.
            </li>

            <li style={{ textIndent: "-1.5em" }}>
              “Sensitive personal data or information” of a person, whether
              natural or justice, shall have such meaning as ascribed to it
              under the Rules.
            </li>

            <li style={{ textIndent: "-1.5em" }}>
              “Use” means accessing the Website for any purpose including, but
              not limited to, the enquiry of our products or services and/ or
              entering into a transaction with Us in any other manner.
            </li>

            <li style={{ textIndent: "-1.5em" }}>
              "Website" means www.yuvahealth.in or any other website which Eines
              Healthcare Private Limited may launch or operate for its business
              purposes or otherwise.
            </li>

            <li style={{ textIndent: "-1.5em" }}>
              “Platform” denotes any medium through which the services of Eines
              Healthcare Private Limited are offered to the end-user eg.
              Website, app etc.
            </li>

            <li style={{ textIndent: "-1.5em" }}>
              “Privacy Policy” refers to this Privacy Policy, and any subsequent
              amendments thereto.
            </li>
          </ol>
          <p>
            The word "Data" and "Information" are used interchangeably in this
            document.
          </p>

          <span className="contentPrivacyPolicyBottomHeading">
            2. Data Collection
          </span>

          <p>
            We engage various Platforms, through which the services of Eines
            Healthcare Private Limited are delivered to our customers. To ensure
            quality services, personal identification information may be
            extracted for the purpose of tailoring services to the needs of a
            user. We collect data for the purpose of conferring benefits under
            various Health Insurance Programs. Information in regards to the
            same may be collected in the following instances:
          </p>

          <ol>
            <li>
              Information pertaining to the Insurance Cover opted by the
              user(s), in any physical, digital or electronic form inclusive of
              the mobile applications in connection with the purchase of an
              insurance cover, service or product from Eines Healthcare Private
              Limited.
            </li>

            <li>
              Any information provided to Eines Healthcare Private Limited for
              the purpose of accessing our Website/Apps, using any of our
              services or placing any form of enquiry with Eines Healthcare
              Private Limited, either online or in any other manner.
            </li>

            <li>Information is while purchasing our products online.</li>

            <li>
              Information derived by way of any transaction initiated by a user
              on our Website, app or any other payment gateway links available
              on the Eines Healthcare Private Limited Website
            </li>

            <li>
              Information is received by Eines Healthcare Private Limited
              through third parties such as employers, hospitals, medical
              practitioners, clinics, motor workshops, travel agencies or banks,
              etc. for securing the benefits and services provided by Eines
              Healthcare Private Limited.
            </li>

            <li>
              In order to provide access to our platform, we may collect
              information regarding your IP address, browser information, or
              other device-identifying information from cookies, or other
              technology deployed for the collection of statistical data on our
              website, web and mobile applications.
            </li>
          </ol>

          <p>
            The kind of data that may be collected by Eines Healthcare Private
            Limited depends on the nature of your transaction and the objective
            of your association. It may also depend on your choice of services
            or plans. Therefore, depending on what product, plan or service of
            ours you engage, the information to be collected will be determined.
          </p>
          <p>
            Eines Healthcare Private Limited asserts that any data collection on
            behalf of Eines Healthcare Private Limited, across any of its
            platforms, is carried out with the sole objective of facilitating
            and enhancing user experience. Therefore, ensuring that the needs of
            our customers are better served is the prime purpose for furnishing
            any data on any of the Platforms operated by Eines Healthcare
            Private Limited.
          </p>

          <span className="contentPrivacyPolicyBottomHeading">
            3. Usage Of Data Collected
          </span>
          <p>
            The information collected by Eines Healthcare Private Limited by way
            of the use of any of its Platforms is for the purpose of providing,
            maintaining and optimizing the standard of user experience of its
            services. Therefore, the use of any of our platforms authorizes
            Eines Healthcare Private Limited to utilize the data furnished for
            providing the following services:
          </p>

          <ol>
            <li>
              Eines Healthcare Private Limited makes use of Contact Information
              provided by a user to reach out to the customer in order to spread
              awareness about products and/or services we may have or
              developments made on the existing products or services used by the
              customer;
            </li>

            <li>
              Contact data furnished by a customer is extracted to disseminate
              any information with regard to any products and services devised
              or provided by our affiliates.
            </li>

            <li>
              Eines Healthcare Private Limited is a Health Insurance Provider
              i.e. health insurance plans are provided to customers at different
              rates and terms. Contact Information provided by the customer is
              utilized to timely remind customers of the deadline of policy
              renewal, information pertaining to claims, if any and make
              available miscellaneous information about various types of
              insurance policies.
            </li>

            <li>
              To further enhance the quality of services provided, Eines
              Healthcare Private Limited extracts user Contact Information to
              conduct data analysis in-house, through affiliated Companies or
              through any duly engaged service provider
            </li>

            <li>
              Data provided to Eines Healthcare Private Limited may be shared
              with such service provider(s), as duly engaged by Us, either in
              India or outside India for the purpose of providing any ancillary
              services to you arising out of a Contract of Insurance or
              otherwise, subject to such legal safeguards under the Rules as may
              be applicable.
            </li>

            <li>
              Disclosure of any information as required under law or by order of
              any statutory body or Court.
            </li>
          </ol>

          <p className="includedRedirect">
            By providing any contact information, you have consented to be
            contacted by us thereby waiving any complaints and/or registrations
            under the National Do Not Call ("NDNC") Registry, and such waiver is
            made of your own volition and free will. You may withdraw your
            consent or change your interests at any time and may opt out of any
            marketing / promotional / newsletters mailings by sending us a
            letter or an email to that effect at <br />
            <a
              href="mailto:contact@yuvahealth.in"
              style={{ color: "#0270e0", textDecoration: "none" }}
            >
              contact@yuvahealth.in
            </a>
            .
          </p>
          <p>
            The contact information will be removed from our database within 30
            working days. However, your information may be recollected and used
            as per this policy statement should you transact with us again upon
            un-subscription.
          </p>
          <p>
            You hereby irrevocably and unconditionally authorize the Company to
            use the information provided by you to carry out your instructions
            and effecting transactions that you may undertake on the Website, in
            accordance with these Terms and such other terms as may be specified
            by the Company. The records of the Company generated by the
            transaction(s), including the recording of the time of the
            transaction(s), shall be conclusive proof of the genuineness and
            accuracy of such transactions. We don't store your credit card
            information or internet banking information. However, if you make an
            online purchase of a policy from Us, the payment gateways on our
            website may collect your card number and expiry date for processing
            the payment.
          </p>
          <p>
            We continually strive to improve our website offerings based on the
            information and feedback we receive from you. We also monitor
            customer traffic patterns and site usage to help us develop the
            design and layout of the Website.
          </p>

          <span className="contentPrivacyPolicyBottomHeading">
            4. Retention Of Information And Sharing Of Collected Data
          </span>
          <p>
            No data or information pertaining to the end-user is collected by
            Eines Healthcare Private Limited, other than information collected
            to facilitate the provision of our products and services. Moreover,
            any such data collected for enhancing customer experience is not
            retained beyond the reasonable period that requires fulfilling the
            purpose of service or product betterment.
          </p>
          <p>
            Sensitive personal data or information, and any other information
            collected by us shall be stored either in India or abroad, subject
            to applicable regulatory provisions. You hereby provide your consent
            to us to transfer/share your Personal Data outside India for the
            purpose for which said information has been collected by Us. We
            shall always ensure that reasonable security practices are enforced
            in order to protect your sensitive personal data or information
            wherever it may be stored or processed, and such safeguards shall,
            at no point, is less than as required by law in India.
          </p>

          <p>
            We shall not share, rent, lease, or sell your personal information
            (e.g. your email address, your credit card information, your name,
            your address, etc.) to any third party for their independent use or
            benefit. We may share your information collected by us with third
            parties for providing you with better services and offerings as
            stated under the section "Usage of Data Collected". You understand
            and acknowledge that certain data/information provided by you will
            be shared with any service providers we may have, engage or be
            associated with for the purpose of providing the services under the
            contract of insurance including any ancillary services required to
            be provided thereunder. You also understand and acknowledge that
            such data/information may also be shared with our group companies
            for research and analysis purposes.
          </p>

          <p>
            We shall not retain any of your sensitive personal data or
            information unless retention of the information is required for
            rendering the services or is required under any provision of law.
          </p>

          <span className="contentPrivacyPolicyBottomHeading">
            5. Corrections/Updates In User Data
          </span>
          <p>
            Should you find any errors in any personal information pertaining to
            you and reflected in our records you may write to us to seek
            appropriate rectification. We reserve the right, however, to verify
            your identity before proceeding with any request for such
            rectification or modification.
          </p>
          <p>
            We may reject requests that are impractical, unreasonably repetitive
            and/or risk the privacy of others.
          </p>
          <p>
            While we shall endeavor to allow such rectification/ modification
            free of charge, we reserve the right to charge a service fee should
            the same be permitted under the laws of India.
          </p>

          <span className="contentPrivacyPolicyBottomHeading">
            6. Cookies And Log
          </span>
          <p>
            To enhance the user experience of Eines Healthcare Private Limited
            Platforms, we or our Partners may store cookies when you visit our
            Platforms or any of our Partner’s websites, in order to enable you
            to browse and transact at such websites. The primary purpose of
            these cookies is to analyze how our Website is used. Our cookies let
            you view customized pages while transacting with us.
          </p>
          <p>
            Cookies are small data files that a website stores on your device to
            "recognize" you on subsequent requests. Our cookies do not have
            confidential or personally identifiable information.
          </p>

          <p>
            We may use various tools viz., Chart tool, tracking tool etc. on our
            website to improve the customer experience by showing or advertising
            such goods/services we think may be of interest to you. Also, We use
            analytic tools, web beacons etc. to gather anonymous, aggregated
            statistical information (e.g. unique hits, page views, etc.) about
            our Website traffic. We use Non-Persistent cookies for managing the
            users' logged-in sessions and persistent cookies for managing the
            performance.
          </p>

          <p>
            However, should a customer wish to not consent to the storage of
            these cookies, they may turn off the Cookies Option in their browser
            settings.
          </p>

          <span className="contentPrivacyPolicyBottomHeading">
            7. Links To Third-Party Websites
          </span>
          <p>
            Eines Healthcare Private Limited’s Website may contain links to
            websites operated by third parties other than Eines Healthcare
            Private Limited. Such links are provided for your convenience only
            and Eines Healthcare Private Limited has no control over such
            websites and no representation is being made by the Company as to
            their content and conduct. Use of, or reliance on any such links and
            the content thereon provided shall be at your sole risk.
          </p>
          <p>
            When visiting such external links, you shall refer to the terms and
            conditions of use of such websites. No hypertext links shall be
            created from any website controlled by You or any other person to
            this Website, without the express prior written permission of the
            Company.
          </p>

          <span className="contentPrivacyPolicyBottomHeading">
            8. Protection Of Information
          </span>
          <p>
            Eines Healthcare Private Limited has adequate security mechanisms in
            place to ensure the safe processing of data and protection against
            unauthorized access. Our security practices enable us to protect
            user data from any unwarranted and unauthorized disclosure, access
            or alteration to your data by way of our comprehensive documented
            information security programme and policies that contain managerial,
            technical, operational and physical security measures that are
            appropriate to protect information received by us.
          </p>
          <p className="ppBottomPara">
            Although we shall endeavour to safeguard the confidentiality of your
            personally identifiable information, transmissions and transactions
            made by means of the Internet cannot be made absolutely secure. By
            using this Website, you agree that we will have no liability for
            disclosure of your information due to errors in transmission or
            unauthorised acts of third parties.
          </p>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
