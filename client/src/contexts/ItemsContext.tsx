import { createContext } from "react";

type Item = {
  _id: string;
  task: string;
  completed: boolean;
  creationTime: Date;
  completionTime: Date;
};

type ItemsContextType = {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
};

export const ItemsContext = createContext<ItemsContextType>({
  items: [],
  setItems: () => {},
});

