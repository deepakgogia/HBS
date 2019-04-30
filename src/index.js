import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { userReducer } from './reducers/user_reducer';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

//const ourStore = createStore(userReducer, applyMiddleware(thunk));

// ReactDOM.render(<Provider store={ourStore}><App /></Provider>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

function fetchApi() {
    return fetch('ChannelJson.json')
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


// const iniState = [{
//     name: 'Rahul',
//     age: 27
// }]

// function reducer(state = iniState, action) {
//     let found;
//     switch (action.type) {
//         case 'ADD':
//             return [...state, action.payload]
//         case 'UPDATE':
//             found = state.find(z => z.name === action.payload.lookFor)
//             const notFound = state.filter(z => z.name !== action.payload.lookFor)
//             const newState = { ...found }
//             newState.name = action.payload.name;
//             newState.age = action.payload.age;
//             return [...notFound, newState]
//         case 'DELETE':
//             found = state.filter(z => z.name !== action.payload)
//             return [...found]
//         default:
//             return [...state]
//     }
// }
// const store = createStore(reducer)

// const addUserDetails = {
//     type: 'ADD',
//     payload: {
//         name: 'Amber', age: 24
//     }
// }
// const updateUserDetails = {
//     type: 'UPDATE',
//     payload: {
//         lookFor: 'Rahul', name: 'SWA', age: 27
//     }
// }
// const deleteUserDetails = {
//     type: 'DELETE',
//     payload: 'Rahul'
// }
// store.dispatch(addUserDetails)
// console.log(store.getState())
// store.dispatch(updateUserDetails)
// console.log(store.getState())
