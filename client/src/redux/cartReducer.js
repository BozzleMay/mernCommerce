import { ActionTypes } from "./action-types"

const initialState = {
    products: [
      
    ]
    
}
const CartReducer = (state = initialState, action) => {
    switch (action.type){
        case ActionTypes.ADD_TO_CART:
            const inCart = state.products.some(item => item.id === action.payload._id  )
         

            if (inCart){
                console.log('is in cart')
            return {
                ...state, products: state.products.map(item => item.id === action.payload._id ? {
                    ...item, 
                    quantity: item.quantity + 1,
                   
                } : item ),
            } 
        }
            else {
                console.log('isnt in cart')
                return {
                    ...state, products: [
                        ...state.products, {
                            id: action.payload._id,
                            name: action.payload.name,
                            image: action.payload.image,
                            price: action.payload.price,
                            quantity: 1
                        }
                    ]
                }
            }
            
        case ActionTypes.REMOVE_FROM_CART:
            const isInCart = state.products.some(item => item.id === action.payload && item.quantity > 1  )
                console.log('payload', action.payload)
                if (isInCart){
            return {
                ...state, products: state.products.map(item => item.id === action.payload ? {
                    ...item, 
                 
                    quantity: item.quantity - 1,
                    
                   
                } : item ),
            } 
                } else {
                    return {
                        ...state, products: state.products.filter(item => item.id !== action.payload)
                    }
                }
        case ActionTypes.EMPTY_CART:
            return {
                products: []
            }
        default: 
        return state
    }
}
export default CartReducer