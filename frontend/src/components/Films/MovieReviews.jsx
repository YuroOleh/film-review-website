import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/components/MovieReviews.module.css";
import Review from "../Reviews/Review";

function MovieReviews({reviews = []}) {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [moved, setMoved] = useState(false); 

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setMoved(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX);
    if (Math.abs(walk) > 5) setMoved(true);  
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleClick = (e) => {
    if (moved) e.preventDefault(); 
  };

  return (
    <div
      ref={scrollRef}
      data-testid="movie-reviews"
      className={styles.reviews}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {reviews.map((review) => (
        <Link
          key={review.id}
          to={`/reviews/details/${review.id}`}
          onClick={handleClick}
          className={styles.reviewLink}
          draggable="false"
        >
          <Review review={review}/>
        </Link>
      ))}
    </div>
  );
}

export default MovieReviews;
