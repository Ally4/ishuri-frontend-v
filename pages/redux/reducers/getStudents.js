import {
    FETCH_STUDENTS_START,
    FETCH_STUDENTS_SUCCESS,
    FETCH_STUDENTS_FAIL
  } from '../actions/actionsTypes/ActionsTypes';
  
  const initialState = {
    message: "",
    data: [],
    loading:false,
    error: null
  };
  
  const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case FETCH_STUDENTS_START:
        return {
          ...state, loading: true
        };
  
      case FETCH_STUDENTS_SUCCESS:
        return {
          ...state,
          data: action.data,
          loading: false
        };
      case FETCH_STUDENTS_FAIL:
        return {
          ...state, error: action.message, loading: false
        };
  
      default: return state;
    }
  };
  
  export default reducer;
  