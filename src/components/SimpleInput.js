import React, { useRef, useState, useEffect } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  

  // we derive the validity from the states above
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
 // deriving the overall validity of the form
  let formIsValid = false;

  if(enteredNameIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
   
  };

  const nameInputBlurHandler = (event) => {
    //validation by blur
    setEnteredNameTouched(true);

    
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // validate the name
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    // re-set the input
    setEnteredName("");
    setEnteredNameTouched(false)

    // using ref
    //const enteredValue = nameInputRef.current.value;
    //console.log("ref", enteredValue);
    // reset input with ref => NOT IDEAL, DON'T MANIPULATE THE DOM DIRECTLY
    //nameInputRef.current.value = "";
  };

  
  const nameInputClasses = nameInputIsInvalid
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
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">Name must not be empty.</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
