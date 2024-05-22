import { useState } from "react";
import "./form.css";

export default function Form() {
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    firstName: "",
    emailAddress: "",
  });
  const [valid, setValid] = useState(false);

  const handleFirstNameChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };

  const handleEmailChange = (event) => {
    setValues({ ...values, emailAddress: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.emailAddress) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">Thanks for emailing!</div>
        ) : null}
        <div className="row">
          <div className="form-field">
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={handleFirstNameChange}
              value={values.firstName}
              id="firstName"
              placeholder="First Name"
              name="firstName"
            />
            {submitted && !values.firstName ? (
              <span className="error">Please enter your first name</span>
            ) : null}
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleEmailChange}
              value={values.emailAddress}
              id="email"
              placeholder="Email"
              name="email"
            />
            {submitted && !values.emailAddress ? (
              <span className="error">Please enter your email</span>
            ) : null}
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea
            onChange={handleFirstNameChange}
            value={values.message}
            id="message"
            placeholder="Enter your message"
            name="message"
          />
          {submitted && !values.message ? (
            <span className="error">Please enter your message</span>
          ) : null}
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
