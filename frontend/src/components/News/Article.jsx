import styles from "../../styles/components/Article.module.css";
import image_placeholder from "../../assets/image_placeholder.jpg";
import { Link } from "react-router-dom";

function Article() {
    return (
        <> 
            <Link to="/news/details" className={styles.link}>
                <div className={styles.articleContainer}>
                    <img className={styles.articleImg} src={image_placeholder} alt="" />
                    <div className={styles.articleSideContainer}>
                        <div className={styles.headerContainer}>
                        <p className={styles.articleTitle}>Lorem Ipsum</p>
                            <div className={styles.viewsContainer}>
                                <p className={styles.viewsCount}>143</p>
                                <img className={styles.viewsIcon} src="/icons/view.png" alt="" />
                            </div> 
                        </div>
                        <p>
                        Sed ut perspiciatis unde omnis iste natus error
                        sit voluptatem accusantiumdoloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                        </p>
                        <div className={styles.dateContainer}>
                            <p className={styles.date}>01.01.2000</p>
                            <img className={styles.calendarIcon} src="/icons/calendar.png" alt="" />
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Article;