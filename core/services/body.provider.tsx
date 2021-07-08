import React, {
  createContext, PropsWithChildren, useCallback, useContext, useMemo, useState,
} from 'react';

enum BodyClass {
  noOverflow = 'no-overflow',
  showPointer = 'show-pointer',
}

interface BodyContextValue {
  addBodyClass: (className: BodyClass) => void;
  removeBodyClass: (className: BodyClass) => void;
}

type BodyProviderValue = PropsWithChildren<{}>;

const BodyContext = createContext<BodyContextValue>({
  addBodyClass: (className: BodyClass) => { },
  removeBodyClass: (className: BodyClass) => { },
});

const BodyProvider = ({
  children,
}: BodyProviderValue) => {
  const body = useMemo(() => (process.browser
    ? document.querySelector('body')
    : null),
  []);

  const addClass = useCallback((className: BodyClass) => {
    body?.classList.add(className);
  }, [body]);

  const removeClass = useCallback((className: BodyClass) => {
    body?.classList.remove(className);
  }, [body]);

  return (
    <BodyContext.Provider value={{
      addBodyClass: addClass,
      removeBodyClass: removeClass,
    }}
    >
      {children}
    </BodyContext.Provider>
  );
};

const useBodyContext = () => useContext(BodyContext);

export {
  BodyClass,
  BodyProvider,
  useBodyContext,
};
