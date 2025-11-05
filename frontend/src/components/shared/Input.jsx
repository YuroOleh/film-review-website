import styles from "../../styles/components/shared/Input.module.css";

function Input(props) {
  return (
    <input
      className={styles.customInput}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}

export default Input;