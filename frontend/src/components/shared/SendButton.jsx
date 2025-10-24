import styles from "../../styles/components/shared/SendButton.module.css";

function SendButton() {
  return (
    <button className={styles.customButton}>
      <img className={styles.sendIcon} src="/icons/send.png" alt="" />
    </button>
  );
}

export default SendButton;