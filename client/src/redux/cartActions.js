import {ActionTypes} from './action-types'

export const addToCart = (product) => {
    return { type: ActionTypes.ADD_TO_CART,
        payload: product }
}
export const removeFromCart = (id) => {
  return { type: ActionTypes.REMOVE_FROM_CART,
      payload: id 
      }
      
}

export const emptyCart = () => {
    return { type:  ActionTypes.EMPTY_CART}
  }