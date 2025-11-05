import logo from "../../assets/logo.png";
import avatar_placeholder from "../../assets/avatar_placeholder.png";
import styles from "../../styles/components/shared/Navbar.module.css";
import { useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    const isProfilePage = location.pathname === "/profile";

    return (
        <div className={styles.navbarContainer}>
            <div>
                <img className={styles.navbarLogo} src={logo} alt="" /> 
            </div>
            <div className={styles.navbarItemsContainer}>
                <p className={styles.navbarItem}>Films</p>
                <p className={styles.navbarItem}>News</p>
                <p className={styles.navbarItem}>Discussions</p>
                <p className={styles.navbarItem}>Reviews</p>
                {isProfilePage ? (
                    <p className={`${styles.navbarItem} ${styles.logoutText}`}>Logout</p>
                ) : (
                    <img
                        className={`${styles.navbarItem} ${styles.avatarPlaceholder}`}
                        src={avatar_placeholder}
                    />
                )}
            </div>    
        </div>
    );
}

export default Navbar;