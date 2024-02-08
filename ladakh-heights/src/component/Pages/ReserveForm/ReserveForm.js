import { Close } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import Typography from "@mui/material/Typography";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { useDispatch, useSelector } from "react-redux";
// import swal from "sweetalert";
// import Swal from "sweetalert2";
import emailjs from 'emailjs-com';
import { TextField, Typography } from "@mui/material";
import * as Yup from "yup";

import "./Modal.css";
import CircularProgress from "@mui/material/CircularProgress";

import { modalHeader } from "./ModalConstants";

const phoneRegExp = /^((\\+91-?)|0)?[0-9]{10}$/;

const loginSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required Field")
    .matches(/^(?![.])[A-Za-z .]+$/, "Insert only normal character"),
  number: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  password: Yup.string()
    .min(6, "Password should be more than 5 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});

function ReserveForm(props) {
  const [value, setValue] = useState();
  // const dispatch = useDispatch();
  const [lengthError, setLengthError] = useState(false);

  const handleClose = () => props.open(false);
  // const updateRes = useSelector((state) => state.addUser)
  const [flag, setFlag] = useState(true);
  // useEffect(()=>{
  //   if(updateRes?.data || updateRes?.error)
  //   {

  //     setFlag(true);
  //   }

  // },[updateRes])

  useEffect(() => {
    // Initialize EmailJS with your API key
    emailjs.init('jkI3sm_PsQ9UGar1J');
  }, []);

  const handleSubmit = (e) => {
    console.log("inside",e);
    const updatedFormData = {
      ...e, // Spread the existing properties of the event target
      value: value // Add a new field with its value
    };

   
      emailjs.send('service_ulw10xi', 'template_s987n48', updatedFormData)
      .then((result) => {
        console.log("hii");
      }, (error) => {
        console.log(error.text);
        console.log("error");
      });
   

   
  };


  const handleCheckEmail = (event) => {
    // dispatch(checkEmailAgentRequest(event.target.value));
  };

  const handleCheckNumber = (event) => {
    if (event.target.value.length === 10) {
      // dispatch(checkNumberRequest(event.target.value));
    }
  };


  function preventnumberinput(e) {
    var keycode = e.keycode ? e.keycode : e.which;
    if ((keycode > 47 && keycode < 58) || (keycode > 95 && keycode < 107)) {
      e.preventDefault();
    }
  }

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="mainModal"
      >
        <Box className="style1">
          <div className="modalHeader">
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={modalHeader}
            >
              Room Reservation
            </Typography>
            <button className="closeButtonModal" onClick={handleClose}>
              <Close />
            </button>
          </div>

          <Formik
            initialValues={{
              email: "",
              name: "",
              number: "",
              nights: "",
              roomType: "",
              adults:"",
            }}
            enableReinitialize={true}
            // validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            {
              <Form>
                <div className="inputFieldsContainer">
                  <div
                    className="dateTime"
                    style={{ width: "44.5%", marginBottom: "3vw" }}
                  >
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        slotProps={{ textField: { fullWidth: true } }}
                        renderInput={(props) => <TextField {...props} />}
                        label="Date"
                        minDate={new Date()}
                        value={value}
                        inputFormat="dd/MM/yyyy" // Format for date only
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        openTo="day" // To show the calendar for selecting dates
                      />
                    </LocalizationProvider>
                  </div>
                  <label>
                    <Field
                      type="number"
                      name="nights"
                      placeholder="No of Night"
                      className="inputField"
                      onBlur={(e) => {
                        handleCheckNumber(e);
                      }}
                    />
                    <ErrorMessage
                      className="errorMessageModalValidation"
                      name="nights"
                      component="div"
                    />
                  </label>
                  <label>
                    <Field
                      as="select"
                      name="roomType"
                      placeholder="Select City"
                      className="inputField1"
                    >
                      <option value="" disabled selected>
                        Room Type
                      </option>
                      <option>Superiour Room</option>
                      <option>Delux Room</option>
                      <option>Suit Room</option>
                      <option>Family Room</option>
                    </Field>
                    <ErrorMessage
                      className="errorMessageModalValidation"
                      name="roomType"
                      component="div"
                    />
                  </label>
                  <label>
                    <Field
                      as="select"
                      name="adults"
                      placeholder="Adults"
                      className="inputField1"
                    >
                      <option value="" disabled selected>
                        Adults
                      </option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </Field>
                    <ErrorMessage
                      className="errorMessageModalValidation"
                      name="adults"
                      component="div"
                    />
                  </label>

                  <label>
                    <Field
                      type=""
                      name="name"
                      placeholder="Name"
                      className="inputField"
                      onKeyDown={(event) => preventnumberinput(event)}
                    />
                    <ErrorMessage
                      className="errorMessageModalValidation"
                      name="name"
                      component="div"
                    />
                  </label>
                  <label>
                    <Field
                      type="number"
                      name="number"
                      placeholder="Phone No"
                      className="inputField"
                      // onBlur={(e) => {
                      //   handleCheckNumber(e);
                      // }}
                    />
                    <ErrorMessage
                      className="errorMessageModalValidation"
                      name="number"
                      component="div"
                    />
                  </label>
                  <label>
                    <Field
                      type="email"
                      name="email"
                      onBlur={(e) => {
                        handleCheckEmail(e);
                      }}
                      placeholder="Contact Email (optional)"
                      className="inputField"
                    />
                    <ErrorMessage
                      className="errorMessageModalValidation"
                      name="email"
                      component="div"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={!flag}
                    className="modalButton"
                  >
                    Make Reservation
                  </button>
                </div>
              </Form>
            }
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}

export default ReserveForm;
