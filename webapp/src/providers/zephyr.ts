import { ComponentType, IncidentType, Provider } from "@/api/types";

const componentSourceBase =
  "https://gist.githubusercontent.com/zephyrbot/08a5b71b4208c6bd48d7f6447c10c786/raw";
const incidentSourceBase =
  "https://gist.githubusercontent.com/zephyrbot/94b5b2e21495651fd58a175cba548b3c/raw"

const components = [
  {
    id: "10",
    name: "CNX Kubernetes Cluster",
    source: `${componentSourceBase}/status.cnx_kubernetes_cluster.json`,
  },
  {
    id: "11",
    name: "AWS Kubernetes Cluster",
    source: `${componentSourceBase}/status.aws_kubernetes_cluster.json`,
  },
  {
    id: "50",
    name: "CNX KeyDB Cache",
    source: `${componentSourceBase}/status.cnx_keydb_cache.json`,
  },
  {
    id: "100",
    name: "CNX Actions Runner Controller",
    source: `${componentSourceBase}/status.cnx_actions_runner_controller.json`,
  },
  {
    id: "101",
    name: "AWS Actions Runner Controller",
    source: `${componentSourceBase}/status.aws_actions_runner_controller.json`,
  },
  {
    id: "110",
    name: "CNX Runner Scale Set: linux-arm64-4xlarge",
    source: `${componentSourceBase}/status.cnx_runner_scale_set-linux_arm64_4xlarge.json`,
  },
  {
    id: "111",
    name: "CNX Runner Scale Set: linux-x64-4xlarge",
    source: `${componentSourceBase}/status.cnx_runner_scale_set-linux_x64_4xlarge.json`,
  },
  {
    id: "120",
    name: "AWS Runner Scale Set: linux-arm64-4xlarge",
    source: `${componentSourceBase}/status.aws_runner_scale_set-linux_arm64_4xlarge.json`,
  },
  {
    id: "121",
    name: "AWS Runner Scale Set: linux-x64-4xlarge",
    source: `${componentSourceBase}/status.aws_runner_scale_set-linux_x64_4xlarge.json`,
  },
  {
    id: "300",
    name: "Elasticsearch",
    source: `${componentSourceBase}/status.aws_elasticsearch.json`,
  },
  {
    id: "301",
    name: "Kibana",
    source: `${componentSourceBase}/status.aws_kibana.json`,
  },
];

export const zephyrProvider: Provider = {
  getComponents: async () => {
    return Promise.all(components.map(async (component) => {
      const response =
        await fetch(`${component.source}?seed=${crypto.randomUUID()}`);

      const data = response.ok ?
        await response.json() :
        {
          status: "unknown",
          rawData: `Status: ${response.statusText}`,
          updatedAt: null
        };

      return {
        id: component.id,
        name: component.name,
        ...data
      };
    }));
  },

  getIncidents: async () => {
    const response =
      await fetch(`${incidentSourceBase}/current_incidents.json?seed=${crypto.randomUUID()}`);

    return response.ok ? await response.json() : [];
  },

  getHistoricalIncidents: async () => {
    const response =
      await fetch(`${incidentSourceBase}/past_incidents.json?seed=${crypto.randomUUID()}`);

    return response.ok ? await response.json() : [];
  }
};
