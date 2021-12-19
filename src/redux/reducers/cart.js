const initValue = {
    cartItems : JSON.parse(localStorage.getItem('cartItems')) || []
}
const updateLocalStorage = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}
const cart = (state = initValue, { type, payload }) => {
    let cartItems = state.cartItems
    switch (type) {
        case 'UPDATE_CART':
            cartItems = [...state.cartItems.map((item) => item.idObat === payload.idObat ? payload : item)]
            updateLocalStorage(cartItems)
            return {
                ...state,
                cartItems
            }

        case 'ADD_TO_CART':
            const exist = state.cartItems.find((item)=> item.idObat === payload.idObat)
            if (exist){
                cartItems = [
                    ...state.cartItems.map((item) => {
                        if(item.idObat === exist.idObat){
                            item.qty += payload.qty
                        }
                        return item;
                    })
                ]
            }
            else{
                cartItems = [...state.cartItems, payload]
            }
            updateLocalStorage(cartItems)
            return { ...state, cartItems}

        case 'CLEAR_CART':
            localStorage.removeItem('cartItems')
            return initValue
        
        case 'REMOVE_FROM_CART':
            cartItems = state.cartItems.filter((item) => item.idObat != payload.idObat)
            updateLocalStorage(cartItems)
            return {...state, cartItems}
        default:
            return state
    }
}

export default cart;