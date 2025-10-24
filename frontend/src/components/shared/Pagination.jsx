import styles from "../../styles/components/shared/Pagination.module.css";

function Pagination() {
    return (
        <div className={styles.paginationContainer}>
            <div>
                <img className={styles.paginationSecondIcon} src="icons/previous1.png" />
                <img className={styles.paginationIcon} src="icons/previous1.png" />
            </div>
            <div>
                <img className={styles.paginationIcon} src="icons/previous1.png" />
            </div>
            <div>
                <p className={styles.paginationItem}>1</p>
            </div>
            <div className={styles.currentPage}>
                <p className={styles.paginationItem}>2</p>
            </div>
            <div>
                <p className={styles.paginationItem}>3</p>
            </div>
            <div>
                <p className={styles.paginationItem}>...</p>
            </div>
            <div>
                <p className={styles.paginationItem}>13</p>
            </div>
            <div>
                <img className={styles.paginationIcon} src="icons/next1.png" />
            </div>
            <div>
                <img className={styles.paginationSecondIcon} src="icons/next1.png" />
                <img className={styles.paginationIcon} src="icons/next1.png" />
            </div>
        </div>
    );
}

export default Pagination;