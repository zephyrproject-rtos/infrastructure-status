
export type SummaryType = {
  status:
    | "operational"
    | "degradedPerformance"
    | "partialOutage"
    | "majorOutage"
    | "unknown";
};

export type ComponentType = {
  id: string;
  name: string;
  status:
    | "operational"
    | "degradedPerformance"
    | "partialOutage"
    | "majorOutage"
    | "unknown";
  rawData: string;
  updatedAt: string;
};

export type IncidentType = {
  id: string;
  title: string;
  description: string;
  active: boolean;
  scheduled: boolean;
  createdAt: string;
};

export type Data =
  | {
      loading: true;
      components: undefined;
      incidents: undefined;
      historicalIncidents: undefined;
    }
  | {
      components: ComponentType[];
      incidents: IncidentType[];
      historicalIncidents: IncidentType[];
      loading: false;
    };

export type Provider = {
  getComponents: () => Promise<ComponentType[]> | ComponentType[];
  getIncidents: () => Promise<IncidentType[]> | IncidentType[];
  getHistoricalIncidents: () => Promise<IncidentType[]> | IncidentType[];
};
