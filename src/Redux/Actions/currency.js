import axios from 'axios';

export const getCurrency = () => {
    return {
        type: 'GET_CURRENCY',
        payload: axios.get('https://api.exchangeratesapi.io/latest?base=USD'),
    };
};
export const addCurrency = (kurs) => {
    return {
        type: 'ADD_CURRENCY',
        payload: axios.get(`https://api.exchangeratesapi.io/latest?base=${kurs}`),
    };
};
export const getSelectedCurrency = (kurs) => {
    return {
        type: 'GET_SELECTED_CURRENCY',
        kurs,
    };
};
export const remiveSelectedCurrency = (kurs) => {
    return {
        type: 'REMOVE_SELECTED_CURRENCY',
        kurs,
    };
};