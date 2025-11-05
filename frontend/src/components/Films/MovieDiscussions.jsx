import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/components/MovieDiscussions.module.css";
import Discussion from "../Discussions/Discussion";

function MovieDiscussions() {
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
      className={styles.discussions}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {[...Array(6)].map((_, i) => (
        <Link
          key={i}
          to={`/discussions/details`}
          onClick={handleClick}
          className={styles.discussionLink}
          draggable="false"
        >
          <Discussion/>
        </Link>
      ))}
    </div>
  );
}

export default MovieDiscussions