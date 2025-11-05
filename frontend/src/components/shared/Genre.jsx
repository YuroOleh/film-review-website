import styles from "../../styles/components/shared/Genre.module.css";

function Genre(props) {
  return (
        <p className={styles.genre}>{props.label}</p>
  );
}

export default Genre;