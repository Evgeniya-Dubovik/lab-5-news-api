import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NewsApp from './NewsApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<NewsApp/>, document.getElementById('root'));
serviceWorker.unregister();
