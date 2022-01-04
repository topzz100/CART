 const reducer = (state, action) => {
if (action.type === 'CLEAR'){
  return {...state, cart:[]}
}
}
export default reducer