import React, { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredLEmailTouched] = useState(false);
  

  // we derive the validity from the states above
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const emailIsValid = enteredEmail.includes("@");
  const inputEmailIsInvalid = !emailIsValid && enteredEmailTouched;
 // deriving the overall validity of the form
  let formIsValid = false;

  if(enteredNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
   
  };

  const nameInputBlurHandler = (event) => {
    //validation by blur
    setEnteredNameTouched(true);

  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value)
  }
  const emailInputBlurHandler =()=>{
    setEnteredLEmailTouched(true)
  }


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
  const emailInputClasses = inputEmailIsInvalid
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
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          onBlur={emailInputBlurHandler}
          onChange={emailInputChangeHandler}
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

export default SimpleInput;
