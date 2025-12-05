import { useRef, useState } from "react";
import styles from "../../styles/components/MoviePhotos.module.css";
import image_placeholder from "../../assets/image_placeholder.jpg";

function MoviePhotos({ photos = Array(10).fill(image_placeholder) }) {
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
      data-testid="movie-photos"
      className={styles.photos}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      {photos.map((photo, index) => (
        <img
          key={index}
          className={styles.photosImg}
          src={photo}
          draggable="false"
        />
      ))}
    </div>
  );
}

export default MoviePhotos;
