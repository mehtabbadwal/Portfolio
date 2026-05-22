import { useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './PageTransition.css';

function PageTransition({ children }) {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('entered');
  const prevPathname = useRef(location.pathname);

  useEffect(() => {
    if (location.pathname !== prevPathname.current) {
      prevPathname.current = location.pathname;
      setTransitionStage('exiting');
    }
  }, [location.pathname]);

  const handleTransitionEnd = () => {
    if (transitionStage === 'exiting') {
      setDisplayChildren(children);
      window.scrollTo(0, 0);
      setTransitionStage('entering');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionStage('entered');
        });
      });
    }
  };

  useEffect(() => {
    setDisplayChildren(children);
  }, [children]);

  return (
    <div
      className={`page-transition page-transition--${transitionStage}`}
      onTransitionEnd={handleTransitionEnd}
    >
      {transitionStage === 'exiting' ? displayChildren : children}
    </div>
  );
}

export default PageTransition;
