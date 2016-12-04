import React from 'react';
import quoteService from '../../services/quoteService';

import css from './styles.css';

export default function App() {
  const quote = quoteService.getRandomQuote();
  return <div className={css.container}>
    <div className={css.quoteContainer}>
      <blockquote className={css.quote}>
        {quote}
        <cite>Nick Ng</cite>
      </blockquote>
    </div>
  </div>;
}

App.displayname = 'App';
