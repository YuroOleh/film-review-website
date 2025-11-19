import Navbar from "../components/shared/Navbar";
import Searchbar from "../components/shared/Searchbar";
import MovieCard from "../components/Films/MovieCard";
import Pagination from "../components/shared/Pagination";
import styles from "../styles/pages/Films.module.css";
import { useState } from "react";
import MoviesFilter from "../components/Films/MoviesFilter";
import Sort from "../components/shared/Sort";
import { useFetchFilms } from "../hooks/useFetchFilms";

export default function Films() {
    const [sortBy, setSortBy] = useState('title');
    const [orderBy, setOrderBy] = useState('asc');
    const { films, loading, error } = useFetchFilms(sortBy, orderBy);
    const filmsPerPage = 9;

    const totalPages = Math.ceil(films.length / filmsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * filmsPerPage;
    const endIndex = startIndex + filmsPerPage;

    const currentFilms = films.slice(startIndex, endIndex);

    return (
        <div>
            <Navbar />
            <Searchbar placeholder="Search films..." showFilter={true} FilterComponent={<MoviesFilter />} SortComponent={
                <Sort
                    options={[
                    "Name",
                    "Rating",
                    "Release date",
                    "Length"
                    ]}

                    onSortChange={setSortBy}
                    onOrderChange={setOrderBy}
                />}
            />

            <div className={styles.filmList}>
                {currentFilms.map(film => (
                    <MovieCard film={film} />
                ))}
            </div>

            <div className={styles.pagination}>
                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage}/>
            </div>

        </div>
    );
}
