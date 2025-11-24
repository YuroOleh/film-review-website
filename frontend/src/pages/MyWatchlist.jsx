import Navbar from "../components/shared/Navbar";
import Searchbar from "../components/shared/Searchbar";
import MovieCard from "../components/Films/MovieCard";
import Pagination from "../components/shared/Pagination";
import styles from "../styles/pages/Films.module.css";
import { useState } from "react";
import MoviesFilter from "../components/Films/MoviesFilter";
import Sort from "../components/shared/Sort";
import { useFetchWatchlist } from "../hooks/useFetchWatchlist";
import { useFetchFilmsByIds } from "../hooks/useFetchFilmsByIds";
import { useMemo } from "react";
import Message from "../components/shared/Message";

export default function MyWatchlist() {
    const [sortBy, setSortBy] = useState("title");
    const [orderBy, setOrderBy] = useState("asc");
    const [search, setSearch] = useState("");
    const user = JSON.parse(localStorage.getItem("user"));
    const { watchlist, watchlistLoading, watchlistError } = useFetchWatchlist(user.id);

    const filmIds = useMemo(() => watchlist.map(item => item.filmId), [watchlist]);
    const { films, loading, error } = useFetchFilmsByIds(filmIds);

    const filmsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(films.length / filmsPerPage);
    const startIndex = (currentPage - 1) * filmsPerPage;
    const endIndex = startIndex + filmsPerPage;
    const currentFilms = films.slice(startIndex, endIndex);

    if (watchlist.length===0) {
        return (
            <>
                <Navbar />
                <br />
                <br />
                <Message
                    messageTitle="Looks like your watchlist is empty..."
                    messageText="Browse through movies at main page"
                />
            </>
        );
    }

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
                {currentFilms.map(film => (
                    <MovieCard key={film.id} film={film} />
                ))}
            </div>

            {watchlistError && <Message messageTitle='Something went wrong...' messageText='It appears that the server is currently unavailable'/>}


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