"use client";

import {
  ReactNode,
  RefObject,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface ContainerRefProps {
  ref: RefObject<HTMLDivElement> | null;
}

export const ContainerRefContext = createContext<ContainerRefProps>({
  ref: null,
});

const ContainerRefProvider = ({
  containerRef,
  children,
}: {
  containerRef: RefObject<HTMLDivElement>;
  children: ReactNode;
}) => {
  const [ref, setRef] = useState(containerRef);
  useEffect(() => {
    setRef(containerRef);
  }, [containerRef]);
  return (
    <ContainerRefContext.Provider value={{ ref }}>
      {children}
    </ContainerRefContext.Provider>
  );
};

export default ContainerRefProvider;

export const useContainerRef = () => useContext(ContainerRefContext);
