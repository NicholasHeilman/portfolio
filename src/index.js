import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';

// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects'

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_PROJECT', fetchProject );
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Database GET request
function* fetchProject() {
    try {
        const projectResponse = yield axios.get('/project');
        const nextAction = { type: 'SET_PROJECTS', payload: projectResponse.data };
        yield put(nextAction); 
    } catch (error) {
        console.log('GET Error', error);
        alert('GET Error');
    }
}

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    applyMiddleware(sagaMiddleware, logger),
);


sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
