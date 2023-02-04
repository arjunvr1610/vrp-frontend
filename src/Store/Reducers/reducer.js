import { combineReducers } from "redux";
import fileReducer from './fileReducer';
import routesReducer from './routesReducer';
import nodeReducer from './nodeReducer'

const reducers = combineReducers({
    file: fileReducer,
    routes: routesReducer,
    nodes: nodeReducer
});

export default reducers;