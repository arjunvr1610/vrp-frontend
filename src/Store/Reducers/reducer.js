import { combineReducers } from "redux";
import fileReducer from './fileReducer';
import routesReducer from './routesReducer';
import nodeReducer from './nodeReducer';
import modalReducer from './modalReducer';
import solutionReducer from './solutionReducer';

const reducers = combineReducers({
  file: fileReducer,
  routes: routesReducer,
  nodes: nodeReducer,
  modals: modalReducer,
  solution: solutionReducer,
});

export default reducers;