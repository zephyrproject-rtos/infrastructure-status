"use client";

import { Data } from "./types";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { zephyrProvider } from "@/providers/zephyr";

const DataContext = createContext<Data | undefined>(undefined);

const createApiClient = () => zephyrProvider;

export const DataProvider: React.FC<{
  children: ReactNode | ReactNode[] | null;
}> = ({ children }) => {
  const api = createApiClient();

  const [state, setState] = useState<Data>({
    loading: true,
    components: undefined,
    incidents: undefined,
    historicalIncidents: undefined,
  });

  useEffect(() => {
    (async () => {
      setState({
        loading: false,
        components: await api.getComponents(),
        incidents: await api.getIncidents(),
        historicalIncidents: await api.getHistoricalIncidents(),
      });
    })();
  }, [api]);

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const data = useContext(DataContext);

  if (!data) {
    throw new Error("DataProvider was not provided");
  }

  return data;
};
