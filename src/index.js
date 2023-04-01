import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

//Reducer for feeling page
const feeling = (state = [], action) => {
if(action.type === 'FEELINGS'){
    return [...state, action.payload]
}
    return state
}


//Reducer for understanding page
const understanding = (state = [], action) => {
    if(action.type === 'UNDERSTANDING'){
        return [...state, action.payload]
    }
    return state
}


//Reducer for support page
const supported = (state = [], action) => {
    if(action.type === 'SUPPORT'){
        return [...state, action.payload]
    }
    return state
}


//Reducer for comments page
const comments = (state = [], action) => {
    if(action.type === 'COMMENTS'){
        return [...state, action.payload]
    }
    return state
}


//Reducer for review page...All data will be displayed on this page





const storeInstance = createStore(
    combineReducers({
        //list of reducers will go here
        feeling,
        understanding,
        supported,
        comments
    }),
    applyMiddleware(logger)
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
