import React, { useState, useRef, useEffect, useContext } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import { useDispatch } from 'react-redux';

import './Cart.css';

import CartDropdown from './CartDropdown';
import useDeviceScreen from '../../../hooks/use-device-screen';
import CartIcon from './CartIcon';
import { overlayActions } from '../../../store/overlay/overlay-slice';
import { HeaderContext } from '../../../contexts/header/header-context';

const Cart = () => {
  const { dispatch: headerDispatch } = useContext(HeaderContext);
  const dispatch = useDispatch();
  const { isTabletScreen } = useDeviceScreen();
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const dropDownRef = useRef();

  const toggleCartDropdown = () => {
    setShowCartDropdown(prevState => !prevState);
  };

  useEffect(() => {
    headerDispatch({ type: 'SET_CART', cartOpen: showCartDropdown });
  }, [headerDispatch, showCartDropdown]);

  useEffect(() => {
    dispatch(overlayActions.closeOverlay());
    setShowCartDropdown(false);
  }, [isTabletScreen, dispatch]);

  useEffect(() => {
    if (isTabletScreen) {
      if (showCartDropdown) {
        dispatch(overlayActions.openOverlay());
      } else {
        dispatch(overlayActions.closeOverlay());
      }
    }
  }, [showCartDropdown, dispatch, isTabletScreen]);

  const closeCartDropdownHandler = event => {
    if (dropDownRef.current.contains(event.target)) {
      return;
    }

    setShowCartDropdown(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeCartDropdownHandler);

    return () => {
      document.removeEventListener('mousedown', closeCartDropdownHandler);
    };
  }, []);

  const cartDropdownContent = !isTabletScreen
  ? showCartDropdown ? <CartDropdown /> : null
  : (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={ showCartDropdown }
      timeout={ 300 }
      classNames={{ 
        enter: '',
        enterActive: 'open',
        exit: '',
        exitActive: 'close',
      }}
      >
      <CartDropdown />
    </CSSTransition>
  );

  return (
    <div className="cart-btn__container" ref={ dropDownRef }>
      <CartIcon onToggleCartDropdown={ toggleCartDropdown } />
      { cartDropdownContent }
    </div>
  )
}

export default Cart;