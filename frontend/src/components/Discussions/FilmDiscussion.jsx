import styles from "../../styles/components/FilmDiscussion.module.css";
import poster_placeholder from "../../assets/poster_placeholder.jpg";
import avatar_placeholder from "../../assets/avatar_placeholder.png";
import Comment from "../shared/Comment";

function FilmDiscussion() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.filmContainer}>
                    <img className={styles.filmContainerImg} src={poster_placeholder} />
                    <p className={styles.filmContainerP}>Lorem Ipsum</p>
                </div>
                <div className={styles.commentsContainer}>
                    <p className={styles.commentsContainerP}>Where this scene was filmed?</p>
                    <div className={styles.comment}><Comment text="I don't know" /></div>
                    <div className={styles.comment}><Comment text="London maybe?"/></div>
                    <div className={styles.comment}><Comment text="Its Manchester, i lived there for three years"/></div>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.userInfo}>
                        <img className={styles.userInfoImg} src={avatar_placeholder}/>
                        <p className={styles.userInfoP}>User77</p> 
                    </div>
                    <div className={styles.commentsInfo}>
                        <img className={styles.commentsInfoImg} src="/icons/comment.png"/>
                        <p className={styles.commentsInfoP}>32</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FilmDiscussion;