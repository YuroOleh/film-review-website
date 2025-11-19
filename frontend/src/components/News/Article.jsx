import { useViewsCount } from "../../hooks/useViewsCount";
import styles from "../../styles/components/Article.module.css";
import image_placeholder from "../../assets/image_placeholder.jpg";
import { Link } from "react-router-dom";

function Article({ article }) {
    const date = new Date(article.date);
    const formatted = date.toLocaleDateString("uk-UA");

    const { views, loading } = useViewsCount(article.id);
 

    return (
        <> 
            <Link to={`/news/details/${article.id}`} className={styles.link}>
                <div className={styles.articleContainer}>
                    <img className={styles.articleImg} src={image_placeholder} alt="" />
                    <div className={styles.articleSideContainer}>
                        <div className={styles.headerContainer}>
                            <p className={styles.articleTitle}>{article.title}</p>
                            <div className={styles.viewsContainer}>
                                <p className={styles.viewsCount}>
                                    {loading ? "..." : views}
                                </p>
                                <img className={styles.viewsIcon} src="/icons/view.png" alt="" />
                            </div> 
                        </div>
                        <p>
                            {article.shortDescription}
                        </p>
                        <div className={styles.dateContainer}>
                            <p className={styles.date}>{formatted}</p>
                            <img className={styles.calendarIcon} src="/icons/calendar.png" alt="" />
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Article;