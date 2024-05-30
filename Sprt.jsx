import React, { useEffect, useState } from 'react';
import "./sprt.css"

const API_KEY = 'db0fdf442cb6417fb7b61b83a2293af9';

const SportsNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${API_KEY}`;
      try {
        let res = await fetch(url);
        let data = await res.json();
        setNews(data.articles);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <p id="loading" className='error'>Loading...</p>;
  }

  if (error) {
    return <p className='error'>Error: {error}</p>;
  }

  return <Sprt data={news} />;
};

export function Sprt({ data }) {
  return (
    <div>
      <h1>Sports News</h1>
      {data.length === 0 ? (
        <p>No news available</p>
      ) : (
        data.map((article, index) => (
          <div key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p><strong>Source:</strong> {article.source.name}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))
      )}
    </div>
  );
}

export default SportsNews;
