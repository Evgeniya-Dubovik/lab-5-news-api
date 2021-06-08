import React from 'react';
import './SourceItem.css'

export default function SourceItem(props) {
  return <button className="source__item" id={props.id}>{props.name}</button>;
}
