import React, {
  createContext, PropsWithChildren, useContext, useState,
} from 'react';

interface CursorContextValue {
    visible: boolean;
    setVisible: (visible: boolean) => void;
}

type CursorProviderValue = PropsWithChildren<{}>;

const CursorContext = createContext<CursorContextValue>({
  visible: true,
  setVisible: () => {},
});

const CursorProvider = ({
  children,
}: CursorProviderValue) => {
  const [visible, setVisible] = useState(true);

  return (
    <CursorContext.Provider value={{
      visible,
      setVisible,
    }}
    >
      {children}
    </CursorContext.Provider>
  );
};

const useCursorContext = () => useContext(CursorContext);

export {
  CursorProvider,
  useCursorContext,
};
