import Navbar from "../components/shared/Navbar";
import poster_placeholder from "../assets/poster_placeholder.jpg";
import avatar_placeholder from "../assets/avatar_placeholder.png";
import styles from "../styles/pages/ReviewDetails.module.css";
import { useParams } from "react-router-dom";
import { useFetchReview } from "../hooks/useFetchReview";
import { useUser } from "../hooks/useUser";
import { useFetchFilm } from "../hooks/useFetchFilm";
import Message from "../components/shared/Message";

export default function ReviewDetails() {
    const { id } = useParams();
    const { review, loadingReview, errorReview} = useFetchReview(id)
    const { user, loadingUser, errorUser} = useUser(review.user)
    const { film, loadingFilm, errorFilm} = useFetchFilm(review.film)

    if (review.length===0) {
        return (
            <>
                <Navbar />
                <br />
                <br />
                <Message
                    messageTitle="Review does not exist..."
                    messageText="Check other reviews on the reviews page"
                />
            </>
        );
    }

    return (
        <>
        <Navbar/>
            <div className={styles.container}>
                <div className={styles.filmContainer}>
                        <img className={styles.poster} src={`${film?.poster}`}/>
                        <div className={styles.filmHeader}>
                            <p className={styles.filmTitle} >{film.title}</p>
                            <div className={styles.filmRating} >
                                <p className={styles.filmRatingMark}>{film.rating}</p>
                                <img className={styles.filmRatingStar} src="/icons/star.png"/>
                            </div>
                        </div>
                        
                        <p className={styles.filmDescription} >{film.description}</p>
                        
                </div>
                <div className={styles.reviewContainer}>
                        <div className={styles.userInfo}>
                            <img className={styles.avatar} src={avatar_placeholder}/>
                            <p className={styles.username}>{user?.username || "User"}</p>
                        </div>
                        <p className={styles.reviewText}>{review.text}</p>
                        <div className={styles.reviewRating} >
                            <p className={styles.reviewRatingMark}>{review.rating}</p>
                            <img className={styles.reviewRatingStar} src="/icons/star_orange.png"/>
                            <img className={styles.reviewRatingStar} src="/icons/star_orange.png"/>
                            <img className={styles.reviewRatingStar} src="/icons/star_orange.png"/>
                            <img className={styles.reviewRatingStar} src="/icons/star_orange.png"/>
                            <img className={styles.reviewRatingStar} src="/icons/star_orange.png"/>
                        </div>
                        {/*
                        <p className={styles.reviewUsefullness} >Was this review useful?</p>
                        <div className={styles.reviewUsefullnessContainer} >
                            <img className={styles.likeIcon} src="/icons/like.png"/>
                            <img className={styles.dislikeIcon} src="/icons/dislike.png"/>
                        </div>
                        */}
                </div>
            </div>
        </>
    );
}