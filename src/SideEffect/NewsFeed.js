import React, { useState, useEffect } from "react";

// Request top hedline from https://newsapi.org/
// Memunculkan loading efek ketika fetching
// handle error
// membuat fungsi "Load More" dan "Refresh" pada button

const endpoint = "https://newsapi.org/v2/top-headlines?country=us&apiKey=db7fed283b2b41599ee47247876542f2";

function NewsFeed() {
  const defaultNews = {
    status: "ok",
    totalResults: 0,
    articles: [],
  };

  const [news, setNews] = useState(defaultNews);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [isRefresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setNews(defaultNews);
    setPage(1);
    setLoading(false);
    setRefresh(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${endpoint}&page=${page}`);
        const result = await response.json();
        setNews((curent) => {
          return {
            ...result,
            articles: [...curent.articles, ...result.articles],
            totalResults: result.totalResults,
            status: result.status,
          };
        });
        if (result.status !== "ok") {
          throw new Error("error!");
        }
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [page, isRefresh]);

  return (
    <>
      <h3>Top Headline</h3>
      {isLoading && <p>Loading..</p>}
      {isError && <p>Error CUY!</p>}

      <ol>
        {news.articles.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ol>
      {news.articles.length < parseInt(news.totalResults) ? (
        <button onClick={() => setPage((c) => c + 1)} disabled={isLoading}>
          Load More
        </button>
      ) : null}
      <button onClick={handleRefresh} disabled={isRefresh}>
        Refresh
      </button>
    </>
  );
}

export default NewsFeed;
