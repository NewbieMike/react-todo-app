import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Card = ({title}) => (
  <div className={styles.component}>
    <p className={title}>{ReactHtmlParser(title)}</p>
  </div>
);
Card.propTypes = {
  title: PropTypes.string,
};

export default Card;
