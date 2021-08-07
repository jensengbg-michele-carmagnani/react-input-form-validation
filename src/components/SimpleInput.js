import React, { useRef } from "react";

import useInput from "../hooks/use-input";

const SimpleInput = () => {
  const nameInputRef = useRef();

  const validateName = (value) => value.trim() !== "";
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(validateName);

  const validateEmail = (value) => value.includes("@");
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(validateEmail);

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // validate the name

    if (!enteredNameIsValid || !enteredEmail) {
      return;
    }

    resetNameInput();
    resetEmailInput();

    // using ref
    //const enteredValue = nameInputRef.current.value;
    //console.log("ref", enteredValue);
    // reset input with ref => NOT IDEAL, DON'T MANIPULATE THE DOM DIRECTLY
    //nameInputRef.current.value = "";
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid "
    : " form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid "
    : " form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputHasError && (
        <p className="error-text">Name must not be empty.</p>
      )}
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          type="text"
          id="name"
          value={enteredEmail}
        />
        {emailInputHasError && <p className="error-text">Email not valide .</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
