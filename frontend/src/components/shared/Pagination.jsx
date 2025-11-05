import styles from "../../styles/components/shared/Pagination.module.css";

function Pagination(props) {
    return (
        <div className={styles.paginationContainer}>
            <div>
                <button className={styles.button}  onClick={() => props.onPageChange(1)}>
                    <img className={styles.paginationSecondIcon} src="icons/previous1.png" />
                    <img className={styles.paginationIcon} src="icons/previous1.png" />
                </button>
            </div>
            <div className={styles.next}  onClick={() => props.onPageChange(props.currentPage - 1)}>
                <button disabled={props.currentPage === 1} className={styles.button}><img className={styles.paginationIcon} src="icons/previous1.png" /></button>
            </div>
            {props.currentPage > 2 && <div>
                <button className={styles.paginationItem} onClick={() => props.onPageChange(1)}>1</button>
            </div>}
            {props.currentPage - 3 >= 1 && <div>
                <button className={styles.paginationItem}>...</button>
            </div>}
            {props.currentPage === props.totalPages && <div>
                <button className={styles.paginationItem} onClick={() => props.onPageChange(props.currentPage - 2)}>{props.currentPage - 2}</button>
            </div>}
            {props.currentPage > 1 && <div>
                <button className={styles.paginationItem} onClick={() => props.onPageChange(props.currentPage - 1)}>{props.currentPage - 1}</button>
            </div>}
            <div className={styles.currentPage}>
                <button className={styles.paginationItem}>{props.currentPage}</button>
            </div>
            {props.currentPage < props.totalPages && <div>
                <button className={styles.paginationItem} onClick={() => props.onPageChange(props.currentPage + 1)}>{props.currentPage + 1}</button>
            </div>}
            {props.currentPage === 1 && <div>
                <button className={styles.paginationItem} onClick={() => props.onPageChange(props.currentPage + 2)}>{props.currentPage + 2}</button>
            </div>}
            {props.currentPage + 3 <= props.totalPages && <div>
                <button className={styles.paginationItem}>...</button>
            </div>}
            {props.currentPage < props.totalPages - 1 && <div>
                <button className={styles.paginationItem} onClick={() => props.onPageChange(props.totalPages)}>{props.totalPages}</button>
            </div>}
            <div className={styles.next} onClick={() => props.onPageChange(props.currentPage + 1)}>
                <button disabled={props.currentPage === props.totalPages} className={styles.button}><img className={styles.paginationIcon} src="icons/next1.png" /></button>
            </div>
            <div>
                <button className={styles.button} onClick={() => props.onPageChange(props.totalPages)}>
                    <img className={styles.paginationSecondIcon} src="icons/next1.png" />
                    <img className={styles.paginationIcon} src="icons/next1.png" />
                </button>
            </div>
        </div>
    );
}

export default Pagination;