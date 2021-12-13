const initValue = {
    productList: []
}

const products = (state = initValue, { type, payload }) => {
    switch (type) {
        case 'SET_PRODUCT':
            return { ...state, productList: payload }

        case 'CLEAR_PRODUCT':
            return initValue
        default:
            return state
    }
}

export default products;