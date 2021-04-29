import {connect} from 'react-redux';
import SearchResult from './SearchResult';
import { getSearchedCardsForLists } from '../../redux/cardRedux';


const mapStateToProps = (state, props) => ({
  cards: getSearchedCardsForLists(state, props.match.params.string),
});

export default connect(mapStateToProps)(SearchResult);