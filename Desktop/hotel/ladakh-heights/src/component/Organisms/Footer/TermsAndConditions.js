import React, { useEffect, useState } from "react";
import FooterBackgroundImgArc from "../../../assets/common/FooterBackgroundImage.png";
import FooterBackgroundImg from "../../../assets/common/FooterBackgroundImg.png";
import FooterImg from "../../../assets/common/FooterImg.png";
import Footer from "../../Organisms/Footer/Footer";
import "./TermsAndConditions.css";
import Title from "../../Atoms/Title/Title";

function TermsAndConditions() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.outerWidth <= 600) {
      setIsMobile(true);
    }
  }, [window.outerWidth]);
  return (
    <div className="mainTermsAndConditions">
    <Title title="Yuva | Terms And Conditions"></Title>

      {/* {isMobile?<div style={{marginLeft:"-4em",marginBottom:".5em"}}> <Breadcrumb /></div>:<div><Breadcrumb /></div>} */}
      <div className="termsAndConditionsTop">
        <img
          src={FooterBackgroundImg}
          alt="FooterBackgroundImg"
          className="FooterBackgroundImage"
        />
        <img
          src={FooterBackgroundImgArc}
          alt="FooterBackgroundImgArc"
          className="FooterBackgroundImgArc"
        />
        <img src={FooterImg} alt="FooterImg" className="FooterImage" />
      </div>
      <div className="termsAndConditionsBottom">
        <div className="contentTermsAndConditions">
          <span className="contentTermsAndConditionsHeading">
            TERMS AND CONDITIONS
          </span>
          <br />
          <span className="contentTermsAndConditionsBottomHeading">
            Acknowledgement and acceptance of these terms of services
          </span>

          <p className="includedRedirect">
            This page states the terms and conditions (the T&C) under which you
            may access and/or use this website (the Website). Please read this
            page carefully. If you do not accept the Terms and Conditions stated
            herein, you are advised not to use the Website.
            <br /> <br />
            Eines Healthcare Private Limited ("Company" or "We" or "Us" or “Eines
            Healthcare Private Limited”) is the owner of this Website, and all the
            content herein, and reserves the right to change these T&C at any
            time without notice to you, and upon such change, the same shall be
            effective immediately. You agree to review these T&Cs regularly. By
            using the Website, you are agreeing to be bound by the T&C as
            updated from time to time.
            <br /> <br />
            These Terms and Conditions, together with the privacy policy (the
            “Privacy Policy”) which may be accessed here:{" "}
            <a href="/" style={{ color: "#0270e0", textDecoration: "none" }}>
              {" "}
              https://yuvahealth.in
            </a>
            , and other rules and policies, if any, posted on the Website,
            constitute the entire agreement between you and the Company
            concerning your use of the Website, and they supersede all prior
            communications, proposals, and terms and conditions between you and
            the Company concerning this Website. Any rights not expressly
            granted in these Terms and Conditions are reserved by the Company.
          </p>

          <span className="contentTermsAndConditionsBottomHeading">
            Definitions
          </span>

          <p>
            In this document, the following words and phrases shall have the
            meanings set forth herein unless the context demands otherwise:
          </p>
          <ol>
            <li>
              "Agreement" means the terms and conditions as detailed herein,
              including the privacy policy. It shall include all references to
              these terms and conditions as amended, negated, supplemented,
              varied or replaced from time to time.
            </li>
            <li>
              "Authority" shall mean the Insurance Regulatory and Development
              Authority or such other authority governing the general Insurance
              business in India.
            </li>
            <li>
              "Call Centre" means the call centre facility set up by Eines
              Healthcare Private Limited to assist its “Partner/Customer"s concerning
              various transactions and to furnish information etc., regarding
              its products and such other related information. The
              “Partner/Customer"s can presently reach Eines Healthcare Private Limited
              on the numbers notified on the Website.
            </li>
            <li>
              “Partner/Customer" means any person, whether legal or natural,
              browsing and/or using this Website to obtain information about, or
              procure such goods/services as sold herein.
            </li>
            <li>
              "Records" means any electronic records that are submitted through
              the Website and include physical records collected by an agent or
              an employee of Eines Healthcare Private Limited from the
              “Partner/Customer" or “Partner/Customer" for effecting the
              transaction.
            </li>
            <li>
              "Personally identifiable information" shall mean such information
              submitted by the “Partner/Customer" or “Partner/Customer" that
              enables individual identification of the “Partner/Customer" either
              by itself or in association with other material.
            </li>
            <li>
              "Policy" or "Product" shall mean, but not be limited to, various
              insurance policies and products that Eines Healthcare Private Limited may,
              as a corporate agent, display on the Website for sale from time to
              time.
            </li>
            <li>"Website" shall mean https://yuvahealth.in</li>
          </ol>

          <span className="contentTermsAndConditionsBottomHeading">
            Applicable Law
          </span>

          <p>
            This site is created and controlled by Eines Healthcare Private Limited. The
            laws of India shall apply and govern all content herein and courts
            in Bangalore, Karnataka shall have jurisdiction in respect of all
            the terms, conditions and disclaimers herein.
            <br />
            <br />
            The Company accepts no liability whatsoever, direct or indirect for
            non-compliance with the laws of any country other than that of
            India. The mere fact that the Website can be accessed in a country
            other than India would not result in such laws of the said country
            applying to the Website.
            <br />
            <br /> It shall be the sole responsibility of foreign residents
            including Non-Resident Indians in foreign jurisdictions to verify
            whether the services available on the Website can be accessed and
            utilised in their respective jurisdictions. The services which are
            part of the Website do not constitute an offer to sell or a
            solicitation of an offer to buy any policies/products to any person
            in any jurisdiction where it is unlawful to make such an offer or
            solicitation.
          </p>

          <span className="contentTermsAndConditionsBottomHeading">
            Eligibility
          </span>

          <p>
            You represent and warrant that you are competent and eligible to
            enter into a legally binding agreement and have the requisite
            authority to enter into this Agreement and perform your obligations
            herein. You shall not use this Website if you are not competent to
            contract under the applicable laws, rules and regulations.
          </p>
          <span className="contentTermsAndConditionsBottomHeading">
            Registration Requirement
          </span>

          <p>
            If Eines Healthcare Private Limited requires any “Partner/Customers” of this
            Website to submit the registration of their details to authenticate
            their use of the same then the “Partner/Customer" shall, at all
            times, be responsible for maintaining the confidentiality of their
            password and “Partner/Customer" id, and shall be fully responsible
            for all activities that occur by use of such password or
            “Partner/Customer" id. Further, the “Partner/Customer" agrees not to
            use any other person's “Partner/Customer" ID and/or password for any
            purpose whatsoever.
            <br />
            <br />
            The “Partner/Customer" is responsible for the security of their
            password and for all transactions undertaken through the Website
            using such a password. The “Partner/Customer" confirms that he/she
            is the authorized holder of the credit card or the original account
            used for the transactions under this Website.
            <br />
            <br />
            The Company shall not be responsible for any financial loss or
            inconvenience resulting from the misuse of the “Partner/Customer's”
            ID/password/credit card number/account details for the purchase of a
            policy on the Website.
            <br />
            <br />
            The “Partner/Customer" also agrees and undertakes to immediately
            notify Eines Healthcare Private Limited of any unauthorized use of the
            “Partner/Customer's” password or “Partner/Customer" ID. The
            “Partner/Customer" shall ensure that the “Partner/Customer" logs off
            from the Website at the end of each session at the Website. Eines
            Healthcare Private Limited shall not be responsible for any direct or
            indirect loss or damage arising out of the “Partner/Customer’s”
            failure to comply with this requirement.
            <br />
            <br />
            As part of the registration process, the “Partner/Customer" does
            hereby agree to provide Eines Healthcare Private Limited with their current,
            complete, and accurate information as prompted and to maintain and
            update this information as and when required keeping it current,
            complete and accurate at all times.
            <br />
            <br />
            If you provide any information that is untrue, inaccurate not
            current or incomplete or if the Company has reasonable grounds to
            suspect that such information is untrue, inaccurate, not current,
            incomplete or mischievous, Eines Healthcare Private Limited has the right to
            indefinitely suspend or terminate your membership and can block the
            “Partner/Customer" from using the Website.
          </p>
          <span className="contentTermsAndConditionsBottomHeading">
            Terms of Service
          </span>

          <p>
            This Agreement shall continue to be valid and in effect as long as
            you are using the Website or the services provided through the
            Website. The Website provides an online platform wherein the
            “Partner/Customers” can purchase/buy insurance policies of various
            providers and other health benefit products as listed on the Website
            per the terms and conditions set forth for such policies/products.{" "}
            <br />
            <br />
            You agree to use such services of the Company in a manner consistent
            with the terms and conditions of this Agreement and with all
            applicable laws and regulations.
            <br />
            <br />
            Further, the “Partner/Customer" of this Website does hereby agree
            and understand that the information furnished on this Website is for
            information and guidance purposes only and must not be construed as
            a recommendation by Eines Healthcare Private Limited to purchase any
            product. The decision to purchase the product should be based on
            your evaluation of the product. Further, you must exercise due care
            in ensuring the completeness and accuracy of the information
            provided. Eines Healthcare Private Limited and its employees shall not be
            liable for any loss or damage caused by or arising out of reliance
            placed on such incomplete or inaccurate information.
            <br />
            <br />
            Further, by effecting a transaction that may be allowed by Eines
            Healthcare Private Limited on the Website, you agree to provide complete and
            irrevocable authority to Eines Healthcare Private Limited to take steps and
            carry out tasks that are essential and relevant to the provision of
            the services for which the transaction is effected. You further
            acknowledge and accept that the records maintained by Eines
            Healthcare Private Limited concerning the transactions effected by you at
            the Website shall be the conclusive evidence of such transaction and
            shall be final and binding on you and your assigns and successors.
            <br />
            <br />
            Eines Healthcare Private Limited reserves the right to suspend, withdraw,
            modify, add or cancel any or all of the services offered on the
            Website without any prior notice. Any such suspension, withdrawal,
            modification, addition or cancellation shall become binding on you
            forthwith.
            <br />
            <br />
          </p>
          <span className="contentTermsAndConditionsBottomHeading">
            “Partner/Customer" Account Data
          </span>

          <p>
            Eines Healthcare Private Limited respects the privacy of every
            “Partner/Customer". We protect the personal information by our
            Privacy Policy set out below and respect the confidentiality of the
            “Partner/Customer".
            <br />
            <br />
            The information is kept confidential and is shared only in the
            manner detailed in the Privacy Policy below. However, you shall also
            be responsible for maintaining the confidentiality and security of
            your account and password and you agree to accept the responsibility
            for all the activities that occur using your account and password.
            The Company shall not be responsible for any loss or damage due to
            your failure to safeguard your account or password.
            <br />
            <br />
            You shall notify the Company by writing to contact@yuvahealth.in of
            any suspected unauthorized use(s) of your account or password, or
            any breach of security, including loss, theft, or unauthorized
            disclosure of your account password as soon as the same comes to
            your notice.
            <br />
            <br />
          </p>
          <span className="contentTermsAndConditionsBottomHeading">
            Privacy Policy
          </span>

          <p>
            For our policy on Privacy, kindly refer to our Privacy Policy
            section appearing on the main page of our website, available here:
            <a href="/privacy-policy">https:// yuvahealth.in/privacy-policy.</a>
          </p>
          <span className="contentTermsAndConditionsBottomHeading">
            Information on the Website
          </span>

          <p>
            Whilst every effort is made to update the information contained on
            this Website, neither Eines Healthcare Private Limited nor any third party
            or data or content provider makes any representations or warranties,
            whether express, implied in law or residual, as to the sequence,
            accuracy, completeness or reliability of the information, opinions,
            research information, data and/or content contained on the Website
            (including but not limited to any information which may be provided
            by any third party or data or content providers) and shall not be
            bound in any manner by any information contained on the Website.
            <br />
            <br />
            The Company reserves the right at any time to change or discontinue
            any aspect or feature of this Website without notice. No information
            provided on this Website shall be construed as advice or
            recommendation.
            <br />
            <br />
            You agree that the information on the Website with respect to any
            policy that you may purchase is merely indicative of the terms of
            such policy. In the event, with respect to a policy, there is any
            conflict between the terms set out in the policy document and the
            terms herein, you shall be governed by the terms of the policy
            document.
            <br />
            <br />
          </p>
          <span className="contentTermsAndConditionsBottomHeading">
            Intellectual Property
          </span>

          <p>
            The trademarks, names, logos and service marks displayed on this
            Website are registered and/or unregistered trademarks of the
            Company. Nothing contained on this Website should be construed as
            granting any license or right to use any of the trademarks without
            the prior written permission of the Company.
            <br />
            <br />
            Copyright and other intellectual property rights with respect to the
            contents on this Website are solely and exclusively owned by the
            Company. All rights in the pages, and site contents are owned by the
            Company and the “Partner/Customer" is prohibited from copying,
            modifying, displaying, distributing, transmitting, re-delivering,
            publishing, selling, licensing, creating derivative works or using
            any content of the Website for any purpose without the prior written
            consent of the Company.
            <br />
            <br />
            Everything you see or read on the Website (including but not limited
            to directories, guides, news articles, opinions, reviews, text,
            photographs, images, illustrations, profiles, audio clips, video
            clips, trademarks, service marks and the like) is copyrighted/
            protected by intellectual property laws.
            <br />
            <br />
          </p>

          <span className="contentTermsAndConditionsBottomHeading">
            Electronic Communication
          </span>

          <p>
            The “Partner/Customers” of this Website do hereby agree to receive
            communication from the Company and the Website electronically either
            by e-mails or through announcements on the Website.
          </p>

          <span className="contentTermsAndConditionsBottomHeading">
            Card or Bank Account Details
          </span>

          <p>
            You agree, understand and confirm that the bank or credit/debit card
            details provided by you for buying the insurance policies offered by
            Eines Healthcare Private Limited on the Website shall be correct and
            accurate and you shall not use the bank account and/or credit/debit
            card which is not lawfully owned by you. You further agree and
            undertake to provide the correct and valid bank account and/or
            credit/debit card details to Eines Healthcare Private Limited.
            <br />
            <br />
            Further, the said information shall not be stored, utilized and
            shared with any of the third parties by the Company unless required
            by law, regulation or court order. You shall fully indemnify the
            Company from any loss or damage arising out of a non-compliance of
            this condition by you.
            <br />
            <br />
          </p>

          <span className="contentTermsAndConditionsBottomHeading">
            Cancellation Policy
          </span>

          <p>
            The “Partner/Customer" does hereby agree that before purchasing the
            policy available on this Website, the “Partner/Customer" shall make
            himself/herself fully aware of its features and benefits offered
            there. Further, the “Partner/Customer" does hereby agree that
            cancellation of a policy purchased by the “Partner/Customer" online
            on this Website shall be subject to the terms and conditions of the
            respective policy and notwithstanding anything contained elsewhere,
            the terms and conditions specified on the policy shall always
            prevail.
          </p>

          <span className="contentTermsAndConditionsBottomHeading">
            Links to Third-Party Websites
          </span>

          <p>
            This Website may contain external links to websites operated by
            third parties other than Eines Healthcare Private Limited. Such links are
            provided for your convenience only and Eines Healthcare Private Limited has
            no control over such websites and the Company is making no
            representation as to its content and conduct. Use or reliance on any
            such links and the content thereon provided shall be at your sole
            risk.
            <br />
            <br />
            When visiting such external links, you shall refer to the terms and
            conditions of use of such websites. No hypertext links shall be
            created from any website controlled by You or any other person to
            this Website, without the express prior written permission of the
            Company.
            <br />
            <br />
          </p>

          <span className="contentTermsAndConditionsBottomHeading">
            Downloads and Software Available on the Website
          </span>

          <p>
            Any and all information, or any software (if any) that is made
            available for download from this Website is the copyrighted work of
            the Company and/or its suppliers. Your usage of such software is
            governed by the terms of the end “Partner/Customer" license
            agreement, if any, which accompanies or is included in such
            software. You shall not install or use any Software that is
            accompanied by or includes a License Agreement unless you first
            agree to the License Agreement terms.
          </p>

          <span className="contentTermsAndConditionsBottomHeading">
            Restrictions on Use
          </span>

          <p>You shall not:</p>
          <ol>
            <li>
              Reverse engineer, decompile, disassemble, copy, reproduce,
              distribute, modify, transmit, perform, reproduce, publish or
              create derivative works from or in any way exploit any of the
              services or content on this Website in violation of the Terms and
              Conditions or the laws of any country.
            </li>
            <li>
              Create a database in electronic or structured manual form by
              systematically downloading and storing all or any part of the
              Website save and accept such information as relates to the policy
              purchased by you.
            </li>
            <li>Cache or permit caching by any person;</li>
            <li>
              Perform any act that violates our intellectual property on the
              Website.
            </li>
            <li>
              Engage in any fraudulent, abusive or illegal activity, including
              but not limited to any communication or solicitation designed or{" "}
              intended to fraudulently obtain the password or any private
              information of any use.
            </li>
            <li>
              Use the Website to violate the security of any computer network,
              crack passwords or security encryption codes, transfer or store{" "}
              illegal material including threatening or obscene material or
              engage in any kind of illegal activity.
            </li>
          </ol>

          <span className="contentTermsAndConditionsBottomHeading">
            Downloads and Software Available on the Website
          </span>

          <p>
            This Website is provided without any warranties or guarantees and on
            an "As Is" condition. You must bear the risks associated with the
            use of the Website. While Eines Healthcare Private Limited tries to ensure
            that the material included on the Website is correct, it cannot be
            held liable for any inaccuracy of the same.
            <br />
            <br />
            Eines Healthcare Private Limited shall not be responsible for any errors or
            omissions or for the results obtained from the use of such
            information or for any technical problems you may experience while
            using the Website.
            <br />
            <br />
            To the fullest extent permitted under applicable law, Eines
            Healthcare Private Limited shall not be liable for any indirect, incidental,
            special, incidental, consequential or exemplary damages, including
            but not limited to, damages for loss of profits, goodwill, use, data
            or other intangible losses arising out of or in connection with the
            Website, its services or this Agreement.
            <br />
            <br />
            Eines Healthcare Private Limited makes no representations or warranties
            about the accuracy, reliability, completeness, correctness and/or
            timeliness of any content, information, software, text, graphics,
            link, statics or communications provided on or through the use of
            the Website or that the operation of the Website shall be error-free
            and/or uninterrupted. Consequently, Eines Healthcare Private Limited assumes
            no liability whatsoever for any monetary or other damage suffered by
            you on account of the delay, failure, interruption, or corruption of
            any data or other information transmitted in connection with the use
            of the Website and/or any interruption or errors in the operation of
            the Website.
            <br />
            <br />
            Further, in no event shall Eines Healthcare Private Limited be liable for
            any direct, indirect, punitive, incidental, special or consequential
            damages or for any damages whatsoever including, without limitation,
            damages for loss of use, data or profits, arising out of or in any
            way connected with the use or performance of Eines Healthcare PVT
            LTD sites/services for interrupted communications, delay, lost data
            or lost profits arising out of or in connection with this agreement.
            <br />
            <br />
          </p>

          <span className="contentTermsAndConditionsBottomHeading">
            Indemnity
          </span>

          <p>
            “Partner/Customer" agrees to defend, indemnify and hold harmless
            Eines Healthcare Private Limited, its employees, directors, officers,
            partners and their successors and assigns from and against any and
            all claims, liabilities, damages, losses, costs and expenses,
            including attorney's fees, caused by or arising out of claims based
            upon:
          </p>
          <ol>
            <li>
              “Partner/Customer's” actions or inactions, including but not
              limited to any warranties, representations or undertakings or in
              relation to the non-fulfilment of any of its obligations under
              this Agreement or arising out of the “Partner/Customer"'s
              infringement of any applicable laws.
            </li>
            <li>Payment of statutory dues and taxes; </li>
            <li>
              The claim of libel, defamation, violation of rights of privacy or
              publicity, loss of service by other subscribers;
            </li>
            <li>
              Your use or someone else's use of your access to the Website;
            </li>
            <li>
              A claim that any use of the Website by you or someone using your
              computer infringes any intellectual property right of any third
              party or any right of personality or publicity is libelous or
              defamatory, or otherwise results in injury or damage to any third
              party; and/ or{" "}
            </li>
            <li>
              Infringement of intellectual property rights or other rights of
              the Company.
            </li>
          </ol>

          <span className="contentTermsAndConditionsBottomHeading">
            Liability
          </span>

          <p>
            Any acts by the “Partner/Customer" in violation of the Terms and
            Conditions stated herein and/or such other policies issued by Eines
            Healthcare Private Limited from time to time which adversely affect any
            rights accruing to Eines Healthcare Private Limited shall give rise to a
            cause of action to Eines Healthcare Private Limited, its directors and/or
            its key managerial personnel to institute such proceedings under law
            as may be appropriate in order to seek redressal, by way of, inter
            alia, criminal sanctions, compensation and/or damages.
            <br />
            <br />
            Where the “Partner/Customer" is a company or such other legal
            person, it is expressly agreed that Eines Healthcare Private Limited may, in
            its discretion, institute appropriate proceedings against such
            person along with its Directors/Partners, and/or managerial
            personnel.
            <br />
            <br />
          </p>

          <span className="contentTermsAndConditionsBottomHeading">
            Updates
          </span>

          <p>
            We reserve the right to change or update the content herein at any
            time. Such changes shall be effective immediately upon posting on
            this Website and you shall keep yourself updated on such changes.
          </p>

          <span className="contentTermsAndConditionsBottomHeading">
            Severability
          </span>

          <p>
            If any part of this Agreement is determined to be invalid or
            unenforceable pursuant to applicable law including, but not limited
            to, the warranty disclaimers and liability limitations set forth
            above, then the invalid or unenforceable provision shall be deemed
            to be superseded by a valid, enforceable provision that most closely
            matches the intent of the original provision and the remainder of
            the Agreement shall continue in effect.
          </p>

          <span className="contentTermsAndConditionsBottomHeading">
            Entire Agreement
          </span>

          <p>
            Unless otherwise specified herein, this Agreement constitutes the
            entire agreement between you and the Company with respect to the
            Company's sites/services and it supersedes all prior or
            contemporaneous communications and proposals, whether electronic,
            oral or written, between you and the Company with respect to the
            Company's sites/services. The Company's failure to act with respect
            to a breach by you or others does not waive its right to act with
            respect to subsequent or similar breaches.
          </p>

          <span className="contentTermsAndConditionsBottomHeading">
            Governing Law and Dispute Resolution
          </span>

          <p>
            This Agreement shall be governed by the laws of India and any
            disputes arising here shall be subject to the sole and exclusive
            jurisdiction of the courts at Bangalore, Karnataka.
          </p>

          <span className="contentTermsAndConditionsBottomHeading">
            Assistance
          </span>

          <p className="bottomPara">
            For any concerns or questions about any aspect of these Terms &
            Conditions of use of the Website, please feel free to contact us at{" "}
            <br />
            <a
              href="mailto:contact@yuvahealth.in"
              style={{ color: "#0270e0", textDecoration: "none" }}
            >
              contact@yuvahealth.in
            </a>
            .
          </p>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default TermsAndConditions;
