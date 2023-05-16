import { useEffect } from 'react';
import {useLocation } from 'react-router-dom';

const SchrollPageTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
};

export default SchrollPageTop;
