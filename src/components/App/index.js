import React from 'react';
import quoteService from '../../services/quoteService';
import quoteTypes from '../../utils/quoteTypes';

import css from './styles.css';

function renderQuote(quote) {
  return <blockquote className={css.quote}>
    {quote.quote}
    <cite>Nick Ng</cite>
  </blockquote>;
}

function renderSituation(situation) {
  return <blockquote className={css.quote}>
    {situation.quote}
    <cite>{situation.situation}</cite>
  </blockquote>;
}

function renderConversation(conversation) {
  return <blockquote className={css.quote}>
    {conversation.quote}
  </blockquote>;
}

export default function App() {
  const quote = quoteService.getRandomQuote();
  return <div className={css.container}>
    <div className={css.quoteContainer}>
      {quote.type === quoteTypes.quote && renderQuote(quote)}
      {quote.type === quoteTypes.conversation && renderConversation(quote)}
      {quote.type === quoteTypes.situation && renderSituation(quote)}
    </div>
  </div>;
}

App.displayname = 'App';
