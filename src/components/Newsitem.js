
import React from "react";
import PropTypes from 'prop-types';
import './NewsItem.css';

const Newsitem = (props) => {
    const { title, desc, imageurl, newsurl, author, time, source, mode } = props;
    
    return (
        <div className={`news-item ${mode === 'dark' ? 'dark-mode' : ''}`}>
            <div className="news-item-image-container">
                <img 
                    src={imageurl || "https://images.unsplash.com/photo-1722684768315-11fc753354f6?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
                    className="news-item-image" 
                    alt={title || "News image"} 
                />
                <span className="news-item-source">{source || "Unknown"}</span>
            </div>
            <div className="news-item-content">
                <h3 className="news-item-title">{title.slice(0, 60) || "No title available"}..</h3>
                <p className="news-item-desc">{desc.slice(0, 30) || "No description available"}...</p>
                
                <div className="news-item-footer">
                    <div className="news-item-meta">
                        <span className="author">{author ? `By ${author}` : "Author unknown"}</span>
                        <span className="time">{time ? new Date(time).toLocaleString() : 'Date unknown'}</span>
                    </div>
                    <a 
                        href={newsurl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="news-item-button"
                    >
                        Read More →
                    </a>
                </div>
            </div>
        </div>
    );
};

Newsitem.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    imageurl: PropTypes.string,
    newsurl: PropTypes.string.isRequired,
    author: PropTypes.string,
    time: PropTypes.string,
    source: PropTypes.string,
    mode: PropTypes.string
};

export default Newsitem;