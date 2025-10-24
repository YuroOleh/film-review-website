import Navbar from "../components/shared/Navbar";
import Comment from "../components/shared/Comment";
import SendButton from "../components/shared/SendButton";
import Input from "../components/shared/Input";
import styles from "../styles/pages/NewsDetails.module.css";
import image_placeholder from "../assets/image_placeholder.jpg";

export default function News() {
    return (
        <>
            <Navbar/>
            <div className={styles.detailsContainer}>
                <div className={styles.imgContainer}><img className={styles.detailsImg} src={image_placeholder} alt="" /></div>
                <div className={styles.headerContainer}>
                    <p className={styles.headerTitle}>Lorem Ipsum</p>
                    <div className={styles.viewsContainer}>
                        <p className={styles.viewsCount}>143</p>
                        <img className={styles.viewsIcon} src="/icons/view.png" alt="" />
                    </div>
                </div>
                <div className={styles.detailsTextContainer}>
                    <p className={styles.detailsText}>
                        Sed ut perspiciatis unde omnis iste natus error 
                        sit voluptatem accusantium doloremque laudantium, 
                        totam rem aperiam, eaque ipsa quae ab illo inventore 
                        veritatis.
                    </p>
                    <p className={styles.detailsText}>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis. Doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis. Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium.
                    </p>
                    <p className={styles.detailsText}>
                        Sed ut perspiciatis unde omnis iste natus error sit
                    </p>
                </div>
                <div className={styles.commentsContainer}>
                    <p className={styles.commentsTitle}>
                        Comments:
                    </p>
                    <div className={styles.comment}><Comment text="Accusantium doloremque laudantium,totam rem aperiam"/></div>
                    <div className={styles.comment}>
                        <Comment text="Doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis."/> 
                    </div>
                    <div className={styles.comment}>
                       <Comment text="Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium."/> 
                    </div>
                    
                    
                    

                </div>
                <div className={styles.inputContainer}>
                    <Input placeholder="Write your comment..."/> 
                    <div className={styles.sendButton}><SendButton/></div>
                </div>
            </div>
            
        </>
    );
}
