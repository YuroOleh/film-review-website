import Navbar from "../components/shared/Navbar";
import Comment from "../components/shared/Comment";
import styles from "../styles/pages/DiscussionDetails.module.css";
import Input from "../components/shared/Input";
import SendButton from "../components/shared/SendButton";

export default function DiscussionDetails() {
    return (
        <>
            <Navbar/>
            <div className={styles.container}>
               <div className={styles.header}>
                    <p className={styles.headerP}>Where this scene was filmed?</p>
                </div>
                <div className={styles.chat}>
                    <div  className={styles.comments}>
                        <div className={styles.comment}><Comment text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"/></div>
                        <div className={styles.comment}><Comment text="Et harum quidem rerum facilis est et expedita distinctio. " /></div>
                        <div className={styles.comment}><Comment text="Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores"/></div>
                        <div className={styles.comment}><Comment text="Nam libero tempore"/></div>
                        <div className={styles.comment}><Comment text="et quas molestias excepturi sint occaecati cupiditate non provident"/></div>
                    </div>
                    <div className={styles.sendMessage}>
                        <Input placeholder="Send your message..."/>
                    <div className={styles.button}><SendButton/></div> 
                    </div>
                </div> 
            </div>
            
            
            
        </>
    );
}
