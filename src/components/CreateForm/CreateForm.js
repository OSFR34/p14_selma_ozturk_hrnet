import React, { useEffect, useState } from "react";
import "./createform.css";
import states from "../../states.json";
import Modal from "react-modaler-ext";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function CreateForm() {
  const [modalShowState, setModalState] = useState(false);
  const [firstnameError, setFirstNameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [birthdateError, setBirthdateError] = useState(false);
  const [startError, setStartError] = useState(false);
  const [streetError, setStreetError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [zipError, setZipError] = useState(false);
  const [stateError, setStateError] = useState(false);
  const [depError, setDepError] = useState(false);

  const toggleModal = () => {
    setModalState(!modalShowState);
  };

  const submitForm = (e) => {
    //formu submit etmeeden önce kontrollerin yapılması için formu bekletir.
    e.preventDefault();
    let vFirstName = document.querySelector("#firstname-input").value;
    let vLastname = document.querySelector("#lastname-input").value;
    let vbirthDay = document.querySelector("#birthdate-input").value;
    let vStartDate = document.querySelector("#startdate-input").value;
    let vStreet = document.querySelector("#street-input").value;
    let vCity = document.querySelector("#city-input").value;
    let vZipCode = document.querySelector("#zip-input").value;
    let vState = document.querySelector("#state-selectbox").value;
    let vDepartment = document.querySelector("#department-selectbox").value;

    if (vFirstName === "") {
      setFirstNameError(true);
      document.querySelector("#firstname-input").style.border = "1px solid red";
    } else {
      setFirstNameError(false);
      document.querySelector("#firstname-input").style.border =
        "1px solid rgba(0,0,0,0.2)";
    }
    if (vLastname === "") {
      setLastnameError(true);
      document.querySelector("#lastname-input").style.border = "1px solid red";
    } else {
      setLastnameError(false);
      document.querySelector("#lastname-input").style.border =
        "1px solid rgba(0,0,0,0.2)";
    }
    if (vbirthDay === "") {
      setBirthdateError(true);
      document.querySelector("#birthdate-input").style.border = "1px solid red";
    } else {
      setBirthdateError(false);
      document.querySelector("#birthdate-input").style.border =
        "1px solid rgba(0,0,0,0.2)";
    }
    if (vStartDate === "") {
      setStartError(true);
      document.querySelector("#startdate-input").style.border = "1px solid red";
    } else {
      setStartError(false);
      document.querySelector("#startdate-input").style.border =
        "1px solid rgba(0,0,0,0.2)";
    }
    if (vStreet === "") {
      setStreetError(true);
      document.querySelector("#street-input").style.border = "1px solid red";
    } else {
      setStreetError(false);
      document.querySelector("#street-input").style.border =
        "1px solid rgba(0,0,0,0.2)";
    }
    if (vCity === "") {
      setCityError(true);
      document.querySelector("#city-input").style.border = "1px solid red";
    } else {
      setCityError(false);
      document.querySelector("#city-input").style.border =
        "1px solid rgba(0,0,0,0.2)";
    }
    if (vZipCode === "") {
      setZipError(true);
      document.querySelector("#zip-input").style.border = "1px solid red";
    } else {
      setZipError(false);
      document.querySelector("#zip-input").style.border =
        "1px solid rgba(0,0,0,0.2)";
    }
    if (vState === "Select your state...") {
      setStateError(true);
      document.querySelector("#state-selectbox").style.border = "1px solid red";
    } else {
      setStateError(false);
      document.querySelector("#state-selectbox").style.border =
        "1px solid rgba(0,0,0,0.2)";
    }
    if (vDepartment === "Select your department...") {
      setDepError(true);
      document.querySelector("#department-selectbox").style.border =
        "1px solid red";
    } else {
      setDepError(false);
      document.querySelector("#department-selectbox").style.border =
        "1px solid rgba(0,0,0,0.2)";
    }
    if (
      vDepartment !== "Select your department..." &&
      vState !== "Select your state..." &&
      vZipCode !== "" &&
      vCity !== "" &&
      vStreet !== "" &&
      vStartDate !== "" &&
      vbirthDay !== "" &&
      vLastname !== "" &&
      vFirstName !== ""
    ) {
      //submit işlemi başarılı
      setModalState(true);
    }
  };

  useEffect(() => {
    if (modalShowState) {
      document
        .querySelector(".feather-x-circle")
        .addEventListener("click", function () {
          setModalState(false);
        });
    }
  });

  return (
    <div className="create-form-parent">
      <form className="create-form" onSubmit={(e) => submitForm(e)}>
        <h2 className="create-form-title">Create Employee</h2>
        <div className="identifications">
          <h3>Identification</h3>
          <div className="form-group-first">
            <div>
              <label className="firstname-label">
                First Name {firstnameError ? <ErrorMessage /> : null}
              </label>
              <input type="text" id="firstname-input" />
            </div>
            <div>
              <label className="lastname-label">
                Last Name {lastnameError ? <ErrorMessage /> : null}{" "}
              </label>
              <input type="text" id="lastname-input" />
            </div>
          </div>
          <div className="form-group-first">
            <div>
              <label className="birthdate-label">Date of Birth </label>
              {birthdateError ? <ErrorMessage /> : null}
              <input type="date" id="birthdate-input" />
            </div>
            <div>
              <label className="startdate-label">
                Start Date
                {startError ? <ErrorMessage /> : null}
              </label>
              <input type="date" id="startdate-input" />
            </div>
          </div>
        </div>
        <div className="address">
          <h3>Information</h3>
          <div className="form-group-first">
            <div>
              <label className="street-label">
                Street
                {streetError ? <ErrorMessage /> : null}
              </label>
              <input type="text" id="street-input" />
            </div>
            <div>
              <label className="city-label">
                City
                {cityError ? <ErrorMessage /> : null}
              </label>
              <input type="text" id="city-input" />
            </div>
          </div>
          <div className="form-group-first">
            <div>
              <label className="state-label">
                State
                {stateError ? <ErrorMessage /> : null}
              </label>
              <select id="state-selectbox">
                <option>Select your state...</option>
                {states
                  ? states.map((state, index) => {
                      return (
                        <option key={index} value={state}>
                          {state}
                        </option>
                      );
                    })
                  : null}
              </select>
            </div>
            <div>
              <label className="zip-label">
                Zip Code
                {zipError ? <ErrorMessage /> : null}
              </label>
              <input type="number" id="zip-input" />
            </div>
          </div>
          <div className="form-group-second">
            <div>
              <label className="department-label">
                Department
                {depError ? <ErrorMessage /> : null}
              </label>
              <select id="department-selectbox">
                <option>Select your department...</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="Engineering">Engineering</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Legal">Legal</option>
              </select>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <button type="submit" className="save-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-save"
              >
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                <polyline points="17 21 17 13 7 13 7 21"></polyline>
                <polyline points="7 3 7 8 15 8"></polyline>
              </svg>
              <span>Save</span>
            </button>
          </div>
          {modalShowState ? (
            <Modal
              title="Successfull"
              content="Employee has been added successfully!"
            />
          ) : null}
        </div>
      </form>
    </div>
  );
}
