import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

// Reducers.
import { uiReducer } from '../reducers/uiReducer';
import { authReducer } from '../reducers/authReducer';

// Middleware For Asynchronous Requests.
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Combination Of Reducers.
const reducers = combineReducers({
  ui: uiReducer,
  auth: authReducer,
});

// Store.
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
