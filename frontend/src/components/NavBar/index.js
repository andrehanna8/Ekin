import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import SignupFormModal from "../SignupFormModal";
import LoginFormPage from "../LoginFormPage";
import { logout } from "../../store/session";
import "./NavBar.css";

export default function NavBar() {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user)
    console.log("current user", currentUser)
    const [showForm, setShowForm] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    

    const hideLoginShowSignup = (e) => {
        e.preventDefault()
        console.log("clicked join us")
        setShowLoginForm(false)
        setShowForm(true)
    }

    const hideSignupShowLogin = (e) => {
        e.preventDefault()
        console.log("clicked sign in")
        setShowForm(false)
        setShowLoginForm(true)
    }
    
    const handleLogout = (e) => {
        e.preventDefault()
        console.log(currentUser ? currentUser : "no user")
        dispatch(logout())

        
    }

    return (
        <>
            <div className="nav-bar-flip">
            <div className="nav-bar">
                <button id="sign-up" onClick={hideLoginShowSignup}> <p> Join Us </p>  </button>
                <button id="sign-up" onClick={hideSignupShowLogin}> <p>Sign In</p> </button>
                <button id="sign-up" onClick={handleLogout}> <p>Log Out</p> </button>
                <button id="greeting"> {currentUser ? ` Hi, ${currentUser.firstName}`  : "not logged in"} </button>
            </div>
            {showForm ? ( <div className={showForm  ? "modal-show" : "modal-hide"}> <SignupFormModal setShowLoginForm={setShowLoginForm} setShowForm={setShowForm} /> </div>) : null } 

            {showLoginForm ? ( <div className={showLoginForm ? "modal-show" : "modal-hide"}> <LoginFormPage setShowForm={setShowForm}  setShowLoginForm={setShowLoginForm} /> </div>) : null }
            
            </div>
            
            
        </>
    )
}