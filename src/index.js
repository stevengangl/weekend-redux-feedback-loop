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



//Reducer for support page



//Reducer for comments page



//Reducer for review page...All data will be displayed on this page





const storeInstance = createStore(
    combineReducers({
        //list of reducers will go here
        feeling
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
