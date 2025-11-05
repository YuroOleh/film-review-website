import React, { useState } from "react";
import styles from "../../styles/components/shared/Searchbar.module.css";

function Searchbar({ placeholder, showFilter, FilterComponent, SortComponent }) {
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);

  return (
    <div className={styles.searchbarContainer}>
      <input className={styles.search} type="text" placeholder={placeholder} />

      {showFilter && (
        <div className={styles.filterWrapper}>
          <button
            className={styles.filter}
            onClick={() => setShowFilterMenu(!showFilterMenu)}
          >
            Filter
          </button>
          {showFilterMenu && FilterComponent && (
            <div className={styles.filterMenuWrapper}>
              {FilterComponent}
            </div>
          )}
        </div>
      )}

      {SortComponent && (
        <div className={styles.sortWrapper}>
          <button
            className={styles.sort}
            onClick={() => setShowSortMenu(!showSortMenu)}
          >
            Sort
          </button>
          {showSortMenu && (
            <div className={styles.filterMenuWrapper}>
              {SortComponent}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Searchbar;