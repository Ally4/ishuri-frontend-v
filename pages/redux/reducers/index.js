import { combineReducers } from 'redux';
import loginUserReducer from './getStudents';
import getStudentsReducer from './getStudents';

const indexReducer = combineReducers({
    login: loginUserReducer,
    getStudents: getStudentsReducer,
});

export default indexReducer;