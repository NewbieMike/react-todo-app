import React from 'react';
import styles from './SearchResult.scss';
import propTypes from 'prop-types';
import Container from '../Container/Container';
import { searchData } from '../../data/dataStore';
import Card from '../Card/Card';
class SearchResult extends React.Component {

    static propTypes = {
      cards: propTypes.array,
    };
    render(){
      const {cards} = this.props;
      const {title} =  searchData;
      return(
        <Container>
          <section className={styles.component}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.cards}>
              {cards.map(cardData => (
                <Card key={cardData.id} {...cardData} />
              ))}
            </div>
          </section>
        </Container>
      );
    }
}

export default SearchResult;