import React from 'react';
import './NewsItem.css'

export default function NewsItem(props) {
  return (
      <div className="news__item">
        <div className="news__meta">
          <div className="news__meta-photo"
               style={{backgroundImage: `url("${props.urlToImage || 'img/placeholder.jpg'}")`}}/>
        </div>
        <a className="news__item-link" href={props.url}>
          <div className="news__description">
            <h2 className="news__description-title">{props.title}</h2>
            <h3 className="news__description-source">{props.source.name}</h3>
            <p className="news__description-content">{props.description}</p>
            <p className="news__read-more">
            </p>
          </div>
        </a>
      </div>
  );
}