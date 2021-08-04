import { useState } from "react";

const BasicForm = (props) => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredFirstNameTouched, setEnteredFirstNameTouched] = useState(false);
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredLastNameTouched, setEnteredLastNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredLEmailTouched] = useState(false);

  // DERIVING  validation form the state
  //FIRST NAME
  const firstNameIsValid = enteredFirstName.trim() !== "";
  const inputFirstNameIsInvalid = !firstNameIsValid && enteredFirstNameTouched;
  // LAST NAME
  const lastNameIsValid = enteredLastName.trim() !== "";
  const inputLastNameIsInvalid = !lastNameIsValid && enteredLastNameTouched;
  // EMAIL
  const emailIsValid = enteredEmail.includes("@");
  const inputEmailIsInvalid = !emailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };

  const inputFirstNameBlurHandler = (event) => {
    setEnteredFirstNameTouched(true);
  };

  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const inputLastNameBlurHandler = () => {
    setEnteredLastNameTouched(true);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const emailBlurHandler = (event) => {
    setEnteredLEmailTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!inputFirstNameIsInvalid && !inputLastNameIsInvalid && !inputEmailIsInvalid) {
      return;
    }
    setEnteredFirstName("");
    setEnteredFirstNameTouched(false);
    setEnteredLastName("");
    setEnteredLastNameTouched(false);
    setEnteredEmail("")
    setEnteredLastNameTouched(false)
  };

  const inputFirstNameClasses = inputFirstNameIsInvalid
    ? "form-control invalid "
    : " form-control";
  const inputLastNameClasses = inputLastNameIsInvalid
    ? "form-control invalid "
    : " form-control";
  const inputEmailClasses = inputEmailIsInvalid
    ? "form-control invalid "
    : " form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={inputFirstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            onChange={firstNameChangeHandler}
            onBlur={inputFirstNameBlurHandler}
            type="text"
            id="name"
          />
          {inputFirstNameIsInvalid && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
        <div className={inputLastNameClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={lastNameChangeHandler}
            onBlur={inputLastNameBlurHandler}
          />
          {inputLastNameIsInvalid && (
            <p className="error-text">Last name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={inputEmailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          type="text"
          id="name"
          />
          { 
            inputEmailIsInvalid && ( <p className="error-text">Email not valide .</p>
          )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
