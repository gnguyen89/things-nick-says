import React from 'react';

import css from './styles.css';

export default function App() {
  return <div className={css.container}>
    <div className={css.quoteContainer}>
      <blockquote className={css.quote}>
        Courage is not the absence of fear, but rather the judgement that something else is more important than fear.
        <cite>Someone famous</cite>
      </blockquote>
    </div>
  </div>;
}

App.displayname = 'App';
