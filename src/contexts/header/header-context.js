import React, { useReducer } from 'react';
import headerReducer from './header-reducer';

const HEADER_CONTEXT_DEFAULT = {
  cartOpen: false,
  mobileMenuOpen: false,
};

const HeaderContext = React.createContext(HEADER_CONTEXT_DEFAULT);

const HeaderProvider = (props) => {
  const [state, dispatch] = useReducer(headerReducer, HEADER_CONTEXT_DEFAULT);

  return (
    <HeaderContext.Provider value={{
      cartOpen: state.cartOpen,
      mobileMenuOpen: state.mobileMenuOpen,
      dispatch,
    }}>
      { props.children }
    </HeaderContext.Provider>
  );
;}

export {
  HeaderContext,
  HeaderProvider
};