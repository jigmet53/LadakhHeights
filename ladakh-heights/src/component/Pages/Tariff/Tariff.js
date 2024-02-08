import React, { useEffect, useState } from "react";
import AboutUsHeading from "../../../assets/4.jpeg";
import aboutUsimage12 from "../../../assets/AboutUs/aboutUsimage12.png";
import aboutUsImage44 from "../../../assets/AboutUs/aboutUsImage44.png";
import aboutusMobileBanner from "../../../assets/AboutUs/aboutusMobileBanner.png";
import bengaluru from "../../../assets/AboutUs/Bangalore.png";
import delhi from "../../../assets/AboutUs/delhi.png";
import NAI1 from "../../../assets/AboutUs/NAI1.png";
import NAI2 from "../../../assets/AboutUs/NAI2.png";
import h2 from "../../../assets/Lightbox-16.jpg";
import h1 from "../../../assets/Lightbox-12.jpg";
import Footer from "../../Organisms/Footer/Footer";
import { Box } from "@mui/system";
import { InputAdornment, Pagination, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { DataGrid } from "@mui/x-data-grid";
// import FooterMobile from "../../Organisms/Footer/FooterMobile";
import "./Tariff.css";
import Title from "../../Atoms/Title/Title";

function AboutUs() {
  const [isMobile, setIsMobile] = useState(false);

  const data = [
    {
      id: 1,
      roomCategory: "Superiour Room",
      cp: "Rs. 4000/-",
      map: "Rs. 4500/-",
      ap: "Rs. 5000/-",
    },
    {
      id: 2,
      roomCategory: "Delux Room",
      cp: "Rs. 5000/-",
      map: "Rs. 5500/-",
      ap: "Rs. 6000/-",
    },
    {
      id: 3,
      roomCategory: "Suit Room",
      cp: "Rs. 9000/-",
      map: "Rs. 9500/-",
      ap: "Rs. 10000/-",
    },
    {
      id: 4,
      roomCategory: "Family Suit Room",
      cp: "Rs. 12000/-",
      map: "Rs. 12500/-",
      ap: "Rs. 13000/-",
    },
    { id: 5, roomCategory: "Extra Adult Rates", cp: "40% Extra" },

    { id: 6, roomCategory: "Extra Child Rates", cp: "20% Extra" },
  ];

  const columns = [
    {
      field: "roomCategory",
      headerClassName: "super-app-theme--header",
      headerName: " Room Category",
      flex: 2,
      disableColumnMenu: true,
      sortable: false,
      fontFamily: "Nunito",
    },

    {
      field: "cp",
      headerClassName: "super-app-theme--header",
      headerName: "CP",
      flex: 3,
      alignItems: "Right",
      disableColumnMenu: true,
      sortable: false,
      fontFamily: "Nunito",
    },

    {
      field: "map",
      headerClassName: "super-app-theme--header",
      headerName: "MAP",
      flex: 3,
      alignItems: "Right",
      disableColumnMenu: true,
      sortable: false,
      fontFamily: "Nunito",
    },
    {
      field: "ap",
      headerClassName: "super-app-theme--header",
      headerName: "AP",
      flex: 3,
      alignItems: "Right",
      disableColumnMenu: true,
      sortable: false,
      fontFamily: "Nunito",
    },
  ];
  useEffect(() => {
    if (window.outerWidth <= 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [window.outerWidth]);
  return (
    <>
      <Title title="YUVA | A Glimpse into what we are all about." />

      {isMobile ? (
        <div className="AboutUsBodyMobile">
          <div className="aboutUsMobileBannerMobile">
            <img src={aboutusMobileBanner} className="aboutUsImageMobile"></img>
            <p className="AboutUsHeadingMobile">About Us</p>
          </div>
          {/* <div className="videoSectionMobile"> */}

          {/* <FooterMobile /> */}
        </div>
      ) : (
        <>
          <div className="AboutUsBody">
            <div
              style={{
                backgroundImage: `url(${AboutUsHeading})`,
                backgroundRepeat: "no-repeat",
                // backgroundSize: "100%",
                backgroundSize: "cover", // Ensures the image covers the entire container
                backgroundPosition: "center", // Centers the image within the container
                width: "100%", // Set the desired width for your container
                height: "60vh", // Set the desired height for your container
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="AboutUsHeadingImage"
            >
              <div className="AboutUsHeading">
                {/* <p>LUXURY HOTEL  EXPERIENCE</p> */}
                <h2 style={{ fontSize: "3vw" }}>TARIFF</h2>
              </div>
            </div>

            <div
              style={{
                paddingLeft: "14vw",
                paddingRight: "14vw",
                paddingBottom: "4vw",
              }}
            >
              <Box
                sx={{
                  height: 600,
                  display: "inline-block",
                  width: "100%",
                  marginTop: "2%",
                }}
              >
                {data && (
                  <DataGrid
                    sx={{
                      color: "#1D2334",
                      "& .super-app-theme--header": {
                        backgroundColor: "#52608E",
                        color: "#F2EFEA",
                        fontFamily: "Nunito",
                        fontWeight: 600,
                        "& > .MuiDataGrid-columnSeparator": {
                          visibility: "hidden",
                        },
                      },
                      fontFamily: "Nunito",
                      "&:hover:not(.Mui-disabled)": {
                        cursor: "pointer",
                      },
                      ".MuiTablePagination-toolbar": {
                        alignItems: "baseline",
                        marginTop: "5%",
                      },
                    }}
                    rows={data}
                    columns={columns}
                    components={{
                      Footer: "none",
                    }}
                  />
                )}
              </Box>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default AboutUs;
