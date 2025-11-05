import { useState } from "react";
import styles from "../../styles/components/ReviewForm.module.css"
import Button from "../shared/Button";

function ReviewForm({onClose}){
    const [rating, setRating] = useState(0);
    const sliderWidth = Math.floor(rating/5*100) + '%';
    console.log(sliderWidth)

    return(
        <>
            <div className={styles.overlay}>
                <div className={styles.container}>
                    <p className={styles.containerP}>Write your review</p>
                    <textarea className={styles.textarea}></textarea>
    
                    <div className={styles.rating}>
                        <p className={styles.ratingP}>Final rating</p>
                        <div className={styles.ratingContainer}>
                            <p className={styles.ratingContainerP}>{rating}</p>
                            <div className={styles.starsContainer}>
                                <div className={styles.starsEmpty}>
                                    {Array(5).fill(0).map((_, i) => (
                                    <img key={i} className={styles.star} src="/icons/star_orange_empty.png" />
                                    ))}
                                </div>
                                <div className={styles.starsFull} style={{ width: `${(rating / 5) * 100}%` }}>
                                    {Array(5).fill(0).map((_, i) => (
                                    <img key={i} className={styles.star} src="/icons/star_orange.png" />
                                    ))}
                                </div>
                                <input
                                    type="range"
                                    min={0}
                                    max={5}
                                    step={0.1}
                                    value={rating}
                                    onChange={(e) => setRating(parseFloat(e.target.value))}
                                    style={{
                                        '--progress': `${(rating / 5) * 100}%`
                                    }}
                                    className={styles.slider}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <Button label="Return" onClick={onClose}></Button>
                        <Button label="Send" onClick={onClose}></Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewForm