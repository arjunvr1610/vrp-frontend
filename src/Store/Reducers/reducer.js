import { combineReducers } from "redux";
import fileReducer from './fileReducer';
import routesReducer from './routesReducer';
import nodeReducer from './nodeReducer';
import modalReducer from './modalReducer';

const reducers = combineReducers({
    file: fileReducer,
    routes: routesReducer,
    nodes: nodeReducer,
    modals: modalReducer
});

export default reducers;