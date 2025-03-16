import { useSelector } from "react-redux";
import "./Landing.css";

export default function Landing() {
  const currentUser = useSelector((state) => state.currentUserReducer.user);

  return (
    <div className="Landing">
      <div className="landing-header">
        <h1 className="welcome-message">
          {currentUser.name ? `Hello ${currentUser.name}!` : "Hello!"}
        </h1>
        <h2 className="welcome-message">Welcome to Saunders' superstore!</h2>
      </div>
    </div>
  );
}
