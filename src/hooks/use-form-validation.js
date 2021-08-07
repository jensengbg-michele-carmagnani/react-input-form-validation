import  { useState } from "react";

const useFormValidation = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredTouched, setIsTouched] = useState(false);
  
  
  const valueChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredValue(event.target.value);
    
  };
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && enteredTouched;
  

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

export default useFormValidation;