import { Link } from "react-router-dom";
import styles from "./index.module.css";

const NotFound404 = () => {
  return (
    <div>
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <div className={styles.listLinkStyle}>
        <Link to="/">Home</Link>
        <Link to="/onboarding/signin">Sign In</Link>
        <Link to="/onboarding/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default NotFound404;
