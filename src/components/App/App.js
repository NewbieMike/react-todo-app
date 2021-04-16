import React from 'react';
import styles from './App.scss';
import List from '../List/List'
import PropTypes from 'prop-types';
import {pageContents, listData} from '../../data/dataStore';
class App extends React.Component {
  render() {
    return (
      <div id="app">
        <main className={styles.component}>
          <h1 className={styles.title}>{pageContents.title}</h1>
          <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
          <List {...listData} />
        </main>
      </div>
    )
  }
}

export default App;