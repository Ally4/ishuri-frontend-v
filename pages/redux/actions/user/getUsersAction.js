import { FETCH_STUDENTS_START, FETCH_STUDENTS_SUCCESS, FETCH_STUDENTS_FAIL } from '../actionsTypes/ActionsTypes'
import axios from 'axios'

export const getStudentsAction = () => async (dispatch) => {
    try {
        dispatch(getUserRequest())

        const token = await localStorage.getItem('token')
        const res = await axios.get('http://localhost:1234/api/v1/signin', {
            headers: {
                'Authorization': token
            }
        });
        return dispatch(getUsersSuccess(res))
    } catch (err) {
        if (err.response) {
            // console.log(err.response.data);
            const errorMessage = await err.response.data;
            return dispatch(getUsersFail(errorMessage))

        }else{
            return dispatch(getUsersFail('Network Fails'))
        }

    }
}

export const getUserRequest = () => {
    return {
        type: FETCH_STUDENTS_START
    }
}

export const getUsersSuccess = (data) => {
    return {
        type: FETCH_STUDENTS_SUCCESS,
        payload: data
    }
}

export const getUsersFail = (error) => {
    return {
        type: FETCH_STUDENTS_FAIL,
        payload: error
    }
}

