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
    yield takeEvery('REMOVE_PROJECT', deleteProject);
    yield takeEvery('POST_PROJECT', postProject);    
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
}// end GET

// POST new Projects to database
function* postProject(action){
    try{
        yield axios.post('/project', action.payload);
        const nextAction = {type: 'FETCH_PROJECT'};
        yield put(nextAction)
    } catch(error) {
        // console.log(action.payload);
        yield console.log('POST Error Index.JS', error);
        alert('POST Error');
    }
} //end POST

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}// end SET

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// function* postProject

// Delete
function* deleteProject(action){
    const projectId = action.payload.projectId
    try{
        yield axios.delete(`/project/${projectId}`);
        const nextAction = {type: 'FETCH_PROJECT'};
        yield put(nextAction);
    } catch (error) {
        console.log('Delete Error', error);
        alert('Delete Error');
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
