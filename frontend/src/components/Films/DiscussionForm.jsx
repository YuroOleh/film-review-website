import { useState } from "react";
import styles from "../../styles/components/DiscussionForm.module.css";
import Button from "../shared/Button";
import Input from "../shared/Input";
import { useCreateDiscussion } from "../../hooks/useCreateDiscussion";

function DiscussionForm({ filmId, onClose }) {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?.id;

    const [title, setTitle] = useState("");

    const { createDiscussion, loading, error } = useCreateDiscussion();

    async function handleCreate() {
        if (!title.trim()) return;

        await createDiscussion(filmId, userId, title);

        onClose();  
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <p className={styles.containerP}>Write discussion topic</p>

                <Input 
                    placeholder="Discussion title"
                    value={title}
                    onChange={setTitle}
                />

                <div className={styles.buttons}>
                    <Button label="Return" onClick={onClose} />

                    <Button 
                        label="Create"
                        onClick={handleCreate}
                    />
                </div>
            </div>
        </div>
    );
}

export default DiscussionForm;