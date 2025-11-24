import styles from "../../styles/components/Review.module.css";
import avatar_placeholder from "../../assets/avatar_placeholder.png";
import { useUser } from "../../hooks/useUser";

function Review({review}) {
    const {user, loading, error} = useUser(review.userId)
    console.log(review.userId)

    const date = new Date(review.date);
    const formatted = date.toLocaleDateString("uk-UA")

    return (
        <div className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
                <img src={avatar_placeholder} alt="" />
                <p>{user?.fullName || "User"}</p>
            </div>
            <div>
                <p>
                    {review.text}
                </p>
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