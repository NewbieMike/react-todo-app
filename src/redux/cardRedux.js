import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({cards},columnId) => cards.filter(card => card.columnId == columnId);

export const getSearchedCardsForLists = ({cards}, searchString) => cards.filter(card => new RegExp(searchString, 'i').test(card.title));
// action name creator
const reducerName = 'cards'; // jedna z nazwwłaściwości, które znajdują się w zakładce Redux -> State -> Tree (app, columns,lists,cards)
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');// użycie literału szablonowego 'TEST' = 'app/columns/TEST'

// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}