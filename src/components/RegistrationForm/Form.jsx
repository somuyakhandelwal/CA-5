import React, { useState, useEffect } from 'react';
import './Form.css';

function Form() {
  const initialValues = { username: '', email: '', password: '', repeatPassword: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (!values.username) {
      errors.username = 'Username is required!';
    } else if (values.username.length < 3 || values.username.length > 30) {
      errors.username = 'Username should be between 3 and 30 characters.';
    }

    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'Email is not valid!';
    }

    if (!values.password) {
      errors.password = 'Password is required!';
    } else if (values.password.length < 10) {
      errors.password = 'Password must be more than 10 characters!';
    } else if (!specialCharRegex.test(values.password)) {
      errors.password = 'Password must contain at least 1 special character!';
    }

    if (!values.repeatPassword) {
      errors.repeatPassword = 'Repeat password is required!';
    } else if (values.repeatPassword !== values.password) {
      errors.repeatPassword = 'Passwords do not match!';
    }

    return errors;
  };

  return (
    <>
      <div className="container">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="success-message">Signed up successfully!</div>
        ) : (
          <div></div>
        )}

        <form className="form" onSubmit={handleSubmit}>
          <h1>Registration Form</h1>

          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="username"
              placeholder="Eg: Somuya Khandelwal"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          {formErrors.username && <p className="error-message">{formErrors.username}</p>}

          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Eg: abc@gmail.com"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          {formErrors.email && <p className="error-message">{formErrors.email}</p>}

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="**** ****"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          {formErrors.password && <p className="error-message">{formErrors.password}</p>}

          <div className="field">
            <label>Repeat Password</label>
            <input
              type="password"
              name="repeatPassword"
              placeholder="**** **** "
              value={formValues.repeatPassword}
              onChange={handleChange}
            />
          </div>
          {formErrors.repeatPassword && <p className="error-message">{formErrors.repeatPassword}</p>}

          <button className="fluid ui button blue" type="submit" disabled={Object.keys(formErrors).length > 0}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
