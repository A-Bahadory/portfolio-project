import "./form.css";
import { useState } from "react";
export default function Form() {
  const [submitted, setSubmitted] = useState(false);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
  });
  const [valid, setValid] = useState(false);

  const handleFirstNameChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };
  const handleLastNameChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };

  const handleEmailChange = (event) => {
    setValues({ ...values, emailAddress: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.emailAddress) {
      setValid(true);
    }
    setSubmitted(true);
  };
  return (
    <>
      <div className="form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          {submitted && valid ? (
            <div className="success-message">thanks for emailing !</div>
          ) : null}
          <div className="firstName-Emial-wrapper">
            <div className="name-wrapper">
              <input
                onChange={handleFirstNameChange}
                value={values.firstName}
                className="form-filed"
                placeholder="first Name"
                name="first name"
              />
              {submitted && !values.firstName ? (
                <span className="tax">please enter your first Name</span>
              ) : (
                false
              )}
            </div>

            <div className="email-wrapper">
              <input
                onChange={handleEmailChange}
                value={values.emailAddress}
                className="form-filed"
                placeholder="email"
                name="email"
              />
              {submitted && !values.emailAddress ? (
                <span className="tax">please enter your email</span>
              ) : (
                false
              )}
            </div>
          </div>

          <div className="message-wrapper">
            <input
              onChange={handleLastNameChange}
              value={values.message}
              className="message-field"
              placeholder="Enter your message"
              name="message"
            />
            {submitted && !values.message ? (
              <span className="tax">Please enter your message</span>
            ) : null}
          </div>

          <button className="form-filed" type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  );
}
