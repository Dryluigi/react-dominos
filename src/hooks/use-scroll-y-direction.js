import React, { useEffect, useState, useCallback } from 'react';

const useScrollYDirection = (defaultValue = false) => {
  const [scrollDirection, setScrollDirection] = useState({
    scrollingUp: defaultValue,
    scrollingDown: defaultValue,
  });

  let lastYScroll = window.pageYOffset;

  const scrollHandler = useCallback(() => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastYScroll) {
      setScrollDirection({
        scrollingUp: false,
        scrollingDown: true,
      });
    } else {
      setScrollDirection({
        scrollingUp: true,
        scrollingDown: false,
      });
    }
  });

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHandler]);

  return {
    ...scrollDirection,
  };
}

export default useScrollYDirection;