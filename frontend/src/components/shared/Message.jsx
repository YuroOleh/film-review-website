import styles from "../../styles/components/shared/Message.module.css";

function Message({messageTitle, messageText}) {
  return (
    <>
        <div className={styles.container}>
            <p className={styles.p2}>{messageTitle}</p>
            <p className={styles.p3}>{messageText}</p>
        </div>
    </>
  );
}

export default Message;