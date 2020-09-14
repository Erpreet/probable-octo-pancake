import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux';
import toDosReducer from './reducers/todos';
import { addNewToDo } from './actions/todos';
import {Provider} from 'react-redux';

const store = createStore(toDosReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(addNewToDo("Research Redux"));
store.dispatch(addNewToDo("Review React"));

ReactDOM.render(
  <Provider store = {store}>
    <> </>
  </Provider>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

