const headerReducer = (state, action) => {
  switch(action.type) {
    case 'SET_MOBILE_MENU':
      return {
        ...state,
        mobileMenuOpen: action.mobileMenuOpen
      };
    case 'SET_CART':
      return {
        ...state,
        cartOpen: action.cartOpen
      };
    default:
      return {
        ...state,
      };
  }
};  

export default headerReducer;