import Navbar from "../components/shared/Navbar";
import Searchbar from "../components/shared/Searchbar";
import MovieCard from "../components/Films/MovieCard";
import Pagination from "../components/shared/Pagination";
import styles from "../styles/pages/Films.module.css";
import { useState, useMemo, useEffect } from "react";
import MoviesFilter from "../components/Films/MoviesFilter";
import Sort from "../components/shared/Sort";
import { useFetchWatchlist } from "../hooks/useFetchWatchlist";
import { useFetchFilmsByIds } from "../hooks/useFetchFilmsByIds";
import Message from "../components/shared/Message";

export default function MyWatchlist() {
    const [sortBy, setSortBy] = useState("created_at");
    const [orderBy, setOrderBy] = useState("desc");
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const filmsPerPage = 9;

    const user = JSON.parse(localStorage.getItem("user"));
    const {
        watchlist,
        watchlistLoading,
        watchlistError,
        totalPages,
        count
    } = useFetchWatchlist(user?.id, currentPage, filmsPerPage);

    const filmIds = useMemo(() => watchlist.map(item => item.film), [watchlist]);
    const { films = [], loading, error } = useFetchFilmsByIds(filmIds);

    useEffect(() => {
        setCurrentPage(1);
    }, [sortBy, orderBy, search, user?.id]);

    if (watchlistLoading) return <p>Loading...</p>;
    if (watchlist.length === 0)
        return (
            <>
                <Navbar />
                <br /><br />
                <Message
                    messageTitle="Looks like your watchlist is empty..."
                    messageText="Browse through movies at main page"
                />
            </>
        );

    return (
        <div>
            <Navbar />
            <Searchbar
                placeholder="Search films..."
                showFilter={true}
                FilterComponent={<MoviesFilter />}
                SortComponent={
                    <Sort
                        options={["Name", "Rating", "Release date", "Length"]}
                        onSortChange={setSortBy}
                        onOrderChange={setOrderBy}
                    />
                }
                onSearch={setSearch}
            />

            <div className={styles.filmList}>
                {loading ? (
                    <p>Loading films...</p>
                ) : films.length > 0 ? (
                    films.map(film => <MovieCard key={film.id} film={film} />)
                ) : (
                    <Message
                        messageTitle="No films found..."
                        messageText="Check back later or add some films to your watchlist."
                    />
                )}
            </div>

            {watchlistError && (
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
        </div>
    );
}
