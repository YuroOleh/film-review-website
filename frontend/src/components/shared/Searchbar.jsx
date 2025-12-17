import { useState } from "react";
import styles from "../../styles/components/shared/Searchbar.module.css";

function Searchbar({ placeholder, showFilter, FilterComponent, SortComponent, onSearch}) {
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [searching, setSearching] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && onSearch) {
      onSearch(searching);
    }
  };

  return (
    <div className={styles.searchbarContainer}>
      <input
        className={styles.search}
        type="text"
        placeholder={placeholder}
        value={searching}
        onChange={(e) => setSearching(e.target.value)}
        onKeyDown={handleKeyDown}
      />

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