const reducer = (state, action) => {
  if (action.type === 'CLEAR'){
  return {...state, cart:[]}
  }
  if(action.type === 'REMOVE'){
    const tempCart = state.cart.filter((cartItem) => cartItem.id !== action.payload)
    return{...state, cart: tempCart}
  }
  if(action.type === 'INCREASE'){
    const tempCart = state.cart.map((cartItem) => {
      if(cartItem.id === action.payload){
        return {...cartItem, amount : cartItem.amount + 1}
      }
      return cartItem
    })
    return {...state, cart: tempCart}
  }
  if(action.type === 'DECREASE'){
    const tempCart = state.cart.map((cartItem) => {
      if(cartItem.id === action.payload){
        return {...cartItem, amount : cartItem.amount - 1}
      }
      return cartItem
    }).filter(cartItem => cartItem.amount !== 0)
    return {...state, cart: tempCart}
  }

  if(action.type === 'GET_TOTALS'){
    let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
       cartTotal.amount += cartItem.amount
       cartTotal.total += (cartItem.amount*cartItem.price)

       return cartTotal

    }, 
      {
        total: 0,
        amount: 0
      })
      total = parseFloat(total.toFixed(2))
    return{ ...state, total, amount }
  }
}
export default reducer