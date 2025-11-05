import React from "react";
import { useState } from "react";
import styles from "../styles/pages/Profile.module.css";
import Button from "../components/shared/Button";
import Navbar from "../components/shared/Navbar";
import avatar_placeholder from "../assets/avatar_placeholder.png";
import poster_placeholder from "../assets/poster_placeholder.jpg";
import Logout from "../components/Profile/Logout";
import FavouriteMovies from "../components/Profile/FavouriteMovies";
import FavouriteGenres from "../components/Profile/FavouriteGenres";

export default function Profile() {
    const [showLogout, setShowLogout] = useState(false);

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
                                    <p className={styles.username}>Your Name</p>
                                    <p className={styles.email}>youremail@gmail.com</p>
                                </div>

                                <div className={`${styles.date} ${styles.dateContainer}`}>
                                    <img className={styles.dateImg} src="icons/calendar.png" />
                                    <p className={styles.dateP}>01.01.25</p>
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

                    <div className={styles.connections}>
                        <p className={styles.connectionsP}>0 Followers</p>
                        <p className={styles.connectionsP}>0 Following</p>
                    </div>

                    <p className={`${styles.label} ${styles.labelGenre}`}>Favourite genres:</p>
                    <div className={styles.genres}>
                        <FavouriteGenres/>
                    </div>

                    <p className={styles.label}>Favourite movies:</p>
                    <div className={styles.films}>
                        <FavouriteMovies/>
                    </div>

                    <div className={styles.button}>
                        <Button label="Edit profile" />
                    </div>
                </div>

                <div className={styles.infoContainer}>
                    <div className={styles.sideContainer}>
                        <div className={styles.sideItem}><p>My Watchlist: 0</p></div>
                        <div className={styles.sideItem}><Button label="Go to watchlist" /></div>
                    </div>
                    <div className={styles.sideContainer}>
                        <div className={styles.sideItem}><p>My Reviews: 0</p></div>
                        <div className={styles.sideItem}><Button label="View reviews" /></div>
                    </div>
                    <div className={styles.sideContainer}>
                        <div className={styles.sideItem}><p>My Discussions: 0</p></div>
                        <div className={styles.sideItem}><Button label="See discussions" /></div>
                    </div>
                </div>
            </div>

            {showLogout && (
                <Logout onClose={() => setShowLogout(false)} />
            )}
        </>
    );
}