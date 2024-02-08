// Navbar.js
import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
// import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import ModalClose from "@mui/joy/ModalClose";
import Menu from "@mui/icons-material/Menu";
import Search from "@mui/icons-material/Search";
// import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../assets/TL.png";
import ReserveForm from "../../Pages/ReserveForm/ReserveForm";
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [add, setAdd] = React.useState(false);
  const handleAdd = (event) => {
    setAdd(true);
  };
  return (
    <div className="navbarBody">
      {add && <ReserveForm open={setAdd} />}

      <React.Fragment>
        <div>
          <img
            style={{ height: "auto", width: "10vw", marginLeft: "2vw" }}
            src={logo}
            alt={"error"}
          ></img>
        </div>
      </React.Fragment>

      <div className="allItemsNavbar">
        <div
          style={{
            height: "10vw",
            alignItems: "center",
            display: "flex",
            marginRight: "3vw",
          }}
        >
          <React.Fragment>
            <IconButton onClick={handleAdd} style={{marginRight:"3vw"}}>
              <Link className="linkCss" >
                Reserve Now
              </Link>
            </IconButton>
            <IconButton
              variant="outlined"
              color="neutral"
              onClick={() => setOpen(true)}
            >
              <Menu />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  ml: "auto",
                  mt: 1,
                  mr: 2,
                }}
              >
                <Typography
                  component="label"
                  htmlFor="close-icon"
                  fontSize="sm"
                  fontWeight="lg"
                  sx={{ cursor: "pointer" }}
                >
                  Close
                </Typography>
                <ModalClose id="close-icon" sx={{ position: "initial" }} />
              </Box>
              <ListItemButton
                sx={{
                  borderBottom: "2px solid",
                  padding: "2vw",
                  justifyContent: "center",
                  display: "flex",
                  // borderColor: "neutral.outlinedBorder",
                }}
              >
                <h1>LADAKH</h1>

                <br />
                <h>HEIGHTS</h>
              </ListItemButton>

              <List
                size="lg"
                component="nav"
                sx={{
                  flex: "none",
                  fontSize: "xl",
                  "& > div": { justifyContent: "center" },
                }}
              >
                <hr />
                <ListItemButton
                  onClick={() => setOpen(false)}
                  sx={{ fontWeight: "lg" }}
                >
                  {/* <div className="navbarItems"> */}
                  <Link className="linkCss" to="/">
                    HOME
                  </Link>
                  {/* </div> */}
                </ListItemButton>
                <ListItemButton onClick={() => setOpen(false)}>
                  {" "}
                  <Link className="linkCss" to="AboutUs">
                    ABOUT US
                  </Link>
                </ListItemButton>
                <ListItemButton onClick={() => setOpen(false)}>
                  {" "}
                  <Link className="linkCss" to="Room">
                    ROOMS
                  </Link>
                </ListItemButton>
                <ListItemButton onClick={() => setOpen(false)}>
                  {" "}
                  <Link className="linkCss" to="/Gallery">
                    GALLERY
                  </Link>
                </ListItemButton>
                <ListItemButton onClick={() => setOpen(false)}>
                  {" "}
                  <Link className="linkCss" to="/Tariff">
                    TARIFF
                  </Link>{" "}
                </ListItemButton>
                <ListItemButton onClick={() => setOpen(false)}>
                  {" "}
                  <Link className="linkCss" to="/ContactUs">
                    CONTACT-US
                  </Link>{" "}
                </ListItemButton>
              </List>
            </Drawer>
          </React.Fragment>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
