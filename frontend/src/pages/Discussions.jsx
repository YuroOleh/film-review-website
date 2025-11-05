import Navbar from "../components/shared/Navbar";
import Searchbar from "../components/shared/Searchbar";
import Pagination from "../components/shared/Pagination";
import FilmDiscussion from "../components/Discussions/FilmDiscussion";
import styles from "../styles/pages/Discussions.module.css";

export default function Discussions() {
    return (
        <>
            <Navbar/>
            <div className={styles.header}>
                <div className={styles.search}>
                    <Searchbar placeholder="Search discussions by title..."/>
                </div>
            </div>
            
            <div className={styles.discussions}>
                <div className={styles.discussion}><FilmDiscussion/></div>
                <div className={styles.discussion}><FilmDiscussion/></div>
                <div className={styles.discussion}><FilmDiscussion/></div>
                <div className={styles.discussion}><FilmDiscussion/></div>
                <div className={styles.discussion}><FilmDiscussion/></div>
            </div>
            

            <div className={styles.pagination}>
                <Pagination/>
            </div>
            
        </>
    );
}
