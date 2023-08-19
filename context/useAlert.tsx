import Alert from "@/components/global/Alert";
import React, { PropsWithChildren, useContext, useState } from "react";

export interface AlertContextType {
  setOpen: () => void;
}

export const AlertContext = React.createContext<AlertContextType>(
  null as unknown as AlertContextType
);

export const AlertProvider: React.FC<PropsWithChildren> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const setOpen = () => {
    setIsOpen(true);
  };

  return (
    <AlertContext.Provider value={{ setOpen }}>
      {props.children}
      <Alert isOpen={isOpen} setIsOpen={setIsOpen} />
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
