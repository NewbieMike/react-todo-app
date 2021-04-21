import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
//import {settings} from '../../data/dataStore';
const Card = ({title}) => (
  <div className={styles.component}>
    <p className={title}>{ReactHtmlParser(title)}</p>
  </div>
);
Card.propTypes = {
  title: PropTypes.string,
};
{/*Card.defaultProps = {
  title: settings.defaultTitle,
};*/}
export default Card;
