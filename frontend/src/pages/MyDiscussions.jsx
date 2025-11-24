import Navbar from "../components/shared/Navbar";
import Searchbar from "../components/shared/Searchbar";
import Pagination from "../components/shared/Pagination";
import FilmDiscussion from "../components/Discussions/FilmDiscussion";
import styles from "../styles/pages/Discussions.module.css";
import Sort from "../components/shared/Sort";
import { useState } from "react";
import { useFetchDiscussions } from "../hooks/useFetchDiscussions";
import Message from "../components/shared/Message";

export default function MyDiscussions() {
    const [sortBy, setSortBy] = useState('date');
    const [orderBy, setOrderBy] = useState('asc');
    const [search, setSearch] = useState('')
    const user = JSON.parse(localStorage.getItem('user'))
    const { discussions, loading, error } = useFetchDiscussions(sortBy, orderBy, search, user.id)
    const discussionsPerPage = 6;

    const totalPages = Math.ceil(discussions.length / discussionsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * discussionsPerPage;
    const endIndex = startIndex + discussionsPerPage;

    const currentDiscussions = discussions.slice(startIndex, endIndex);

    if (discussions.length===0) {
        return (
            <>
                <Navbar />
                <br />
                <br />
                <Message
                    messageTitle="Looks like you dont have discussions..."
                    messageText="You can create discussion in movie details page"
                />
            </>
        );
    }

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

            

            <div className={styles.pagination}>
                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage}/>
            </div>
            
        </>
    );
}
