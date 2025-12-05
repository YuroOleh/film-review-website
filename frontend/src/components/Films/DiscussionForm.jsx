import { useState, useEffect } from "react";
import styles from "../../styles/components/DiscussionForm.module.css";
import Button from "../shared/Button";
import Input from "../shared/Input";
import { useCreateDiscussion } from "../../hooks/useCreateDiscussion";
import { useAuth2 } from "../../hooks/useAuth2";

function DiscussionForm({ filmId, onClose, testing }) {
    const { getCurrentUser } = useAuth2();
    const [user, setUser] = useState(testing?.user || null);

    useEffect(() => {
        if (!testing?.user) {
            async function load() {
                const u = await getCurrentUser();
                setUser(u);
            }
            load();
        }
    }, [getCurrentUser, testing]);

    const [title, setTitle] = useState("");
    const { createDiscussion, loading, error } = useCreateDiscussion();

    async function handleCreate() {
        if (!title.trim()) return;

        await (testing?.createDiscussion || createDiscussion)(filmId, user.id, title);
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
                    <Button label="Create" onClick={handleCreate} />
                </div>
            </div>
        </div>
    );
}

export default DiscussionForm;
