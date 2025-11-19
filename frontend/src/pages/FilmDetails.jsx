import { useState } from "react";
import styles from "../styles/pages/FilmDetails.module.css";
import Button from "../components/shared/Button";
import Navbar from "../components/shared/Navbar";
import poster_placeholder from "../assets/poster_placeholder.jpg";
import ReviewForm from "../components/Films/ReviewForm";
import DiscussionForm from "../components/Films/DiscussionForm";
import MoviePhotos from "../components/Films/MoviePhotos";
import MovieDiscussions from "../components/Films/MovieDiscussions";
import MovieReviews from "../components/Films/MovieReviews";
import MovieGenres from "../components/Films/MovieGenres";

export default function FilmDetails() {
    const [showReviewForm, setShowReviewForm] = useState(false)
    const [showDiscussionForm, setShowDiscussionForm] = useState(false)

    return (
        <>
            <Navbar />
            <div className={styles.filmDetailsCard}>
                <div className={styles.filmDetailsContainer}>
                    <div className={styles.filmDetailsHeaderMain}>
                        <div>
                            <img className={styles.detailsPoster} src={poster_placeholder} />
                        </div>
                        <div className={styles.filmDescriptionContainer}>
                            <div className={styles.filmDetailsHeader}>
                                <p className={styles.filmDetailsTitle}>Lorem Ipsum</p>
                                <div className={styles.filmDetailsRating}>
                                    <p className={styles.filmDetailsRatingP}>5.0</p>
                                    <img className={styles.filmDetailsRatingImg} src="/icons/star_orange.png" />
                                    <img className={styles.filmDetailsRatingImg} src="/icons/star_orange.png" />
                                    <img className={styles.filmDetailsRatingImg} src="/icons/star_orange.png" />
                                    <img className={styles.filmDetailsRatingImg} src="/icons/star_orange.png" />
                                    <img className={styles.filmDetailsRatingImg} src="/icons/star_orange.png" />
                                </div>
                            </div>
                            <p className={`${styles.filmDetailsDescription} ${styles.filmDetailsMainDescription}`}>
                                <span className={styles.filmDetailsSection}>Description: </span>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
                                inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                            <div className={styles.filmDetailsBottom}>
                                <div>
                                    <p className={styles.filmDetailsDescription}>
                                        <span className={styles.filmDetailsSection}>Director: </span>Quentin Tarantino
                                    </p>
                                    <p className={styles.filmDetailsDescription}>
                                        <span className={styles.filmDetailsSection}>Country: </span>Ukraine
                                    </p>
                                    <p className={styles.filmDetailsDescription}>
                                        <span className={styles.filmDetailsSection}>Date: </span>01.01.2025
                                    </p>
                                    <p className={styles.filmDetailsDescription}>
                                        <span className={styles.filmDetailsSection}>Duration: </span>1:30:00
                                    </p>
                                </div>
                                <div className={styles.addToWatchlist}>
                                    <Button label="Add to watchlist" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.filmDetailsGenres}>
                        <MovieGenres/>
                    </div>

                    <p className={styles.detailsLabel}>Photos</p>
                    <div className={styles.photosContainer}>
                        <MoviePhotos/>
                    </div>

                    <p className={styles.detailsLabel}>Discussions</p>
                    <div></div>

                    <div className={styles.detailsButton}>
                        <MovieDiscussions/>
                        <div className={styles.discussionButton}>
                            <Button label="Start discussion" onClick = {() => setShowDiscussionForm(true)}/>
                        </div>
                    </div>

                    <p className={styles.detailsLabel}>Reviews</p>
                    <div className={styles.reviewsContainer}>
                        <MovieReviews/>
                    </div>
                    <div className={styles.detailsButton}>
                        <Button label="Write review" onClick = {() => setShowReviewForm(true)}/>
                    </div>
                </div>
            </div>
            

            {showReviewForm && (
                <ReviewForm onClose = {() => setShowReviewForm(false)}/>
            )}

            {showDiscussionForm && (
                <DiscussionForm onClose = {() => setShowDiscussionForm(false)}/>
            )}
        </>
    );
}