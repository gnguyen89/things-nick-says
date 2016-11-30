import React from 'react';

import css from './styles.css';

export default function App() {
  return <div className={css.container}>
    <div className={css.quoteContainer}>
      <blockquote className={css.quote}>
        It&apos;s harder to get hard when you&apos;re old.
        <cite>Nick Ng</cite>
      </blockquote>
    </div>
  </div>;
}

App.displayname = 'App';
