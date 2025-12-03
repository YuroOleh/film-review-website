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
import { useAddFilmToWatchlist } from "../hooks/useAddFilmToWatchlist";
import { useCheckWatchlist } from "../hooks/useCheckWatchlist";
import { useDeleteFilmFromWatchlist } from "../hooks/useDeleteFilmFromWatchlist";
import { useAddFilmToFavourites } from "../hooks/useAddFilmToFavourites";
import { useCheckFavourites } from "../hooks/useCheckFavourites";
import { useDeleteFilmFromFavourites } from "../hooks/useDeleteFilmFromFavourites";
import Message from "../components/shared/Message";

export default function FilmDetails() {
    const { id } = useParams();
    const { film, filmLoading, filmError } = useFetchFilm(id);
    const { reviews, reviewsLoading, reviewsError } = useFetchFilmReviews(film?.id);
    const { discussions, discussionsLoading, discussionsError } = useFetchFilmDiscussions(film?.id);
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    const userId = user?.id;
    const [showReviewForm, setShowReviewForm] = useState(false)
    const [showDiscussionForm, setShowDiscussionForm] = useState(false)
    const { rating, ratingLoading } = useFilmRating(film?.id);
    const { addFilm, addWatchlistLoading, addWatchlistError } = useAddFilmToWatchlist();
    const { addFilm:addFilmToFavourites, addFavouritesLoading, addFavouritesError } = useAddFilmToFavourites();
    const {isInWatchlist, watchlistLoading, watchlistError} = useCheckWatchlist(userId, film?.id)
    const {isInFavourites, favouritesLoading, favouritesError} = useCheckFavourites(userId, film?.id)
    const { deleteFilm, deleteWatchlistLoading, deleteWatchlistError } = useDeleteFilmFromWatchlist();
    const { deleteFilm:deleteFilmFromFavourites, deleteFavouritesLoading, deleteFavouritesError } = useDeleteFilmFromFavourites();


    if (film.length!==0){
        return (
            <>
                
                <Navbar />
                <div className={styles.filmDetailsCard}>
                    <div className={styles.filmDetailsContainer}>
                        <div className={styles.filmDetailsHeaderMain}>
                            <div>
                                <img className={styles.detailsPoster} src={`${film.poster}`} />
                            </div>
                            <div className={styles.filmDescriptionContainer}>
                                <div>
                                    <div className={styles.filmDetailsHeader}>
                                        <p className={styles.filmDetailsTitle}>{film.title}</p>
                                        <div className={styles.filmDetailsRating}>
                                            <p className={styles.filmDetailsRatingP}>{ratingLoading ? "..." : rating.toFixed(1)}</p>
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
                                    <div className={styles.addButtons}>
                                        {!isInFavourites ? (<Button label="Add to favourites" onClick={() => addFilmToFavourites(userId, film.id)}/>) : (<Button label="Delete from favourites" onClick={() => deleteFilmFromFavourites(user.id, film.id)}/>)}
                                        {!isInWatchlist ? (<Button label="Add to watchlist" onClick={() => addFilm(userId, film.id)}/>) : (<Button label="Delete from watchlist" onClick={() => deleteFilm(user.id, film.id)}/>)}
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
                            <MovieDiscussions discussions={discussions.results || []}/>
                            <div className={styles.discussionButton}>
                                <Button label="Start discussion" onClick = {() => setShowDiscussionForm(true)}/>
                            </div>
                        </div>

                        <p className={styles.detailsLabel}>Reviews</p>
                        <div className={styles.reviewsContainer}>
                            <MovieReviews reviews={reviews.results || []}/>
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
    else{
        return (
            <>
                <Navbar />
                <br />
                <br />
                <Message messageTitle='Movie does not exist...' messageText='Check other movies on main page'/>
            </>
            
        );
    }
    
}