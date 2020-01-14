const initialState = {
    currencyList: [],
    addedCurrency: [],
    total_exchange: 0,
    amount: 0,
    kurs: "",
    isLoading: true,
    isRejected: false,
}

const currency = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CURRENCY_FULFILLED':
            return {
                ...state,
                isLoading: false,
                currencyList: action.payload.data.rates,
            };
        case 'ADD_CURRENCY':
            state.addedCurrency.push(action.payload.data);
            return {
                ...state,
                isLoading: false,
                currencyList: action.payload.data.rates,
                addedCurrency: state.addedCurrency,
            }
        case 'GET_SELECTED_CURRENCY':
            return {
                ...state,
                isLoading: false,
                currencyList: action.payload.data.rates,
                addedCurrency: state.addedCurrency,
            }
        case 'REMOVE_SELECTED_CURRENCY':
            const dataAfterRemove = state.addedCurrency.filter(
                currency => currency.rates.kurs !== action.payload.data.rates.kurs
            );
            state.addedCurrency = dataAfterRemove;
            return {
                ...state,
                isLoading: false,
                currencyList: action.payload.data.rates,
                addedCurrency: state.addedCurrency,
            }
        default:
            return state;
    };
};

export default currency;