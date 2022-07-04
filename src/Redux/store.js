// NOTE: use this store variable to create a store.
import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { reducer as AppReducer } from "./AppReducer/reducer";
import {reducer as AuthReducer} from "./AuthReducer/reducer";
import thunk from "redux-thunk";


const rootReducers = combineReducers({AppReducer,AuthReducer})

const composeEnhancers = window.__redux_devtools_extension_compose || compose;


export const store =legacy_createStore(rootReducers,composeEnhancers(applyMiddleware(thunk))) ;

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
