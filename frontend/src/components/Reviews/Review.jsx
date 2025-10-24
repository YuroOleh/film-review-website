import styles from "../../styles/components/Review.module.css";
import avatar_placeholder from "../../assets/avatar_placeholder.png";

function Review() {
    return (
        <div className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
                <img src={avatar_placeholder} alt="" />
                <p>User77</p>
            </div>
            <div>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit 
                    voluptatem accusantium doloremque laudantium, 
                    totam rem aperiam, eaque ipsa quae ab illo.
                </p>
            </div>
            <div className={styles.reviewBottom}>
                <div className={styles.reviewRating}>
                    <p>5.0</p>
                    <img src="/icons/star.png" />
                </div>
                <div className={styles.reviewDate}>
                    <p>01.01.2000</p>
                    <img src="/icons/calendar.png" />
                </div>
            </div>
        </div>
    );
}

export default Review;