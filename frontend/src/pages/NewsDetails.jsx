import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Comment from "../components/shared/Comment";
import SendButton from "../components/shared/SendButton";
import Input from "../components/shared/Input";
import styles from "../styles/pages/NewsDetails.module.css";
import image_placeholder from "../assets/image_placeholder.jpg";
import { useFetchArticle } from "../hooks/useFetchArticle";
import { useFetchComments } from "../hooks/useFetchComments";
import { useWriteComment } from "../hooks/useWriteComment";
import { useMarkAsViewed } from "../hooks/useMarkAsViewed";
import { useEffect } from "react";
import Message from "../components/shared/Message";

export default function News() {
  const { id: articleId } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;

  const { article } = useFetchArticle(articleId);
  const { comments } = useFetchComments(articleId);
  const { writeComment } = useWriteComment();
  const { markAsViewed } = useMarkAsViewed();

  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    if (articleId && userId) {
      markAsViewed(articleId, userId);
    }
  }, [articleId, userId, markAsViewed]);

  async function handleSend() {
    if (!newComment.trim()) return;

    await writeComment(articleId, userId, newComment);
    setNewComment(""); 
  }

  if(article.length!==0){
    return (
      <>
        <Navbar/>
        <div className={styles.detailsContainer}>
          <div className={styles.imgContainer}>
            <img className={styles.detailsImg} src={image_placeholder} alt="" />
          </div>

          <div className={styles.headerContainer}>
            <p className={styles.headerTitle}>{article.title}</p>
            <div className={styles.viewsContainer}>
              <p className={styles.viewsCount}>{article.views}</p>
              <img className={styles.viewsIcon} src="/icons/view.png" alt="" />
            </div>
          </div>

          <div className={styles.detailsTextContainer}>
            <p className={styles.detailsText}>{article.fullArticle}</p>
          </div>

          <div className={styles.commentsContainer}>
            <p className={styles.commentsTitle}>Comments:</p>
            {comments?.map((c) => (
              <div key={c.id} className={styles.comment}>
                <Comment text={c.text}/>
              </div>
            ))}
          </div>

          <div className={styles.inputContainer}>
            <Input 
              placeholder="Write your comment..." 
              value={newComment} 
              onChange={setNewComment} 
            /> 
            <div className={styles.sendButton}>
              <SendButton onClick={handleSend}/>
            </div>
          </div>
        </div>
      </>
    );
  }
  else{
    return( 
            <>
              <Navbar />
              <br />
              <br />
              <Message messageTitle='Article does not exist...' messageText='Check other articles on news page'/>
            </>
          );
  }

  
}