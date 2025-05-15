
import React, { useState, useEffect } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';
import './News.css';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const updateNews = async () => {
    // Don't make request if we're already loading or have no more articles
    if (loading || !hasMore) return;

    try {
      setLoading(true);
      props.setProgress(10);
      setError(null);
      
      document.title = `${capitalize(props.category)} - NewsPulse`;
      const url = `https://api.mediastack.com/v1/news?access_key=${props.apikey}&keywords=${props.category}&countries=${props.country}&limit=${props.pagesize}&offset=${(page - 1) * props.pagesize}`;
      
      const response = await fetch(url);
      props.setProgress(30);
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, ${errorText}`);
      }
      
      const data = await response.json();
      props.setProgress(70);
      
      if (data.error) {
        throw new Error(data.error.message || 'Unknown API error');
      }
      
      if (data.data && data.data.length > 0) {
        setArticles(prevArticles => 
          page === 1 ? data.data : [...prevArticles, ...data.data]
        );
        setTotalResults(data.pagination?.total || 0);
        setHasMore(page * props.pagesize < (data.pagination?.total || 0));
      } else {
        setHasMore(false);
        if (page === 1) setArticles([]);
      }
      
      props.setProgress(100);
    } catch (error) {
      console.error("Error fetching news:", error);
      // Only show error if we have no articles
      if (articles.length === 0) {
        setError(error.message);
      }
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    updateNews();
  }, [page, props.country, props.category]);

  const fetchMoreData = () => {
    if (!loading && hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <div className={`news-container ${props.mode === 'dark' ? 'dark-mode' : ''}`}>
      <h1 className={`news-heading ${props.mode === 'dark' ? 'text-white' : 'text-dark'}`}>
        NewsPulse - Top {capitalize(props.category)} Headlines
      </h1>
      
      {error && articles.length === 0 && (
        <div className={`error-message ${props.mode === 'dark' ? 'dark-error' : ''}`}>
          {error.includes('rate_limit_reached') 
            ? "We've hit our API limit. Please try again later." 
            : error}
        </div>
      )}
      
      {articles.length === 0 && !error && loading && (
        <div className="spinner-container">
          <Spinner mode={props.mode} />
        </div>
      )}
      
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={articles.length > 0 && <div className="spinner-container"><Spinner mode={props.mode} /></div>}
        endMessage={
          articles.length > 0 && (
            <p className={`end-message ${props.mode === 'dark' ? 'text-white' : 'text-dark'}`}>
              <b>You've reached the end of today's news</b>
            </p>
          )
        }
      >
        <div className="news-grid">
          {articles.map((element, index) => (
            <Newsitem
              key={`${element.url}-${index}`}
              mode={props.mode}
              title={element.title}
              desc={element.description}
              imageurl={element.image}
              newsurl={element.url}
              author={element.author}
              time={element.publishedAt}
              source={element.source}
            />
          ))}
        </div>
      </InfiniteScroll>
      
      {articles.length === 0 && !loading && !error && (
        <div className={`no-articles ${props.mode === 'dark' ? 'dark-no-articles' : ''}`}>
          <h3>No articles found for this category</h3>
          <p>Try refreshing or checking back later for updates</p>
        </div>
      )}
    </div>
  );
};

News.defaultProps = {
  pagesize: 12,
  country: 'us',
  category: 'general',
  totalResults: 0
};

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
  apikey: PropTypes.string.isRequired,
  mode: PropTypes.string,
  setProgress: PropTypes.func
};

export default News;