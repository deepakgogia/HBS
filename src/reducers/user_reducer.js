
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

const iniState = [{
    name: 'Rahul',
    age: 27
}]
export function userReducer(state = iniState, action) {
    const { payload } = action;
    switch (action.type) {
        case ADD_USER:
            return [...state, payload];
        case UPDATE_USER:
            return [...state];
        case DELETE_USER:
            return [...state];
        default:
            return state;
    }
}
