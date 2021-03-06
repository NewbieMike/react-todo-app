import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import FAQ from '../FAQ/FAQ';
//import Result from '../Result/Result';
import {BrowserRouter, Route} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import {AnimatedSwitch} from 'react-router-transition';
import styles from './App.scss';
import List from '../List/ListContainer';
import SearchResult from '../SearchResult/SearchResultContainer';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path='/' component={Home} />
        <Route exact path="/list/:id" component={List} />
        <Route exact path="/search/:string" component={SearchResult} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/faq' component={FAQ} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;

//<Route exact path='/search/' component={Result} />