import styles from "../../styles/components/FilmDiscussion.module.css";
import poster_placeholder from "../../assets/poster_placeholder.jpg";
import avatar_placeholder from "../../assets/avatar_placeholder.png";
import { Link } from "react-router-dom";
import { useFetchFilm } from "../../hooks/useFetchFilm";
import { useUser } from "../../hooks/useUser";
import { useMessagesCount } from "../../hooks/useMessagesCount";
import { useUniqueUsersCount } from "../../hooks/useUniqueUsersCount";

function FilmDiscussion({ discussion, testing }) {
    const { film, loadingFilm, errorFilm } = testing?.filmHook || useFetchFilm(discussion.film);
    const { user, loadingUser, errorUser } = testing?.userHook || useUser(discussion.user);
    const { count: messageCount, loading: loadingMessages } = testing?.messagesCountHook || useMessagesCount(discussion.id);
    const { count: uniqueUsersCount, loading: loadingUsers } = testing?.uniqueUsersHook || useUniqueUsersCount(discussion.id);

    return (
        <>
            <Link to={`/discussions/details/${discussion.id}`} className={styles.link}>
                <div className={styles.container}>
                    <div className={styles.filmContainer}>
                        <img className={styles.filmContainerImg} src={film?.poster || poster_placeholder} />
                        <p className={styles.filmContainerP}>{film?.title || "Film"}</p>
                    </div>
                    <div className={styles.commentsContainer}>
                        <p className={styles.commentsContainerP}>{discussion.title}</p>
                        <div className={styles.userInfo}>
                            <img className={styles.userInfoImg} src={avatar_placeholder} />
                            <p className={styles.userInfoP}>{user?.username || "User"}</p>
                        </div>
                        <div className={styles.commentsInfo}>
                            <div className={styles.commentsInfoUsers}>
                                <img className={styles.commentsInfoImg} src="/icons/user.png" />
                                <p className={styles.commentsInfoP}>
                                    {loadingUsers ? "..." : uniqueUsersCount}
                                </p>
                            </div>
                            <div className={styles.commentsInfoMessages}>
                                <img className={styles.commentsInfoImg} src="/icons/comment.png" />
                                <p className={styles.commentsInfoP}>
                                    {loadingMessages ? "..." : messageCount}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default FilmDiscussion;