 const reducer = () => {
if (action.type === 'REMOVE'){
  return {...state, cart:[]}
}
}
export default reducer