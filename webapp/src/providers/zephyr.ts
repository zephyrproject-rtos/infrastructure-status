import { ComponentType, IncidentType, Provider } from "@/api/types";

const sourceBase = "https://gist.githubusercontent.com/zephyrbot/08a5b71b4208c6bd48d7f6447c10c786/raw";

const components = [
  {
    id: "10",
    name: "CNX Kubernetes Cluster",
    source: `${sourceBase}/status.cnx_kubernetes_cluster.json`,
  },
  {
    id: "11",
    name: "AWS Kubernetes Cluster",
    source: `${sourceBase}/status.aws_kubernetes_cluster.json`,
  },
  {
    id: "50",
    name: "CNX KeyDB Cache",
    source: `${sourceBase}/status.cnx_keydb_cache.json`,
  },
  {
    id: "100",
    name: "CNX Actions Runner Controller",
    source: `${sourceBase}/status.cnx_actions_runner_controller.json`,
  },
  {
    id: "101",
    name: "AWS Actions Runner Controller",
    source: `${sourceBase}/status.aws_actions_runner_controller.json`,
  },
  {
    id: "110",
    name: "CNX Runner Scale Set: linux-arm64-4xlarge",
    source: `${sourceBase}/status.cnx_runner_scale_set-linux_arm64_4xlarge.json`,
  },
  {
    id: "111",
    name: "CNX Runner Scale Set: linux-x64-4xlarge",
    source: `${sourceBase}/status.cnx_runner_scale_set-linux_x64_4xlarge.json`,
  },
  {
    id: "120",
    name: "AWS Runner Scale Set: linux-arm64-4xlarge",
    source: `${sourceBase}/status.aws_runner_scale_set-linux_arm64_4xlarge.json`,
  },
  {
    id: "121",
    name: "AWS Runner Scale Set: linux-x64-4xlarge",
    source: `${sourceBase}/status.aws_runner_scale_set-linux_x64_4xlarge.json`,
  },
  {
    id: "300",
    name: "Elasticsearch",
    source: `${sourceBase}/status.aws_elasticsearch.json`,
  },
  {
    id: "301",
    name: "Kibana",
    source: `${sourceBase}/status.aws_kibana.json`,
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
  getIncidents: () => [
    // {
    //   id: "1",
    //   title: "Major service outage",
    //   description: "_This is a major service outage_",
    //   createdAt: "2024-05-13T08:55:04.355Z",
    //   active: true,
    //   scheduled: false,
    // },
    // {
    //   id: "2",
    //   title: "Partial payments outage",
    //   description: "This is a partial payments outage",
    //   createdAt: "2024-05-13T08:55:04.355Z",
    //   active: false,
    //   scheduled: false,
    // },
  ],
  getHistoricalIncidents: function (): IncidentType[] | Promise<IncidentType[]> {
    return [
      {
        id: "1",
        title: "Test incident",
        description: "This is a test incident.",
        active: false,
        scheduled: false,
        createdAt: "2024-05-14T17:23:33.055Z"
      }
    ];
  }
};
