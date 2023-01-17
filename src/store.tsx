import { makeAutoObservable } from "mobx";
import { useContext, createContext } from "react";

interface StoreProps {
  children: React.ReactNode;
  store: AppStore;
}

class AppStore {
  toDos: string[] = [];
  value: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  addToDo(toDo: string) {
    this.toDos.push(toDo);
  }

  changeValue() {
    this.value += 1;
  }
}

const StoreContext = createContext<AppStore>(new AppStore());

const StoreProvider = ({ children, store }: StoreProps) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext);

export { AppStore, StoreProvider, useStore };
