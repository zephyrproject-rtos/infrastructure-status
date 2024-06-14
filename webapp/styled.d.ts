import "styled-components";

type Badge = {
  background: string;
  text: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      body: string;
      content: string;
      text: string;
      hintText: string;
      summaryStatus: {
        operational: Badge;
        degradedPerformance: Badge;
        partialOutage: Badge;
        majorOutage: Badge;
        unknown: Badge;
      };
      badgeStatus: {
        operational: Badge;
        degradedPerformance: Badge;
        partialOutage: Badge;
        majorOutage: Badge;
        inactive: Badge;
        unknown: Badge;
      };
      incidentStatus: {
        active: Badge;
        closed: Badge;
      };
    };
  }
}
