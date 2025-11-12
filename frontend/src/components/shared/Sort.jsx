import { useState } from "react";
import styles from "../../styles/components/MoviesSort.module.css";
import ButtonSmall from "./ButtonSmall";

function Sort({ onSortChange, options=[] }) {
  const [selectedOption, setSelectedOption] = useState("name");

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSortChange?.(value); 
  };

  return (
    <div className={styles.sortMenu}>
        <label className={styles.label}>Sort by:</label>
        <select
          value={selectedOption}
          onChange={handleChange}
          className={styles.select}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value || option}>
              {option.label || option}
            </option>
          ))}
        </select>

        <div className={styles.button}><ButtonSmall label="Apply"/></div>
    </div>
  );
}

export default Sort;