import { combineReducers } from "redux";
import fileReducer from './fileReducer';

const reducers = combineReducers({
    file: fileReducer
});

export default reducers;