import styles from "../../styles/components/shared/SendButton.module.css";

function SendButton({ onClick }) {
  return (
    <button className={styles.customButton} onClick={onClick}>
      <img className={styles.sendIcon} src="/icons/send.png" alt="Send" />
    </button>
  );
}

export default SendButton;