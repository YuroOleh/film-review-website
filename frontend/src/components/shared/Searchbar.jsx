import styles from "../../styles/components/shared/Searchbar.module.css";

function Searchbar(props) {
    return (
        <div className={styles.searchbarContainer}>
            <input
                className={styles.search}
                type="text"
                placeholder={props.placeholder}
            />
            <button className={styles.filter}>Filter</button>
            <button className={styles.sort}>Sort</button>
        </div>
    );
}

export default Searchbar;