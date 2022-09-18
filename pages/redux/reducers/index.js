import { combineReducers } from 'redux';
import loginUserReducer from './getStudents';
import getStudentsReducer from './getStudents';

const indexReducer = combineReducers({
    login: loginUserReducer,
    students: getStudentsReducer,
});

export default indexReducer;