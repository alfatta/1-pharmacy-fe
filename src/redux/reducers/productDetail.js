const initValue = {
    productData: {}
}

const productDetail = (state = initValue, { type, payload }) => {
    switch (type) {
        case 'SET_PRODUCT_DETAIL':
            return { ...state, productData: payload }

        case 'CLEAR_PRODUCT_DETAIL':
            return initValue
        
        default:
            return state
    }
}

export default productDetail;