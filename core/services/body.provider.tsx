import React, {
  createContext, PropsWithChildren, useCallback, useContext, useMemo, useState,
} from 'react';

enum BodyClass {
    noOverflow = 'no-overflow'
}

interface BodyContextValue {
    addClass: (className: BodyClass) => void;
    removeClass: (className: BodyClass) => void;
}

type BodyProviderValue = PropsWithChildren<{}>;

const BodyContext = createContext<BodyContextValue>({
  addClass: (className: BodyClass) => {},
  removeClass: (className: BodyClass) => {},
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
      addClass,
      removeClass,
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
