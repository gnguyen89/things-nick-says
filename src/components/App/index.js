import React, { PropTypes } from 'react';
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

export default function App({ quote }) {
  return <div className={css.container}>
    {quote && <div className={css.quoteContainer}>
      {quote.type === quoteTypes.quote && renderQuote(quote)}
      {quote.type === quoteTypes.conversation && renderConversation(quote)}
      {quote.type === quoteTypes.situation && renderSituation(quote)}
    </div>
    }
  </div>;
}

App.displayname = 'App';

App.propTypes = {
  quote: PropTypes.object,
};
