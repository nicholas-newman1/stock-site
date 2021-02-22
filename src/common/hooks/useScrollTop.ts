import { useEffect } from 'react';

const useScrollTop = () => {
  useEffect(() => {
    document.querySelector('html')!.scrollTop = 0;
  }, []);
};

export default useScrollTop;
