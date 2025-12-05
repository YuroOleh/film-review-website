import { useRef, useState } from "react";
import styles from "../../styles/components/MovieGenres.module.css";
import Genre from "../shared/Genre";

function MovieGenres({ genres = [] }) {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleClick = (e) => {
    if (isDragging) e.preventDefault();
  };

  return (
    <div
      ref={scrollRef}
      data-testid="movie-genres"
      className={styles.genres}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      {genres.map((genre, index) => (
        <Genre key={index} label={genre} />
      ))}
    </div>
  );
}

export default MovieGenres;
