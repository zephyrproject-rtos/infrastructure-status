import { ComponentType, IncidentType, Provider } from "@/api/types";

const componentSourceBase =
  "https://statuspage-data.s3.us-east-1.amazonaws.com";
const incidentSourceBase =
  "https://statuspage-data.s3.us-east-1.amazonaws.com";

const components = [
  {
    id: "9",
    name: "HZR Kubernetes Cluster",
    type: "service",
    source: `${componentSourceBase}/status.hzr_kubernetes_cluster.json`,
  },
  {
    id: "10",
    name: "CNX Kubernetes Cluster",
    type: "service",
    source: `${componentSourceBase}/status.cnx_kubernetes_cluster.json`,
  },
  {
    id: "11",
    name: "AWS Kubernetes Cluster",
    type: "service",
    source: `${componentSourceBase}/status.aws_kubernetes_cluster.json`,
  },
  {
    id: "49",
    name: "HZR KeyDB Cache",
    type: "service",
    source: `${componentSourceBase}/status.hzr_keydb_cache.json`,
  },
  {
    id: "50",
    name: "CNX KeyDB Cache",
    type: "service",
    source: `${componentSourceBase}/status.cnx_keydb_cache.json`,
  },
  {
    id: "99",
    name: "HZR Actions Runner Controller",
    type: "service",
    source: `${componentSourceBase}/status.hzr_actions_runner_controller.json`,
  },
  {
    id: "100",
    name: "CNX Actions Runner Controller",
    type: "service",
    source: `${componentSourceBase}/status.cnx_actions_runner_controller.json`,
  },
  {
    id: "300",
    name: "Elasticsearch",
    type: "service",
    source: `${componentSourceBase}/status.aws_elasticsearch.json`,
  },
  {
    id: "301",
    name: "Kibana",
    type: "service",
    source: `${componentSourceBase}/status.aws_kibana.json`,
  },
  {
    id: "1100",
    name: "HZR Runner Scale Set: linux-arm64-4xlarge",
    type: "runner",
    source: `${componentSourceBase}/status.hzr_runner_scale_set-linux_arm64_4xlarge.json`,
  },
  {
    id: "1101",
    name: "HZR Runner Scale Set: linux-x64-4xlarge",
    type: "runner",
    source: `${componentSourceBase}/status.hzr_runner_scale_set-linux_x64_4xlarge.json`,
  },
  {
    id: "1200",
    name: "CNX Runner Scale Set: linux-arm64-4xlarge",
    type: "runner",
    source: `${componentSourceBase}/status.cnx_runner_scale_set-linux_arm64_4xlarge.json`,
  },
  {
    id: "1201",
    name: "CNX Runner Scale Set: linux-x64-4xlarge",
    type: "runner",
    source: `${componentSourceBase}/status.cnx_runner_scale_set-linux_x64_4xlarge.json`,
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
        type: component.type,
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
