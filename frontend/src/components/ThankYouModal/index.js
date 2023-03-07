import './ThankYouModal.css'

export default function ThankYouModal({backToHome}) {

    backToHome = () => {
        window.location.href = "/"
    }
    
return (
    <div className="thank-you-modal">
        <div className="thank-you-modal-content">
            <h1>Thank you for your purchase!</h1>
            <button onClick={backToHome}>Back to Home</button>
        </div>
    </div>
)

}
