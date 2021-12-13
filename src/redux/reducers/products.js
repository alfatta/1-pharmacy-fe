const initValue = {
    previousPage : null,
    nextPage : null,
    page : 1,
    productList: []
}

const products = (state = initValue, { type, payload }) => {
    switch (type) {
        case 'SET_PRODUCT':
            return { ...state, productList: payload }

        case 'CLEAR_PRODUCT':
            return initValue
        
        case 'SET_PAGE':
            return {...state,...payload}
        default:
            return state
    }
}

export default products;