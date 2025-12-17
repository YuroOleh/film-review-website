import { useState } from "react";
import styles from "../../styles/components/MoviesSort.module.css";


function Sort({ onSortChange, onOrderChange, options=[] }) {
  const [selectedSortOption, setSelectedSortOption] = useState("Name");
  const [selectedOrderOption, setSelectedOrderOption] = useState("Descending");

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSelectedSortOption(value);

    if(value==='Rating'){
      onSortChange('rating');
    }
    else if(value==='Name' || value==='Title'){
      onSortChange('title');
    }
    else if(value==='Release date'){
      onSortChange('published');
    }
    else if(value==='Length'){
      onSortChange('length');
    }
    else if(value==='Date'){
      onSortChange('created_at');
    }
    else if(value==='Messages'){
      onSortChange('message_count');
    }
    else if(value==='Likes'){
      onSortChange('likes');
    }
    else if(value==='Dislikes'){
      onSortChange('dislikes');
    }
    else if(value==='Views'){
      onSortChange('views');
    }
  };

  const handleOrderChange = (event) =>{
    const value = event.target.value;
    setSelectedOrderOption(value);

    if(value==='Ascending'){
      onOrderChange('asc');
    }
    else if(value==='Descending'){
      onOrderChange('desc');
    }
  }

  return (
    <div className={styles.sortMenu}>
        <label className={styles.label}>Sort by:</label>
        <br />
        <select
          value={selectedSortOption}
          onChange={handleSortChange}
          className={styles.select}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value || option}>
              {option.label || option}
            </option>
          ))}
        </select>
        <br />
        <br />
        <label className={styles.label}>Order by:</label>
        <select className={styles.select} value={selectedOrderOption} onChange={handleOrderChange}>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </select>
    </div>
  );
}

export default Sort;