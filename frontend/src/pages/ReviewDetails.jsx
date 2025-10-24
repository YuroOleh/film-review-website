import Navbar from "../components/shared/Navbar";
import poster_placeholder from "../assets/poster_placeholder.jpg";
import avatar_placeholder from "../assets/avatar_placeholder.png";
import styles from "../styles/pages/ReviewDetails.module.css";

export default function ReviewDetails() {
    return (
        <>
        <Navbar/>
            <div className={styles.container}>
                <div className={styles.filmContainer}>
                        <img className={styles.poster} src={poster_placeholder}/>
                        <div className={styles.filmHeader}>
                            <p className={styles.filmTitle} >Lorem Ipsum</p>
                            <div className={styles.filmRating} >
                                <p className={styles.filmRatingMark}>5.0</p>
                                <img className={styles.filmRatingStar} src="/icons/star.png"/>
                            </div>
                        </div>
                        
                        <p className={styles.filmDescription} >Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                        
                </div>
                <div className={styles.reviewContainer}>
                        <div className={styles.userInfo}>
                            <img className={styles.avatar} src={avatar_placeholder}/>
                            <p className={styles.username}>User77</p>
                        </div>
                        <p className={styles.reviewText}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                        <div className={styles.reviewRating} >
                            <p className={styles.reviewRatingMark}>5.0</p>
                            <img className={styles.reviewRatingStar} src="/icons/star_orange.png"/>
                            <img className={styles.reviewRatingStar} src="/icons/star_orange.png"/>
                            <img className={styles.reviewRatingStar} src="/icons/star_orange.png"/>
                            <img className={styles.reviewRatingStar} src="/icons/star_orange.png"/>
                            <img className={styles.reviewRatingStar} src="/icons/star_orange.png"/>
                        </div>
                        <p className={styles.reviewUsefullness} >Was this review useful?</p>
                        <div className={styles.reviewUsefullnessContainer} >
                            <img className={styles.likeIcon} src="/icons/like.png"/>
                            <img className={styles.dislikeIcon} src="/icons/dislike.png"/>
                        </div>
                </div>
            </div>
        </>
    );
}