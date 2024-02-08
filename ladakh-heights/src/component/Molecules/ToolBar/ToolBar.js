import React, { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import "./ToolBar.css";
import dayjs from "dayjs";
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const ToolBar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedValue, setSelectedValue] = useState("");
  const [checkOutLabel, setCheckOutLabel] = useState("Check-Out");
  const [checkInLabel, setCheckInLabel] = useState("Check-In");
  // Event handler to handle changes in the dropdown selection
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const today = dayjs();
  const tomorrow = dayjs().add(1, "day");
  const todayEndOfTheDay = today.endOf("day");

  const handleStartDateChange = (date) => {
    setStartDate(date);
    // setCheckInLabel(`Check-In: ${date.toLocaleDateString()}`);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    // setCheckOutLabel(`Check-Out: ${date.toLocaleDateString()}`);
  };
  return (
    <div style={{marginTop:"22vw"}}>
      <div className="toolBarBody">
        <div className="gridItems">
          <div className="toolbarContents">
            <div className="toolBarIcon"></div>{" "}
            <div>
              <DatePicker
                selected={startDate}
                minDate={new Date()}
                className="custom-datepicker"
                style={{ color: "blue", background: "lightgray" }}
                onChange={handleStartDateChange}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Check-In"
              />
            </div>
          </div>
        </div>

        <div className="gridItems">
          <div className="toolbarContents">
            <div className="toolBarIcon"></div>
            <div>
              <DatePicker
                selected={endDate}
                className="custom-datepicker"
                onChange={handleEndDateChange}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                placeholderText="Check-Out"
                minDate={startDate}
              />
            </div>
          </div>
        </div>
        <div className="gridItems">
          <div className="toolbarContents">
            <div className="toolBarIcon"></div>
            <select
              id="myDropdown"
              value={selectedValue}
              onChange={handleSelectChange}
            >
              <option value="">Adults</option>
              <option value="option1">1</option>
              <option value="option2">2</option>
              <option value="option3">3</option>
              <option value="option2">4</option>
              <option value="option3">5</option>
            </select>
          </div>
        </div>
        <div className="gridItems">
          <div className="toolbarContents">
            <div className="toolBarIcon"></div>
            <select
              id="myDropdown"
              value={selectedValue}
              onChange={handleSelectChange}
            >
              <option value="">Children</option>
              <option value="option1">1</option>
              <option value="option2">2</option>
              <option value="option3">3</option>
              <option value="option2">4</option>
            </select>
          </div>
        </div>
        <div className="gridItems">
          <div className="toolbarContents">
            <div className="toolBarIcon"></div>
            <button className="toolBarBookButton">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
