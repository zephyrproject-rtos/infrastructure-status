import { ComponentType, IncidentType, Provider } from "@/api/types";

const componentSourceBase =
  "https://statuspage-data.s3.us-east-1.amazonaws.com";
const incidentSourceBase =
  "https://gist.githubusercontent.com/zephyrbot/94b5b2e21495651fd58a175cba548b3c/raw"

const components = [
  {
    id: "9",
    name: "HZR Kubernetes Cluster",
    source: `${componentSourceBase}/status.hzr_kubernetes_cluster.json`,
  },
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
    id: "49",
    name: "HZR KeyDB Cache",
    source: `${componentSourceBase}/status.hzr_keydb_cache.json`,
  },
  {
    id: "50",
    name: "CNX KeyDB Cache",
    source: `${componentSourceBase}/status.cnx_keydb_cache.json`,
  },
  {
    id: "99",
    name: "HZR Actions Runner Controller",
    source: `${componentSourceBase}/status.hzr_actions_runner_controller.json`,
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
    id: "105",
    name: "HZR Runner Scale Set: linux-arm64-4xlarge",
    source: `${componentSourceBase}/status.hzr_runner_scale_set-linux_arm64_4xlarge.json`,
  },
  {
    id: "106",
    name: "HZR Runner Scale Set: linux-x64-4xlarge",
    source: `${componentSourceBase}/status.hzr_runner_scale_set-linux_x64_4xlarge.json`,
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
