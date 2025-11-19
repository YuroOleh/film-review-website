import Navbar from "../components/shared/Navbar";
import Searchbar from "../components/shared/Searchbar";
import Pagination from "../components/shared/Pagination";
import Article from "../components/News/Article";
import styles from "../styles/pages/News.module.css";
import { useState } from "react";
import Sort from "../components/shared/Sort";
import { useFetchNews } from "../hooks/useFetchNews";

export default function News() {
    const [sortBy, setSortBy] = useState('title');
    const [orderBy, setOrderBy] = useState('asc');
    const [search, setSearch] = useState('');
    const { news, loading, error } = useFetchNews(sortBy, orderBy, search);
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
                    <Searchbar placeholder="Search news..." SortComponent={
                <Sort
                    options={[
                    "Title",
                    "Views",
                    "Comments",
                    "Date"
                    ]}

                    onSortChange={setSortBy}
                    onOrderChange={setOrderBy}
                />}

                onSearch={setSearch}
            />
                </div>
            </div>
            
            
            <div className={styles.articles}>
                {currentNews.map(article => (
                    <Article article={article} />
                ))}
            </div>
            

            <div className={styles.pagination}>
                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage}/>
            </div>
            
        </>
    );
}
