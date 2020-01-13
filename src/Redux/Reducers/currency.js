const initialState = {
    currencyList: [],
    isLoading: true,
    isRejected: false,
}

const currency = (state = initialState, action) => {
    switch (action.type){
        case 'GET_CURRENCY_FULFILLED':
            return {
                ...state,
                isLoading: false, 
                currencyList: [],
            };
        default: 
            return state;
    };
};

export default currency;