import axios from 'axios';

export const getCurrency = () => {
    return {
        type: 'GET_CURRENCY',
        payload: axios.get('https://api.exchangeratesapi.io/latest?base=USD'),
    };
};