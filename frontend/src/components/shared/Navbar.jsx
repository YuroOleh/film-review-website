import logo from "../../assets/logo.png";
import avatar_placeholder from "../../assets/avatar_placeholder.png";
import styles from "../../styles/components/shared/Navbar.module.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar({ onLogoutClick }) {
    const location = useLocation();
    const currentPath = location.pathname;

    const isProfilePage = currentPath.startsWith("/profile");
    const isFilmsPage = currentPath.startsWith("/films");
    const isNewsPage = currentPath.startsWith("/news");
    const isDiscussionsPage = currentPath.startsWith("/discussions");
    const isReviewsPage = currentPath.startsWith("/reviews");

    return (
        <div className={styles.navbarContainer}>
            <div>
                <img className={styles.navbarLogo} src={logo} alt="" /> 
            </div>
            <div className={styles.navbarItemsContainer}>
                <Link
                    to="/films"
                    className={`${styles.navbarItem} ${isFilmsPage ? styles.highlited : ""}`}
                >
                    Films
                </Link>
                <Link
                    to="/news"
                    className={`${styles.navbarItem} ${isNewsPage ? styles.highlited : ""}`}
                >
                    News
                </Link>
                <Link
                    to="/discussions"
                    className={`${styles.navbarItem} ${isDiscussionsPage ? styles.highlited : ""}`}
                >
                    Discussions
                </Link>
                <Link
                    to="/reviews"
                    className={`${styles.navbarItem} ${isReviewsPage ? styles.highlited : ""}`}
                >
                    Reviews
                </Link>
                {isProfilePage ? (
                    <button className={styles.logoutButton} onClick={onLogoutClick}>Logout</button>
                ) : (
                    <Link to="/profile">
                        <img
                            className={`${styles.navbarItem} ${styles.avatarPlaceholder}`}
                            src={avatar_placeholder}
                        />
                    </Link>
                )}
            </div>    
        </div>
    );
}
export default Navbar;
