import styles from "../../styles/components/Logout.module.css";
import Button from "../shared/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function Logout({onClose}){
    const {logout} = useAuth();

    return(
        <>
            <div className={styles.overlay}>
                <div className={styles.container}>
                    <p className={styles.containerP}>Are you sure you want to exit your account?</p>

                    <div className={styles.buttons}>
                       <Button label="Return" onClick={onClose}></Button>
                        <Link to="/login"><Button label="Logout" onClick={logout} ></Button> </Link>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Logout