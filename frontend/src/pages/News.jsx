import styles from "../styles/pages/News.module.css";
import { useState, useEffect } from "react";
import Sort from "../components/shared/Sort";
import { useFetchNews } from "../hooks/useFetchNews";
import Message from "../components/shared/Message";
import Pagination from "../components/shared/Pagination"
import Navbar from "../components/shared/Navbar"
import Searchbar from "../components/shared/Searchbar"
import Article from "../components/News/Article"

export default function News() {
    const [sortBy, setSortBy] = useState('title');
    const [orderBy, setOrderBy] = useState('asc');
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const newsPerPage = 6;

    const { news, loading, error, count } = useFetchNews(
        sortBy,
        orderBy,
        search,
        currentPage,
        newsPerPage
    );

    useEffect(() => {
        setCurrentPage(1);
    }, [sortBy, orderBy, search]);

    const totalPages = Math.max(1, Math.ceil(count / newsPerPage));

    return (
        <>
            <Navbar/>

            <div className={styles.header}>
                <div className={styles.search}>
                    <Searchbar
                        placeholder="Search news..."
                        SortComponent={
                            <Sort
                                options={["title", "views", "comments", "date"]}
                                onSortChange={setSortBy}
                                onOrderChange={setOrderBy}
                            />
                        }
                        onSearch={setSearch}
                    />
                </div>
            </div>
            
            <div className={styles.articles}>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    news.map(article => (
                        <Article key={article.id} article={article} />
                    ))
                )}
            </div>

            {error && (
                <Message
                    messageTitle="Something went wrong..."
                    messageText="It appears that the server is currently unavailable"
                />
            )}

            {!error && !loading && news.length === 0 && (
                <Message
                    messageTitle="No news found..."
                    messageText="There are no news matching your search criteria"
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