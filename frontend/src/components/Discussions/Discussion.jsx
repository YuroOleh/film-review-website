import styles from "../../styles/components/Discussion.module.css";
import avatar_placeholder from "../../assets/avatar_placeholder.png";

function Discussion() {
    return (
        <div draggable='false' className={styles.discussionCard}>
            <div className={styles.discussionTitle}>
                <p>Where this scene was filmed?</p>
            </div>
            <div className={styles.discussionBottom}>
                <div className={styles.discussionUser}>
                    <img src={avatar_placeholder} alt="" />
                    <p>User77</p>
                </div>
                <div className={styles.discussionComments}>
                    <img src="/icons/comment.png" alt="" />
                    <p>32</p>
                </div>
            </div>
        </div>
    );
}

export default Discussion;