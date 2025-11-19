import Navbar from "../components/shared/Navbar";
import Searchbar from "../components/shared/Searchbar";
import Pagination from "../components/shared/Pagination";
import FilmDiscussion from "../components/Discussions/FilmDiscussion";
import styles from "../styles/pages/Discussions.module.css";
import Sort from "../components/shared/Sort";
import { useState } from "react";
import { useFetchDiscussions } from "../hooks/useFetchDiscussions";

export default function Discussions() {
    const [sortBy, setSortBy] = useState('date');
    const [orderBy, setOrderBy] = useState('asc');
    const [search, setSearch] = useState('')
    const { discussions, loading, error } = useFetchDiscussions(sortBy, orderBy, search)
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
                    "Date",
                    "Title",
                    "Popularity"
                    ]}

                    onSortChange={setSortBy}
                    onOrderChange={setOrderBy}
                />}

                onSearch={setSearch}
            />
                </div>
            </div>
            
            <div className={styles.discussions}>
                {currentDiscussions.map(discussion => (
                    <FilmDiscussion discussion={discussion} />
                ))}
            </div>
            

            <div className={styles.pagination}>
                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage}/>
            </div>
            
        </>
    );
}
