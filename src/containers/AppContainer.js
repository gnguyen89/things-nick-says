import React, { PropTypes } from 'react';
import css from '../styles/app.css';

export default function AppContainer(props) {
  return <div className={css.appContainer}>
    {props.children}
  </div>;
}

AppContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

AppContainer.displayname = 'AppContainer';
