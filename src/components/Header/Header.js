import React, { useState, useEffect, useContext } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Header.css';

import HeaderNavigation from './HeaderNavigation';
import MainHeader from './MainHeader';
import NavigationMobile from './NavigationMobile';
import useDeviceScreen from '../../hooks/use-device-screen';
import useScrollYDirection from '../../hooks/use-scroll-y-direction';
import { HeaderContext } from '../../contexts/header/header-context';

const Header = () => {
  const { cartOpen, mobileMenuOpen, dispatch } = useContext(HeaderContext);
  const { scrollingUp } = useScrollYDirection(true);
  const { isTabletScreen } = useDeviceScreen();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const getHeaderClasses = () => {
    if (scrollingUp || cartOpen || mobileMenuOpen) {
      return 'show';
    } else {
      return 'hide';
    }
  };

  const headerClasses = `header ${getHeaderClasses()}`;

  useEffect(() => {
    dispatch({ type: 'SET_MOBILE_MENU', mobileMenuOpen: mobileMenuVisible })
  }, [mobileMenuVisible, dispatch]); 

  useEffect(() => {
    setMobileMenuVisible(false);
  }, [isTabletScreen])

  const toggleMobileMenuHandler = () => {
    setMobileMenuVisible(prevMobileMenuVisible => !prevMobileMenuVisible);
  };

  const closeMobileMenuHandler = () => {
    setMobileMenuVisible(false);
  };

  return (
    
    <header className={ headerClasses }>
      <div className="header__container">
        <MainHeader
          onToggleMobileMenu={ toggleMobileMenuHandler }
          onCloseMobileMenu={ closeMobileMenuHandler }
        />
          <CSSTransition
            mountOnEnter
            unmountOnExit
            in={ mobileMenuVisible }
            timeout={ 300 }
            classNames={{
              enter: '',
              enterActive: 'open',
              exit: '',
              exitActive: 'close'
            }}>
            <NavigationMobile 
              onCloseMobileMenu={ closeMobileMenuHandler } 
            /> 
          </CSSTransition>
        <HeaderNavigation />
      </div>
    </header>
  );
};

export default Header;