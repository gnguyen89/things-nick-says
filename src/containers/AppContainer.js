import React, { PropTypes, Component } from 'react';
import css from '../styles/app.css';
import quoteService from '../services/quoteService';

export default class AppContainer extends Component {
  constructor() {
    super();

    this.updateTimer = this.updateTimer.bind(this);
    setInterval(this.updateTimer, 9999);
    this.state = quoteService.getRandomQuote();
  }

  updateTimer() {
    this.setState(quoteService.getRandomQuote(this.state.quoteHat));
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
