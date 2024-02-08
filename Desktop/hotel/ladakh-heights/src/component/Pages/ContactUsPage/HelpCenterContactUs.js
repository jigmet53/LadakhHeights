import React, { useEffect, useState } from "react";

import "./HelpCenterContactUs.css";
import mailpic from "../../../assets/ContactUs/contactPagePic2.png";
import callpic from "../../../assets/ContactUs/contactPagePic1.png";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Close } from "@mui/icons-material";

function HelpCenter(props) {
  const [open, setOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);


  const handleClose = () => {
    setOpen(false)
  };
  useEffect(() => {
    if (window.outerWidth <= 600) {
      setIsMobile(true);
    }
  }, [window.outerWidth]);


  return (
    <div>
{isMobile ? (
    

    <div className="outplace">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="mainModal"
      >
        <Box className="HelpCenterMain">
          <div className="HelpCenterBoxMobile">
            <div className="HelpCenterBoxOuter">
              <div className="ghj">
                <div className="HelpCenterTitleMobile">HELP CENTER</div>
                <div className="cross" onClick={handleClose}>
                  {" "}
                  <Close />
                </div>
              </div>
              <div className="HelpCenterSubHeadingMobile">
                We are just a call away. Give us a missed call or send us an
                email and we will be in touch with you.
              </div>
            </div>
            <div className="HelpPropsBox1Mobile">
              <div className="helpBoxMobile">
                <img className="HelpCareerImage2Mobile" src={callpic}></img>
                <div className="MissedCallMobile">Give us a Missed Call</div>
              </div>
              <div className="helpBox">
                <img className="HelpCareerImage2Mobile" src={mailpic}></img>
                <div className="MissedCallMobile">Write To Us</div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </Box>
      </Modal>
    </div>
    ) : (
      <div className="outplace">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="mainModal"
      >
        <Box className="HelpCenterMain">
          <div className="HelpCenterBox">
            <div className="HelpCenterBoxOuter">
              <div className="ghj">
                <div className="HelpCenterTitle">HELP CENTER</div>
                <div className="cross" onClick={handleClose}>
                  {" "}
                  <Close />
                </div>
              </div>
              <div className="HelpCenterSubHeading">
                We are just a call away. Give us a missed call or send us an
                email and we will be in touch with you.
              </div>
            </div>
            <div className="HelpPropsBox1">
              <div className="helpBox">
                <img className="HelpCareerImage2" src={callpic}></img>
                <div className="MissedCall">Give us a Missed Call</div>
              </div>
              <div className="helpBox">
                <img className="HelpCareerImage2" src={mailpic}></img>
                <div className="MissedCall">Write To Us</div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </Box>
      </Modal>
    </div>
    )}
    </div>

  );
}

export default HelpCenter;
