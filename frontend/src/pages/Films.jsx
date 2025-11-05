import Navbar from "../components/shared/Navbar";
import Searchbar from "../components/shared/Searchbar";
import MovieCard from "../components/Films/MovieCard";
import Pagination from "../components/shared/Pagination";
import styles from "../styles/pages/Films.module.css";

export default function Films() {
    return (
        <div>
            <Navbar />
            <Searchbar placeholder="Search films..." />

            <div className={styles.filmList}>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>

            <div className={styles.pagination}>
                <Pagination />
            </div>
        </div>
    );
}
