import { useViewsCount } from "../../hooks/useViewsCount";
import styles from "../../styles/components/Article.module.css";
import image_placeholder from "../../assets/image_placeholder.jpg";
import { Link } from "react-router-dom";

function Article({ article, testing }) {
    const date = new Date(article.created_at);
    const formatted = date.toLocaleDateString("uk-UA");

    const { views, loading } = testing?.viewsHook || useViewsCount(article.id);

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
                        <p>{article.description}</p>
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