import { combineReducers } from "redux";
import fileReducer from './fileReducer';
import routesReducer from './routesReducer';

const reducers = combineReducers({
    file: fileReducer,
    routes: routesReducer
});

export default reducers;