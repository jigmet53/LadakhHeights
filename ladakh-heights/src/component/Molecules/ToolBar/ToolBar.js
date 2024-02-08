import React, { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import "./ToolBar.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff5722', // Replace with your desired color
    },
  },
});
const ToolBar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedValue, setSelectedValue] = useState('');
  const [checkOutLabel, setCheckOutLabel] = useState('Check-Out');
  const [checkInLabel, setCheckInLabel] = useState('Check-In');
  // Event handler to handle changes in the dropdown selection
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff5722', // Replace with your desired color
    },
  },
});

  const handleStartDateChange = (date) => {
    setStartDate(date);
    // setCheckInLabel(`Check-In: ${date.toLocaleDateString()}`);

  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    // setCheckOutLabel(`Check-Out: ${date.toLocaleDateString()}`);
  };
  return (
    <div>
      <div className="toolBarBody">
        <div className="gridItems">
          <div className="toolbarContents">
            <div className="toolBarIcon"></div>
       
              {" "}
              <div>
             <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Check-Out"
          // Any other DatePicker props you want to set
        />
      </LocalizationProvider>
    </ThemeProvider>

              
              
              </div>
           
          </div>
        </div>

        <div className="gridItems">
          <div className="toolbarContents">
            <div className="toolBarIcon"></div>
            <div>  
            <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Check-Out"
          // Any other DatePicker props you want to set
        />
      </LocalizationProvider>
    </ThemeProvider>
                </div>
          </div>
        </div>
        <div className="gridItems">
          <div className="toolbarContents">
            <div className="toolBarIcon"></div>
            <select id="myDropdown" value={selectedValue} onChange={handleSelectChange}>
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
            <select id="myDropdown" value={selectedValue} onChange={handleSelectChange}>
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
         <button className="toolBarBookButton">
          Book Now
         </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
