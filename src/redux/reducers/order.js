const initValue = {
    orderList: []
}

const order = (state = initValue, { type, payload }) => {
    switch (type) {
        case 'SET_ORDER':
            return { ...state, orderList: payload }

        case 'CLEAR_ORDER':
            return initValue
        default:
            return state
    }
}

export default order;