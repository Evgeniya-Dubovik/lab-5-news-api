import React from 'react';
import './News.css'
import NewsItem from "./NewsItem";

class News extends React.Component {
  render() {
    return (
        <div className="news-container">
          {this.props.articles.map(a => NewsItem(a))}
        </div>
    )
  }
}

export default News;