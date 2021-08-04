import React, { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && enteredTouched;

  const ValueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
   
  };

  const inputBlurHandler = (event) => {
    //validation by blur
    setIsTouched(true);

  };
  return {
    value: enteredValue,
    hasError,
    ValueChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
