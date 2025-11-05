import styles from "../styles/pages/Reviews.module.css";
import Navbar from "../components/shared/Navbar";
import Searchbar from "../components/shared/Searchbar";
import Pagination from "../components/shared/Pagination";
import FilmReview from "../components/Reviews/FilmReview";



export default function Reviews() {
    return (
        <>
            <Navbar/>

            <div className={styles.searchbarContainer}>
                <div className={styles.searchbar}><Searchbar placeholder="Search review..."/></div>
            </div>
            
            <div className={styles.reviewsContainer}>
                <div className={styles.review}><FilmReview/></div>
                <div className={styles.review}><FilmReview/></div>
                <div className={styles.review}><FilmReview/></div>
                <div className={styles.review}><FilmReview/></div>
            </div>
            
            <div className={styles.paginationContainer}>
                <Pagination/>
            </div>
            
        </>
    );
}