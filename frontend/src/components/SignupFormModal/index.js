import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import LoginFormPage from "../LoginFormPage";
// import "./SignupForm.css";
import "../LoginFormPage/MasterModal.css";

function SignupFormModal({ setShowForm, setShowLoginForm }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !username || !password || !firstName || !lastName) {
      setErrors(["Please fill out all fields"]);
      return;
    }

    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, firstName, lastName, password }))
        .catch(async (res) => {
          let data;
          try {
            // .clone() essentially allows you to read the response body twice
            data = await res.clone().json();
          } catch {
            data = await res.text(); // Will hit this case if the server is down
          }
          if (data?.errors) setErrors(data.errors);
          else if (data) setErrors([data]);
          else setErrors([res.statusText]);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  const hideModal = (e) => {
    e.preventDefault()
    setShowForm(false)
  }

  const keepModal = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const showLoginForm = (e) => {
    e.preventDefault()
    setShowForm(false)
    setShowLoginForm(true)
    return (
      <> 
        <LoginFormPage />
      </>
    )
  }

  return (
      <div className="modal-wrapper" onClick={hideModal}>
      <form className="form-control" onSubmit={handleSubmit} onClick={keepModal}>
        <button className="close-button" onClick={hideModal}> <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png"/> </button>
        <h2 id="join-nike-now-header"> BECOME A NIKE MEMBER</h2>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <label className="input-labels">
          <input
            placeholder="Email"
            className="input-field"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="input-labels">
    
          <input
            placeholder="Username"
            className="input-field"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>

         <label className="input-labels">
    
          <input
            placeholder="First Name"
            className="input-field"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label className="input-labels">
    
          <input
            placeholder="Last Name"
            className="input-field"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>

        <label className="input-labels">
          <input
            placeholder="Password"
            className="input-field"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label className="input-labels">
          
          <input
            placeholder="Confirm Password"
            className="input-field"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button className="signup-button" type="submit" onClick={handleSubmit}>JOIN US</button>
        <br></br>
        {/* <p>By joining you agree to Nike's <a href="https://www.nike.com/help/privacy-policy">Privacy Policy</a> and <a href="https://www.nike.com/help/terms-of-use">Terms of Use</a>.</p> */}
        <br></br>
        <p>Already a member? <button id="modal-login" onClick={showLoginForm} >Login</button></p>
      </form>
    </div>
  );
}

export default SignupFormModal;
