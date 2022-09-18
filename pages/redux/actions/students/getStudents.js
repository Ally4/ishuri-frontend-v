/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
    FETCH_STUDENTS_START, FETCH_STUDENTS_SUCCESS, FETCH_STUDENTS_FAIL } from '../actionTypes';

export const fetchStudentsStart = () => ({
  type: FETCH_STUDENTS_START,
});

export const fetchTripSuccess = (requests, role) => ({
  type: FETCH_STUDENTS_SUCCESS,
  requests,
  role
});

export const fetchStudentsFail = (error) => ({
  type: FETCH_STUDENTS_FAIL,
  error
});

export const fetchRequests = () => async (dispatch) => {
  dispatch(fetchStudentsStart());
  const token = localStorage.getItem('token');

  return axios
    .get('http://localhost:1234/api/v1/students', {
      headers: {
        token,
      },
    })
    .then((response) => {
      const { info, role } = response.data;
      dispatch(fetchStudentsSuccess(info, role));
      return response;
    })
    .catch((err) => dispatch(fetchStudentsFail(err.response.data.error))
    );
};