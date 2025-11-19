import { useState } from "react";
import styles from "../styles/pages/FilmDetails.module.css";
import Button from "../components/shared/Button";
import Navbar from "../components/shared/Navbar";
import ReviewForm from "../components/Films/ReviewForm";
import DiscussionForm from "../components/Films/DiscussionForm";
import MoviePhotos from "../components/Films/MoviePhotos";
import MovieDiscussions from "../components/Films/MovieDiscussions";
import MovieReviews from "../components/Films/MovieReviews";
import MovieGenres from "../components/Films/MovieGenres";
import { useFetchFilm } from "../hooks/useFetchFilm";
import { useFetchFilmReviews } from "../hooks/useFetchFilmReviews";
import { useFetchFilmDiscussions } from "../hooks/useFetchFilmDiscussions";
import { useParams } from "react-router-dom";
import { useFilmRating } from "../hooks/useFilmRating";

export default function FilmDetails() {
    const { id } = useParams();
    const { film, filmLoading, filmError } = useFetchFilm(id);
    const { reviews, reviewsLoading, reviewsError } = useFetchFilmReviews(film.id);
    const { discussions, discussionsLoading, discussionsError } = useFetchFilmDiscussions(film.id);
    const [showReviewForm, setShowReviewForm] = useState(false)
    const [showDiscussionForm, setShowDiscussionForm] = useState(false)
    const { rating, loading } = useFilmRating(film.id);

    return (
        <>
            <Navbar />
            <div className={styles.filmDetailsCard}>
                <div className={styles.filmDetailsContainer}>
                    <div className={styles.filmDetailsHeaderMain}>
                        <div>
                            <img className={styles.detailsPoster} src={`/${film.poster}`} />
                        </div>
                        <div className={styles.filmDescriptionContainer}>
                            <div>
                                <div className={styles.filmDetailsHeader}>
                                    <p className={styles.filmDetailsTitle}>{film.title}</p>
                                    <div className={styles.filmDetailsRating}>
                                        <p className={styles.filmDetailsRatingP}>{loading ? "..." : rating.toFixed(1)}</p>
                                        <img className={styles.filmDetailsRatingImg} src="/icons/star_orange.png" />
                                        <img className={styles.filmDetailsRatingImg} src="/icons/star_orange.png" />
                                        <img className={styles.filmDetailsRatingImg} src="/icons/star_orange.png" />
                                        <img className={styles.filmDetailsRatingImg} src="/icons/star_orange.png" />
                                        <img className={styles.filmDetailsRatingImg} src="/icons/star_orange.png" />
                                    </div>
                                </div>
                                <p className={`${styles.filmDetailsDescription} ${styles.filmDetailsMainDescription}`}>
                                    <span className={styles.filmDetailsSection}>Description: </span>
                                    {film.description}
                                </p>
                            </div>
                            
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
                        <MovieGenres genres={film.genres}/>
                    </div>

                    <p className={styles.detailsLabel}>Photos</p>
                    <div className={styles.photosContainer}>
                        <MoviePhotos/>
                    </div>

                    <p className={styles.detailsLabel}>Discussions</p>
                    <div></div>

                    <div className={styles.detailsButton}>
                        <MovieDiscussions discussions={discussions}/>
                        <div className={styles.discussionButton}>
                            <Button label="Start discussion" onClick = {() => setShowDiscussionForm(true)}/>
                        </div>
                    </div>

                    <p className={styles.detailsLabel}>Reviews</p>
                    <div className={styles.reviewsContainer}>
                        <MovieReviews reviews={reviews}/>
                    </div>
                    <div className={styles.detailsButton}>
                        <Button label="Write review" onClick = {() => setShowReviewForm(true)}/>
                    </div>
                </div>
            </div>
            

            {showReviewForm && (
                <ReviewForm onClose = {() => setShowReviewForm(false)} filmId={film.id}/>
            )}

            {showDiscussionForm && (
                <DiscussionForm onClose = {() => setShowDiscussionForm(false)} filmId={film.id}/>
            )}
        </>
    );
}