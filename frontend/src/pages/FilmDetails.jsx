import React, { useState } from "react";
import styles from "../styles/pages/FilmDetails.module.css";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";
import Navbar from "../components/shared/Navbar";
import Review from "../components/Reviews/Review";
import Discussion from "../components/Discussions/Discussion";
import poster_placeholder from "../assets/poster_placeholder.jpg";
import image_placeholder from "../assets/image_placeholder.jpg";

export default function FilmDetails() {
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
                        <p className={styles.filmDetailsGenresP} >Fantasy</p>
                        <p className={styles.filmDetailsGenresP} >Romance</p>
                        <p className={styles.filmDetailsGenresP} >Action</p>
                        <p className={styles.filmDetailsGenresP} >Comedy</p>
                    </div>

                    <p className={styles.detailsLabel}>Photos</p>
                    <div>
                        <img className={styles.detailsPhoto} src={image_placeholder} />
                        <img className={styles.detailsPhoto} src={image_placeholder} />
                        <img className={styles.detailsPhoto} src={image_placeholder} />
                        <img className={styles.detailsPhoto} src={image_placeholder} />
                    </div>

                    <p className={styles.detailsLabel}>Discussions</p>
                    <div></div>

                    <div className={styles.detailsButton}>
                        <div className={styles.discussionsContainer}>
                            <div className={styles.filmDiscussions}><Discussion /></div>
                            <div className={styles.filmDiscussions}><Discussion /></div>
                        </div>
                        <Button label="Start discussion" />
                    </div>

                    <p className={styles.detailsLabel}>Reviews</p>
                    <div className={styles.reviewsContainer}>
                        <div className={styles.filmReview}><Review /></div>
                        <div className={styles.filmReview}><Review /></div>
                    </div>
                    <div className={styles.detailsButton}>
                        <Button label="Write review" />
                    </div>
                </div>
            </div>
        </>
    );
}