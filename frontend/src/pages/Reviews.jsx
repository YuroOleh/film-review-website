import styles from "../styles/pages/Reviews.module.css";
import Navbar from "../components/shared/Navbar";
import Searchbar from "../components/shared/Searchbar";
import Pagination from "../components/shared/Pagination";
import FilmReview from "../components/Reviews/FilmReview";
import { useState, useEffect } from "react";
import Sort from "../components/shared/Sort";
import { useFetchReviews } from "../hooks/useFetchReviews";
import Message from "../components/shared/Message";

export default function Reviews() {
    const [sortBy, setSortBy] = useState('created_at');
    const [orderBy, setOrderBy] = useState('desc');
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 4;

    const { reviews = [], loading, error, totalPages } = useFetchReviews(
        sortBy,
        orderBy,
        search,
        currentPage,
        reviewsPerPage
    );

    useEffect(() => {
        setCurrentPage(1);
    }, [sortBy, orderBy, search]);

    return (
        <>
            <Navbar />

            <div className={styles.searchbarContainer}>
                <div className={styles.searchbar}>
                    <Searchbar
                        placeholder="Search review..."
                        SortComponent={
                            <Sort
                                options={[
                                    "Date",
                                    "Likes",
                                    "Dislikes"
                                ]}
                                onSortChange={setSortBy}
                                onOrderChange={setOrderBy}
                            />
                        }
                        onSearch={setSearch}
                    />
                </div>
            </div>
            
            <div className={styles.reviewsContainer}>
                {loading ? (
                    <p>Loading...</p>
                ) : reviews.length > 0 ? (
                    reviews.map(review => <FilmReview key={review.id} review={review} />)
                ) : (
                    !error && (
                        <Message
                            messageTitle='No reviews found...'
                            messageText='There are no reviews matching your search criteria '
                        />
                    )
                )}
            </div>

            {error && (
                <Message
                    messageTitle='Something went wrong...'
                    messageText='It appears that the server is currently unavailable'
                />
            )}

            <div className={styles.paginationContainer}>
                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={(p) => setCurrentPage(p)}
                />
            </div>
        </>
    );
}
