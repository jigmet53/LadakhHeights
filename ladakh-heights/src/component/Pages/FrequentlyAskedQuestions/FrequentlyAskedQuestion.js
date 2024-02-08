import React, { useEffect, useState } from "react";

import "./FrequentlyAskedQuestion.css";
import { useNavigate } from "react-router-dom";

import FrequentlyQuestion from "../../../assets/SubcriptionPageAssets/FrequentlyQuestion.png";
function FrequentlyAskedQuestion(props) {
  
  const [isMobile, setIsMobile] = useState(false);

  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (window.outerWidth <= 600) {
      setIsMobile(true);
    }
  }, [window.outerWidth]);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  function HandleNeedHelpBtn(e){
    navigate(`/contact-us`);
    window.scrollTo({ top: 0, behavior: "smooth" });

  }
 
  return (
    <div>
    {isMobile ? (
      <div>
      <div className="GetExpertGuidanceHeadingM">Frequently Asked Question</div>
      <div className="FrequentlyAskedQuestionContainer">
        <div className="FrequentlyAskedQuestionGrid">
          <div className="FrequentlyAskedQuestionDataContentM">
            {props.data.map((item, i) => (
              <div className="FrequentlyAskedQuestionGriditemM">
                <div
                  className="FrequentlyAskedQuestionitemtitleM"
                  onClick={() => toggle(i)}
                >
                  <div className="FrequentlyAskedQuestionQuestion">{item.question}</div>
                  <span>
                    {selected === i ? (
                      <div className="PlusSymbol">-</div>
                    ) : (
                      <div className="PlusSymbol">+</div>
                    )}
                  </span>
                </div>
                <div
                  className={
                    selected === i
                      ? "FrequentlyAskedQuestionitemcontentM show"
                      : "FrequentlyAskedQuestionitemcontentM"
                  }
                >
                  <div className="FrequentlyAskedQuestionANswerM">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
       
        </div>
        <div className="FrequentlyAskedQuestionButton">

        <button className="FrequentlyAskedQuestionBtn" onClick={HandleNeedHelpBtn}>Need Help ?</button>
        </div>
      </div>
    </div>
    ) : (
      <div>
      <div className="GetExpertGuidanceHeading">Frequently Asked Question</div>
      <div className="FrequentlyAskedQuestionContainer">
        <div className="FrequentlyAskedQuestionGrid">
          <div className="FrequentlyAskedQuestionDataContent">
            {props.data.map((item, i) => (
              <div className="FrequentlyAskedQuestionGriditem">
                <div
                  className="FrequentlyAskedQuestionitemtitle"
                  onClick={() => toggle(i)}
                >
                  <div className="FrequentlyAskedQuestionQuestionW">{item.question}</div>
                  <span>
                    {selected === i ? (
                      <div className="PlusSymbol">-</div>
                    ) : (
                      <div className="PlusSymbol">+</div>
                    )}
                  </span>
                </div>
                <div
                  className={
                    selected === i
                      ? "FrequentlyAskedQuestionitemcontent show"
                      : "FrequentlyAskedQuestionitemcontent"
                  }
                >
                  <div className="FrequentlyAskedQuestionAnswerW">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <img
              className="FrequentlyQuestionIMage"
              src={FrequentlyQuestion}
            ></img>
          </div>
        </div>
        {/* <div className="FrequentlyAskedQuestionButton">

        <button className="FrequentlyAskedQuestionBtn" onClick={HandleNeedHelpBtn}>Need Help ?</button>
        </div> */}
      </div>
    </div>
    )}
  </div>


    
 
  );
}

export default FrequentlyAskedQuestion;
