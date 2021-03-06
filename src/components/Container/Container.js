import React from 'react';
import styles from './Container.scss';
import propTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Container = ({children}) =>{
  return(
    <div className={styles.component}>{children}</div>
  );
};

Container.propTypes = {
  children: propTypes.node,
};
export default Container;