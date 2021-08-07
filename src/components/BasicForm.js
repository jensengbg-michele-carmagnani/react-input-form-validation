import useFormValidation from "../hooks/use-form-validation";

const BasicForm = () => {
  

  const validateName = (value) =>  value.trim() !== "";

  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: fistNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useFormValidation(validateName);

  const validateLastName = (value) => 
    value = value.trim() !== "" ;

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useFormValidation(validateLastName);

  const validateEmail = (value) => 
    value = value.includes("@");
  
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useFormValidation(validateEmail);

  

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;

  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!firstNameIsValid || !lastNameIsValid || !emailIsValid ) {
      return;
    }

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const inputFirstNameClasses = fistNameInputHasError
    ? "form-control invalid "
    : " form-control";
  const inputLastNameClasses = lastNameInputHasError
    ? "form-control invalid "
    : " form-control";
  const inputEmailClasses = emailInputHasError
    ? "form-control invalid "
    : " form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={inputFirstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            type="text"
            id="name"
            value={enteredFirstName}
          />
          {fistNameInputHasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
        <div className={inputLastNameClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            type="text"
            id="lastName"
            value={enteredLastName}
          />
          {lastNameInputHasError && (
            <p className="error-text">Last name must not be empty.</p>
          )}
        </div>
      <div className={inputEmailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          type="text"
          id="name"
          value={enteredEmail}
        />
        {emailInputHasError && <p className="error-text">Email not valide .</p>}
      </div>
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
