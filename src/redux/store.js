import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import {logger} from 'redux-logger'
import todo from './todoReducer'

const reducers = combineReducers({
    todo
    
    })
    const middleware = applyMiddleware(logger, thunk, promise)
    const store = createStore( reducers, middleware)
    export default store