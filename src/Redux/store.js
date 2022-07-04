// NOTE: use this store variable to create a store.
import { applyMiddleware, compose, legacy_createStore } from "redux";
import { reducer } from "./AppReducer/reducer";
import thunk from "redux-thunk";


// const rootReducers = combineReducers(reducer)

const composeEnhancers = window.__redux_devtools_extension_compose || compose;


export const store =legacy_createStore(reducer,composeEnhancers(applyMiddleware(thunk))) ;

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
