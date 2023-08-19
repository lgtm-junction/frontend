import Alert from "@/components/global/Alert";
import React, {
  PropsWithChildren,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

export interface AlertContextType {
  openAlert: (children?: ReactNode) => void;
  closeAlert: () => void;
}

export const AlertContext = React.createContext<AlertContextType>(
  null as unknown as AlertContextType
);

export const AlertProvider: React.FC<PropsWithChildren> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [children, setChildren] = useState<ReactNode>(null);

  const handleOpenAlert = useCallback((children?: ReactNode) => {
    setChildren(children);
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setChildren(null);
  }, []);

  return (
    <AlertContext.Provider
      value={{ openAlert: handleOpenAlert, closeAlert: handleClose }}
    >
      {props.children}
      <Alert isOpen={isOpen}>{children}</Alert>
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
