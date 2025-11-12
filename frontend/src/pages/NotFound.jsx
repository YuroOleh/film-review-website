import styles from "../styles/pages/NotFound.module.css";
import Button from "../components/shared/Button";
import { Link } from "react-router-dom";

export default function NotFound() {
    return(
        <>
         <div className={styles.container}>
            <p className={`${styles.p1} gradient-text`}>404</p>
            <p className={styles.p2}>OPPS! PAGE IS NOT FOUND</p>
            <p className={styles.p3}>Sorry, the page you are looking for doesn't exist. If you think something is broken report a problem.</p>
            <div className={styles.button}><Link to='/films'><Button label="Return to main page"/></Link></div>
         </div>
        </>
    )
}
