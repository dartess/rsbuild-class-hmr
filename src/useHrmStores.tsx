import { useState, useEffect } from 'react';

import { Features } from './Features';

export const useHrmStores = () => {
  const [rootStore, setRootStore] = useState(() => new Features());

  useEffect(() => {
    if (import.meta.webpackHot) {
      import.meta.webpackHot.accept('./Features', () => {
        console.log('changed!')
        setRootStore(new Features())
      });
    }
  }, []);

  return rootStore;
};
