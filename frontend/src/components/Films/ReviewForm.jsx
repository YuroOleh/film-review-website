import { useState } from "react";
import styles from "../../styles/components/ReviewForm.module.css";
import Button from "../shared/Button";
import { useWriteReview } from "../../hooks/useWriteReview";

function ReviewForm({ filmId, onClose }) {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?.id;

    const [rating, setRating] = useState(0);
    const [text, setText] = useState("");

    const { writeReview, loading, error } = useWriteReview();

    async function handleSend() {
        if (!text.trim()) return;
        if (rating <= 0) return;

        await writeReview(filmId, userId, text, rating);
        onClose();
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <p className={styles.containerP}>Write your review</p>

                <textarea
                    className={styles.textarea}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <div className={styles.rating}>
                    <p className={styles.ratingP}>Final rating</p>

                    <div className={styles.ratingContainer}>
                        <p className={styles.ratingContainerP}>{rating}</p>

                        <div className={styles.starsContainer}>
                            <div className={styles.starsEmpty}>
                                {Array(5).fill(0).map((_, i) => (
                                    <img
                                        key={i}
                                        className={styles.star}
                                        src="/icons/star_orange_empty.png"
                                    />
                                ))}
                            </div>

                            <div
                                className={styles.starsFull}
                                style={{ width: `${(rating / 5) * 100}%` }}
                            >
                                {Array(5).fill(0).map((_, i) => (
                                    <img
                                        key={i}
                                        className={styles.star}
                                        src="/icons/star_orange.png"
                                    />
                                ))}
                            </div>

                            <input
                                type="range"
                                min={0}
                                max={5}
                                step={0.1}
                                value={rating}
                                onChange={(e) => setRating(parseFloat(e.target.value))}
                                className={styles.slider}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.buttons}>
                    <Button label="Return" onClick={onClose} />

                    <Button
                        label="Send"
                        onClick={handleSend}
                    />
                </div>
            </div>
        </div>
    );
}

export default ReviewForm;