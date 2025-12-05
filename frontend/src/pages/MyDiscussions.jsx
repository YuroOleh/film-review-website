import Navbar from "../components/shared/Navbar";
import Searchbar from "../components/shared/Searchbar";
import Pagination from "../components/shared/Pagination";
import FilmDiscussion from "../components/Discussions/FilmDiscussion";
import styles from "../styles/pages/Discussions.module.css";
import Sort from "../components/shared/Sort";
import { useState, useEffect } from "react";
import { useFetchDiscussions } from "../hooks/useFetchDiscussions";
import Message from "../components/shared/Message";

export default function MyDiscussions() {
    const [sortBy, setSortBy] = useState("created_at");
    const [orderBy, setOrderBy] = useState("desc");
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const discussionsPerPage = 6;

    const user = JSON.parse(localStorage.getItem("user"));

    const {
        discussions = [],
        loading,
        error,
        count
    } = useFetchDiscussions(sortBy, orderBy, search, currentPage, discussionsPerPage, user.id);

    useEffect(() => {
        setCurrentPage(1);
    }, [sortBy, orderBy, search]);

    const totalPages = Math.max(1, Math.ceil((count || 0) / discussionsPerPage));

    return (
        <>
            <Navbar />

            <div className={styles.header}>
                <div className={styles.search}>
                    <Searchbar
                        placeholder="Search discussions by title..."
                        SortComponent={
                            <Sort
                                options={["Date", "Title", "Popularity"]}
                                onSortChange={setSortBy}
                                onOrderChange={setOrderBy}
                            />
                        }
                        onSearch={setSearch}
                    />
                </div>
            </div>

            <div className={styles.discussions}>
                {loading ? (
                    <p>Loading...</p>
                ) : discussions.length > 0 ? (
                    discussions.map(discussion => (
                        <FilmDiscussion key={discussion.id} discussion={discussion} />
                    ))
                ) : (
                    !error && (
                        <Message
                            messageTitle="Looks like you don't have discussions..."
                            messageText="You can create a discussion on the movie details page"
                        />
                    )
                )}
            </div>

            {error && (
                <Message
                    messageTitle="Something went wrong..."
                    messageText="It appears that the server is currently unavailable"
                />
            )}

            <div className={styles.pagination}>
                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            </div>
        </>
    );
}
