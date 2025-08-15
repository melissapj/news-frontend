import { useNavigate } from "react-router-dom";

function ErrorPage({ message }) {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/"); 
  }

  return (
    <div className = "center-container">
    <div className="error-page">
      <h2>Oops!</h2>
      <p>{message || "Something went wrong. Please try again later."}</p>
      <button onClick={goHome}>⬅ Back to Home</button>
    </div>
    </div>
  );
}

export default ErrorPage;