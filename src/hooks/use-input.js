import  { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredTouched, setIsTouched] = useState(false);
  
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && enteredTouched;
  
  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
   
  };

  const inputBlurHandler = () => {
    //validation by blur
    setIsTouched(true);

  };
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
    
  }

  return {
    value: enteredValue,
    hasError,
    isValid: valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    reset
    
  };
};

export default useInput;
