import styles from "../../styles/components/shared/ButtonSmall.module.css";

function ButtonSmall(props) {
  return (
    <button className={styles.customButton} onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default ButtonSmall;