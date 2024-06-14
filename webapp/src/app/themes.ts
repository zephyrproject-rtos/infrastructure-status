import { DefaultTheme } from "styled-components";

const dark: DefaultTheme = {
  colors: {
    body: "rgb(28, 31, 32)",
    content: "rgb(24, 26, 27)",
    text: "rgb(213, 209, 204)",
    hintText: "rgb(158, 158, 158)",
    summaryStatus: {
      operational: {
        text: "rgb(255, 255, 255)",
        background: "rgb(61, 167, 81)",
      },
      degradedPerformance: {
        text: "rgb(255, 255, 255)",
        background: "rgb(73, 144, 226)",
      },
      partialOutage: {
        text: "rgb(119, 82, 75)",
        background: "rgb(255, 198, 103)",
      },
      majorOutage: {
        text: "rgb(255, 240, 240)",
        background: "rgb(217, 68, 48)",
      },
      unknown: {
        text: "rgb(240, 240, 240)",
        background: "rgb(120, 120, 120)",
      },
    },
    badgeStatus: {
      operational: {
        text: "rgb(136, 218, 153)",
        background: "rgba(61, 167, 81, 0.1)",
      },
      degradedPerformance: {
        text: "rgb(174, 207, 234)",
        background: "rgba(73, 144, 226, 0.1)",
      },
      partialOutage: {
        text: "rgb(218, 186, 135)",
        background: "rgba(255, 198, 103, 0.1)",
      },
      majorOutage: {
        text: "rgb(231, 168, 161)",
        background: "rgba(217, 68, 48, 0.1)",
      },
      unknown: {
        text: "rgb(163, 156, 144)",
        background: "rgba(177, 177, 177, 0.1)",
      },
    },
    incidentStatus: {
      active: {
        text: "rgb(135, 178, 214)",
        background: "rgba(73, 144, 226, 0.1)",
      },
      closed: {
        text: "rgb(163, 156, 144)",
        background: "rgba(177, 177, 177, 0.1)",
      },
    },
  },
};

const light: DefaultTheme = {
  colors: {
    body: "#f5f8fa",
    content: "#ffffff",
    text: "#1e1e1e",
    hintText: "#1e1e1e",
    summaryStatus: {
      operational: {
        text: "rgb(255, 255, 255)",
        background: "rgb(61, 167, 81)",
      },
      degradedPerformance: {
        text: "rgb(255, 255, 255)",
        background: "rgb(73, 144, 226)",
      },
      partialOutage: {
        text: "rgb(119, 82, 75)",
        background: "rgb(255, 198, 103)",
      },
      majorOutage: {
        text: "rgb(255, 240, 240)",
        background: "rgb(217, 68, 48)",
      },
      unknown: {
        text: "rgb(240, 240, 240)",
        background: "rgb(120, 120, 120)",
      },
    },
    badgeStatus: {
      operational: {
        text: "#247234",
        background: "rgba(61, 167, 81, 0.1)",
      },
      degradedPerformance: {
        text: "#2f5888",
        background: "rgba(73, 144, 226, 0.1)",
      },
      partialOutage: {
        text: "#74582a",
        background: "rgba(255, 198, 103, 0.1)",
      },
      majorOutage: {
        text: "#8e3b31",
        background: "rgba(217, 68, 48, 0.1)",
      },
      unknown: {
        text: "#6e6b6b",
        background: "rgba(177, 177, 177, 0.1)",
      },
    },
    incidentStatus: {
      active: {
        text: "rgb(47, 88, 136)",
        background: "rgba(73, 144, 226, 0.1)",
      },
      closed: {
        text: "rgb(110, 107, 107)",
        background: "rgba(177, 177, 177, 0.1)",
      },
    },
  },
};

export const themes = {
  dark,
  light,
};
