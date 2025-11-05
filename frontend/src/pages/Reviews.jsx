import styles from "../styles/pages/Reviews.module.css";
import Navbar from "../components/shared/Navbar";
import Searchbar from "../components/shared/Searchbar";
import Pagination from "../components/shared/Pagination";
import FilmReview from "../components/Reviews/FilmReview";
import { useState } from "react";
import Sort from "../components/shared/Sort";

export default function Reviews() {
    const reviews = Array.from({ length: 100 }, (_, i) => <FilmReview />);
    const reviewsPerPage = 4;

    const totalPages = Math.ceil(reviews.length / reviewsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;

    const currentReviews = reviews.slice(startIndex, endIndex);

    return (
        <>
            <Navbar/>

            <div className={styles.searchbarContainer}>
                <div className={styles.searchbar}><Searchbar placeholder="Search review..." SortComponent={
                <Sort
                    options={[
                    "Reactions",
                    "User rating",
                    "Date",
                    ]}
                    />}
                /> 
            </div>
            </div>
            
            <div className={styles.reviewsContainer}>
                {currentReviews}
            </div>
            
            <div className={styles.paginationContainer}>
                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage}/>
            </div>
            
        </>
    );
}