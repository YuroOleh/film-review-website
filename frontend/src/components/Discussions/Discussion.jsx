import styles from "../../styles/components/Discussion.module.css";
import avatar_placeholder from "../../assets/avatar_placeholder.png";
import { useUser } from "../../hooks/useUser";

function Discussion({discussion}) {
    const {user, loadingUser, errorUser} = useUser(discussion.userId)

    return (
        <div draggable='false' className={styles.discussionCard}>
            <div className={styles.discussionTitle}>
                <p>{discussion.title}</p>
            </div>
            <div className={styles.discussionBottom}>
                <div className={styles.discussionUser}>
                    <img src={avatar_placeholder} alt="" />
                    <p>{user?.fullName || "User"}</p>
                </div>
                <div className={styles.discussionComments}>
                    <img src="/icons/comment.png" alt="" />
                    <p>{discussion.commentaries}</p>
                </div>
            </div>
        </div>
    );
}

export default Discussion;