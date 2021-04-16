import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
class Column extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
      }

  render() {
    return (
      <section className={styles.component}>
          <h3 className={styles.title}>{this.props.title}</h3>
      </section>
    )
  }
}

export default Column;
