import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas'; // Import your root saga

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Use Redux DevTools extension if available
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Redux store with middleware and Redux DevTools support
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
);

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
