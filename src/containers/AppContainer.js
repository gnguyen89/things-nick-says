import React, { PropTypes, Component } from 'react';
import css from '../styles/app.css';
import quoteService from '../services/quoteService';
import watchFirebase from '../services/firebaseClient';

export default class AppContainer extends Component {
  constructor() {
    super();

    this.updateTimer = this.updateTimer.bind(this);
    this.updateQuotes = this.updateQuotes.bind(this);

    watchFirebase('/quotes', this.updateQuotes);
    this.state = {
      quote: '',
      intervalRef: null,
    };
  }

  updateTimer() {
    const { quotes } = this.state;
    if (quotes && quotes.length) {
      this.setState(quoteService.getRandomQuote(quotes, this.state.quoteHat));
    }
  }
  updateQuotes(quotes) {
    const { intervalRef, quote: quoteInState } = this.state;

    this.setState(Object.assign(
      {},
      { quotes },
      quoteInState ? quoteService.getRandomQuote(quotes, this.state.quoteHat) : null,
    ));

    if (!intervalRef) {
      this.updateTimer();
      const newRef = setInterval(this.updateTimer, 9999);
      this.setState({ intervalRef: newRef });
    }
  }

  render() {
    const { children } = this.props;
    const { quote } = this.state;
    if (!quote) return null;
    return <div className={css.appContainer}>
      {children && React.cloneElement(this.props.children, {
        quote,
      })}
    </div>;
  }
}

AppContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

AppContainer.displayname = 'AppContainer';
