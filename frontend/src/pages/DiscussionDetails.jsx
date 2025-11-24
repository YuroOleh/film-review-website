import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Comment from "../components/shared/Comment";
import Input from "../components/shared/Input";
import SendButton from "../components/shared/SendButton";
import styles from "../styles/pages/DiscussionDetails.module.css";
import { useFetchMessages } from "../hooks/useFetchMessages";
import { useFetchDiscussion } from "../hooks/useFetchDiscussion";
import { useWriteMessage } from "../hooks/useWriteMessage";
import Message from "../components/shared/Message";

export default function DiscussionDetails() {
  const { id: discussionId } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;
  const { discussion } = useFetchDiscussion(discussionId);
  const { messages } = useFetchMessages(discussionId);
  const { writeMessage } = useWriteMessage();

  console.log(messages)

  const [newMessage, setNewMessage] = useState("");

  async function handleSend() {
    console.log(discussionId)
    console.log(userId)
    console.log(newMessage)

    if (!newMessage.trim()) return;

    await writeMessage(discussionId, userId, newMessage);
    setNewMessage("");
  }

  if (discussion.length===0) {
        return (
            <>
                <Navbar />
                <br />
                <br />
                <Message
                    messageTitle="Discussion does not exist..."
                    messageText="Check other discussions on the discussions page"
                />
            </>
        );
    }

  return (
    <>
      <Navbar />
      <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.headerP}>{discussion.title}</p>
            </div>

            <div className={styles.chat}>
                <div className={styles.comments}>
                    {messages?.map((msg) => (
                    <div key={msg.id} className={styles.comment}>
                        <Comment text={msg.text}/>
                    </div>
                    ))}
                </div>

                <div className={styles.sendMessage}>
                    <Input
                    placeholder="Send your message..."
                    value={newMessage}
                    onChange={setNewMessage}
                    />
                    <div className={styles.button}>
                    <SendButton onClick={handleSend} />
                    </div>
                </div>
            </div>
      </div>
    </>
  );
}