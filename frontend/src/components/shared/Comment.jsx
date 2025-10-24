import styles from "../../styles/components/shared/Comment.module.css";
import avatar_placeholder from "../../assets/avatar_placeholder.png";

function Comment(props) {
  return (
    <div className={styles.commentContainer}>
      <img className={styles.userAvatar} src={avatar_placeholder} alt="" />
      <p className={styles.commentText}>
        {props.text}
      </p>
    </div>
    
  );
}

export default Comment;