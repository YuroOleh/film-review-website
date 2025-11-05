import React, { useState } from "react";
import styles from "../../styles/components/MoviesFilter.module.css";
import ButtonSmall from "../shared/ButtonSmall.jsx"

function MoviesFilter() {
  const [showMenu, setShowMenu] = useState(true);
  const [ratingMin, setRatingMin] = useState(0);
  const [ratingMax, setRatingMax] = useState(5);
  const [lengthMin, setLengthMin] = useState("00:00:00");
  const [lengthMax, setLengthMax] = useState("04:00:00");
  const [yearMin, setYearMin] = useState(1900);
  const [yearMax, setYearMax] = useState(2025);

  return (
    <div className={styles.filterContainer}>
        <div className={styles.dropdownMenu}>
          <div className={styles.filterGroup}>
            <label className={styles.label}>Rating range:</label>
            <div className={styles.inputGroup}>
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                value={ratingMin}
                onChange={(e) => setRatingMin(e.target.value)}
                className={styles.input}
              />
              <span className={styles.separator}>–</span>
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                value={ratingMax}
                onChange={(e) => setRatingMax(e.target.value)}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.label}>Length range:</label>
            <div className={styles.inputGroup}>
              <input
                type="time"
                step="300"
                value={lengthMin}
                onChange={(e) => setLengthMin(e.target.value)}
                className={styles.input}
              />
              <span className={styles.separator}>–</span>
              <input
                type="time"
                step="300"
                value={lengthMax}
                onChange={(e) => setLengthMax(e.target.value)}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.label}>Year range:</label>
            <div className={styles.inputGroup}>
              <input
                type="number"
                min="1900"
                max="2025"
                value={yearMin}
                onChange={(e) => setYearMin(e.target.value)}
                className={styles.input}
              />
              <span className={styles.separator}>–</span>
              <input
                type="number"
                min="1900"
                max="2025"
                value={yearMax}
                onChange={(e) => setYearMax(e.target.value)}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.button}><ButtonSmall label="Apply"/></div>
        </div>
    </div>
  );
}

export default MoviesFilter