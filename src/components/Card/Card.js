import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = props => (
    <div className={styles.component}>
        <p className={props.titleText}>{ReactHtmlParser(props.titleText)}</p>
    </div>
    )
    Card.propTypes = {
        titleText: PropTypes.string,
      };

export default Card;
