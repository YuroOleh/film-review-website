import styles from "../../styles/components/shared/Comment.module.css";
import avatar_placeholder from "../../assets/avatar_placeholder.png";
import { useUser } from "../../hooks/useUser";

function Comment({message}) {
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const {user, loading, error} = useUser(message.user)


  if(currentUser.id !== user?.user ){
    return (
      <div className={styles.commentContainer}>
        <div className={styles.commentInfo}>
          <img className={styles.userAvatar} src={avatar_placeholder} alt="" />
          <p className={styles.username}>{user?.username}</p>
        </div>
        
        <p className={styles.commentText}>
          {message.text}
        </p>
      </div>
      
    );
  }
  else{
    return(
      <div  className={styles.myCommentContainer}>
        <p className={styles.myCommentText}>
          {message.text}
        </p>
      </div>
    )
  }
}

export default Comment;