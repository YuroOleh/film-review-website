import styles from "../../styles/components/Review.module.css";
import avatar_placeholder from "../../assets/avatar_placeholder.png";

function Review({ review, user, testing }) {
    const date = new Date(review.created_at);
    const formatted = date.toLocaleDateString("uk-UA");

    const displayUser = testing?.user || user;

    return (
        <div className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
                <img src={avatar_placeholder} alt="" />
                <p>{displayUser?.username || "User"}</p>
            </div>
            <div>
                <p>{review.text}</p>
            </div>
            <div className={styles.reviewBottom}>
                <div className={styles.reviewRating}>
                    <p>{review.rating}</p>
                    <img src="/icons/star.png" />
                </div>
                <div className={styles.reviewDate}>
                    <p>{formatted}</p>
                    <img src="/icons/calendar.png" />
                </div>
            </div>
        </div>
    );
}

export default Review;