import {
    RECEIVE_DECKS,
    ADD_DECK,
    REMOVE_DECK,
  } from "./types";
  import { saveDeckTitle, getDeck, getDecks, removeDeck } from "../utils/data";
  
const receiveDecks = (decks) => {
    return {
      type: RECEIVE_DECKS,
      decks,
    };
  }
  
  export const handleReceiveDecks = () => {
    return dispatch => { 
      //todo: loading
      return getDecks()
        .then(decks => {
          dispatch(receiveDecks(decks));
        })
        .catch(err => console.log(err));
    };
  }

  const addDeck = (deck) => {
    return {
      type: ADD_DECK,
      deck,
    };
  }
  
  export const handleAddDeck = (title) => {
    return dispatch => {
      return saveDeckTitle(title)
        .then(deck => {
          dispatch(addDeck(deck));
        })
        .catch(err => console.log(err));
    };
  }
  
  const removeDeck = (title) => {
    return {
      type: REMOVE_DECK,
      title,
    };
  }
  
  export const handleRemoveDeck = (title) => {
    return dispatch => {
      return removeDeck(title)
        .then(() => dispatch(removeDeck(title)))
        catch((err) => console.log(err));
    };
  }