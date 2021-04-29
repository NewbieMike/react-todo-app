import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Icon from '../Icon/Icon';
import {Link} from 'react-router-dom';
import List from '../List/ListContainer';
//import {settings} from '../../data/dataStore';
const icon = 'align-justify';

const Card = ({title}) => (
  <div className={styles.component}>
    <p className={title}>{ReactHtmlParser(title)}</p>
    <Link to='/' component={List}><Icon name ={icon} /></Link>
  </div>
);
Card.propTypes = {
  title: PropTypes.string,
};
{/*Card.defaultProps = {
  title: settings.defaultTitle,
};*/}
export default Card;


//list/:id