import styles from "../../styles/components/shared/Button.module.css";

function Button(props) {
  return (
    <button className={styles.customButton} onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default Button;