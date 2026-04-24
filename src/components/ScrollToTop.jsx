import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Refresh AOS animations on navigation
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
