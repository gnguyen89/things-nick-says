import React, { PropTypes, Component } from 'react';
import css from '../styles/app.css';
import quoteService from '../services/quoteService';

export default class AppContainer extends Component {
  constructor() {
    super();

    this.updateTimer = this.updateTimer.bind(this);
    setInterval(this.updateTimer, 9999);
    const quote = quoteService.getRandomQuote();
    this.state = {
      quote,
    };
  }

  updateTimer() {
    this.setState({ quote: quoteService.getRandomQuote() });
  }

  render() {
    const { children } = this.props;
    const { quote } = this.state;
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
