import Navbar from "../components/shared/Navbar";
import Searchbar from "../components/shared/Searchbar";
import Pagination from "../components/shared/Pagination";
import FilmDiscussion from "../components/Discussions/FilmDiscussion";
import styles from "../styles/pages/Discussions.module.css";
import Sort from "../components/shared/Sort";
import { useState } from "react";

export default function Discussions() {
    const discussions = Array.from({ length: 100 }, () => <FilmDiscussion />);
    const discussionsPerPage = 6;

    const totalPages = Math.ceil(discussions.length / discussionsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * discussionsPerPage;
    const endIndex = startIndex + discussionsPerPage;

    const currentDiscussions = discussions.slice(startIndex, endIndex);

    return (
        <>
            <Navbar/>
            <div className={styles.header}>
                <div className={styles.search}>
                    <Searchbar placeholder="Search discussions by title..." SortComponent={
                <Sort
                    options={[
                    "Title",
                    "Date",
                    "Popularity"
                    ]}
                />}
            />
                </div>
            </div>
            
            <div className={styles.discussions}>
                {currentDiscussions}
            </div>
            

            <div className={styles.pagination}>
                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage}/>
            </div>
            
        </>
    );
}
