import Navbar from "../components/shared/Navbar";
import Searchbar from "../components/shared/Searchbar";
import Pagination from "../components/shared/Pagination";
import Article from "../components/News/Article";
import styles from "../styles/pages/News.module.css";

export default function News() {
    return (
        <>
            <Navbar/>
            <div className={styles.header}>
                <div className={styles.search}>
                    <Searchbar placeholder="Search news by film..."/>
                </div>
            </div>
            
            
            <div className={styles.articles}>
                <div className={styles.article}><Article/></div>
                <div className={styles.article}><Article/></div>
                <div className={styles.article}><Article/></div>
                <div className={styles.article}><Article/></div>
                <div className={styles.article}><Article/></div>
            </div>
            

            <div className={styles.pagination}>
                <Pagination/>
            </div>
            
        </>
    );
}
