import "./form.css";
import { useState } from "react";
export default function Form() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
  });
  return (
    <>
      <div className="form-container">
        <form className="register-form">
          <input
            className="form-filed"
            placeholder="first Name"
            name="first name"
          />
          <input
            className="form-filed"
            placeholder="last Name"
            name="last name"
          />
          <input className="form-filed" placeholder="email" name="email" />
          <button className="form-filed" type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
