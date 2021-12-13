const initValue = {
    categoryList: []
}

const category = (state = initValue, { type, payload }) => {
    switch (type) {
        case 'SET_CATEGORY':
            return { ...state, categoryList: payload }

        case 'CLEAR_CATEGORY':
            return initValue
        default:
            return state
    }
}

export default category;