import Navbar from "../components/shared/Navbar";
import Searchbar from "../components/shared/Searchbar";
import Pagination from "../components/shared/Pagination";
import Article from "../components/News/Article";
import styles from "../styles/pages/News.module.css";
import { useState } from "react";
import Sort from "../components/shared/Sort";

export default function News() {
    const news = Array.from({ length: 100 }, (_, i) => <Article />);
    const newsPerPage = 6;

    const totalPages = Math.ceil(news.length / newsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * newsPerPage;
    const endIndex = startIndex + newsPerPage;

    const currentNews = news.slice(startIndex, endIndex);

    return (
        <>
            <Navbar/>
            <div className={styles.header}>
                <div className={styles.search}>
                    <Searchbar placeholder="Search news by film..." SortComponent={
                <Sort
                    options={[
                    "Title",
                    "Views",
                    "Comments",
                    "Date"
                    ]}
                />}
            />
                </div>
            </div>
            
            
            <div className={styles.articles}>
                {currentNews}
            </div>
            

            <div className={styles.pagination}>
                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage}/>
            </div>
            
        </>
    );
}
