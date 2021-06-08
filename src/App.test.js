import React from 'react';
import ReactDOM from 'react-dom';
import NewsApp from './NewsApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewsApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
