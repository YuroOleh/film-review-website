import Navbar from "../components/shared/Navbar";
import Searchbar from "../components/shared/Searchbar";
import Pagination from "../components/shared/Pagination";
import FilmDiscussion from "../components/Discussions/FilmDiscussion";
import styles from "../styles/pages/Discussions.module.css";
import Sort from "../components/shared/Sort";
import { useState } from "react";
import { useFetchDiscussions } from "../hooks/useFetchDiscussions";
import Message from "../components/shared/Message";

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

            {error && <Message messageTitle='Something went wrong...' messageText='It appears that the server is currently unavailable'/>}
            {!error && discussions.length===0 && <Message messageTitle='No discussions found...' messageText='There are no discussions matching your search criteria '/>}

            

            <div className={styles.pagination}>
                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage}/>
            </div>
            
        </>
    );
}
