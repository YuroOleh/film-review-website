import styles from "../../styles/components/shared/Input.module.css";

function Input({ value, onChange, type = "text", placeholder }) {
  return (
    <input
      className={styles.customInput}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Input;