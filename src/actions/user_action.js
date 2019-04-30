import { ADD_USER, DELETE_USER, UPDATE_USER } from "../reducers/user_reducer";

export const addUser = (data) => ({
    type: ADD_USER,
    payload: data
})

export const updateUser = (data) => ({
    type: UPDATE_USER,
    payload: data
})

export const deleteUser = (data) => ({
    type: DELETE_USER,
    payload: data
})