import Navbar from "../components/shared/Navbar";
import Searchbar from "../components/shared/Searchbar";
import MovieCard from "../components/Films/MovieCard";
import Pagination from "../components/shared/Pagination";
import styles from "../styles/pages/Films.module.css";
import { useState, useEffect } from "react";
import MoviesFilter from "../components/Films/MoviesFilter";
import Sort from "../components/shared/Sort";
import { useFetchFilms } from "../hooks/useFetchFilms";
import Message from "../components/shared/Message";

export default function Films() {
    const [sortBy, setSortBy] = useState('title');
    const [orderBy, setOrderBy] = useState('desc');
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const filmsPerPage = 9;

    const { films = [], loading, error, count } = useFetchFilms(sortBy, orderBy, search, currentPage, filmsPerPage);

    useEffect(() => {
      setCurrentPage(1);
    }, [sortBy, orderBy, search]);

    const totalPages = Math.max(1, Math.ceil((count || 0) / filmsPerPage));

    return (
        <div>
            <Navbar />
            <Searchbar
                placeholder="Search films..."
                showFilter={true}
                FilterComponent={<MoviesFilter />}
                SortComponent={
                    <Sort
                        options={["Title", "Rating", "Release date", "Length"]}
                        onSortChange={setSortBy}
                        onOrderChange={setOrderBy}
                    />
                }
                onSearch={(value) => setSearch(value)}
            />

            <div className={styles.filmList}>
                {loading ? (
                    <p>Loading...</p>
                ) : films.length > 0 ? (
                    films.map(film => <MovieCard key={film.id} film={film} />)
                ) : (
                    <Message
                        messageTitle='No movies found...'
                        messageText='There are no movies matching your search criteria'
                    />
                )}
            </div>

            {error && (
                <Message
                    messageTitle='Something went wrong...'
                    messageText='It appears that the server is currently unavailable'
                />
            )}

            <div className={styles.pagination}>
                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={(p) => setCurrentPage(p)}
                />
            </div>
        </div>
    );
}