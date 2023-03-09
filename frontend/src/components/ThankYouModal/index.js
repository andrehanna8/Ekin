import './ThankYouModal.css'
import { useState } from 'react'


export default function ThankYouModal({backToHome}) {
    const [showThankYouModal, setShowThankYouModal] = useState(false)


    const hideModal = (e) => {
        e.PreventDefault()
        setShowThankYouModal(false)
    }

    const keepModal = (e) => {
        e.PreventDefault()
        setShowThankYouModal(true)
    }


    backToHome = () => {
        window.location.href = "/"
    }
    


return (
    <div className="thank-you-modal" onClick={hideModal}>
        <div className="thank-you-modal-content" onClick={keepModal}>
            <h1>Thank you for checking out my Nike Clone!</h1>
            <h2>Feel free to check out my social links</h2>
                <div className="social-links">
                    <a href="https://github.com/andrehanna8" target="blank" ><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/andre-hanna/" target="blank"><i className="fab fa-linkedin"></i></a>
                </div>
            <button onClick={backToHome}>Back to Home</button>
        </div>
    </div>
)

}
