import React from 'react';
import { Link } from 'react-router';

import css from './styles.css';

export default function App() {
  return <div className={css.red}>
    <div>Hello World</div>
    <Link to='about'>Go to about</Link>
  </div>;
}

App.displayname = 'App';
