import { useState } from "react";
import styles from "../styles/pages/Profile.module.css";
import Button from "../components/shared/Button";
import Navbar from "../components/shared/Navbar";
import avatar_placeholder from "../assets/avatar_placeholder.png";
import Logout from "../components/Profile/Logout";
import FavouriteMovies from "../components/Profile/FavouriteMovies";
import FavouriteGenres from "../components/Profile/FavouriteGenres";
import { Link } from "react-router-dom";
import {useFetchFavourites} from "../hooks/useFetchFavourites"
import { useFetchFilmsByIds } from "../hooks/useFetchFilmsByIds";
import { useMemo } from "react";
import { useFetchWatchlist } from "../hooks/useFetchWatchlist";
import { useFetchReviews } from "../hooks/useFetchReviews";
import { useFetchDiscussions } from "../hooks/useFetchDiscussions";
import Message from "../components/shared/Message";


export default function Profile() {
    const [showLogout, setShowLogout] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));
    const {favourites, favouritesLoading, favouritesError} = useFetchFavourites(user?.id);
    const filmIds = useMemo(() => favourites.map(item => item.film), [favourites]);
    const { films, loading, error } = useFetchFilmsByIds(filmIds);
    const { watchlist, watchlistLoading, watchlistError } = useFetchWatchlist(user?.id);
    const { reviews, reviewsLoading, reviewsError } = useFetchReviews(undefined, undefined, undefined, user?.id, undefined);
    const { discussions, discussionsLoading, discussionsError } = useFetchDiscussions(undefined, undefined, undefined, user?.id, undefined)
    

    return (
        <>
            <Navbar onLogoutClick={() => {setShowLogout(true)}}/>
            <div className={styles.container}>
                <div className={styles.profileContainer}>
                    <div className={styles.profileHeaderContainer}>
                        <div className={styles.descriptionContainer}>
                            <img className={styles.avatar} src={avatar_placeholder} />
                            <div className={styles.headerInfo}>
                                <div className={styles.info}>
                                    <p className={styles.username}>{user?.username}</p>
                                    <p className={styles.email}>{user?.email}</p>
                                </div>

                                <div className={`${styles.date} ${styles.dateContainer}`}>
                                    <img className={styles.dateImg} src="icons/calendar.png" />
                                    <p className={styles.dateP}>{user?.date}</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.userRating}>
                            <h1 className={styles.userRatingH1}>5.0</h1>
                            <div className={styles.stars}>
                                <img className={styles.starsImg} src="icons/star_orange.png" />
                                <img className={styles.starsImg} src="icons/star_orange.png" />
                                <img className={styles.starsImg} src="icons/star_orange.png" />
                                <img className={styles.starsImg} src="icons/star_orange.png" />
                                <img className={styles.starsImg} src="icons/star_orange.png" />
                            </div>
                            <p className={styles.userRatingP}>Overall user rating</p>
                        </div>
                    </div>

                   

                    <p className={`${styles.label} ${styles.labelGenre}`}>Favourite genres:</p>
                    <div className={styles.genres}>
                        <FavouriteGenres/>
                    </div>

                    <p className={styles.label}>Favourite movies:</p>
                    <div className={styles.films}>
                        <FavouriteMovies films={films}/>
                        {films.length===0 && <Message messageTitle='You dont have favoutite movies yet...' messageText='Add your favourite movie in movie details'/>}
                    </div>

                    <div className={styles.button}>
                        <Button label="Edit profile" />
                    </div>
                </div>

                <div className={styles.infoContainer}>
                    <div className={styles.sideContainer}>
                        <div className={styles.sideItem}><p>My Watchlist: {watchlist.length}</p></div>
                        <div className={styles.sideItem}><Link to="/mywatchlist"><Button label="Go to watchlist" /></Link></div>
                    </div>
                    <div className={styles.sideContainer}>
                        <div className={styles.sideItem}><p>My Reviews: {reviews.length}</p></div>
                        <div className={styles.sideItem}><Link to="/myreviews"><Button label="View reviews" /></Link></div>
                    </div>
                    <div className={styles.sideContainer}>
                        <div className={styles.sideItem}><p>My Discussions: {discussions.length}</p></div>
                        <div className={styles.sideItem}><Link to="/mydiscussions"><Button label="See discussions" /></Link></div>
                    </div>
                </div>
            </div>

            {showLogout && (
                <Logout onClose={() => setShowLogout(false)} />
            )}
        </>
    );
}