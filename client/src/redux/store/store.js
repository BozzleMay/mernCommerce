import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../combineReducers'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
console.log(store.getState())





export default store