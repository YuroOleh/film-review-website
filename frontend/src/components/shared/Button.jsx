import styles from "../../styles/components/shared/Button.module.css";

function Button(props) {
  return (
    <button className={styles.customButton}>
      {props.label}
    </button>
  );
}

export default Button;