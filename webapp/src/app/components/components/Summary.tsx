import { ComponentType, SummaryType } from "@/api/types";
import styled from "styled-components";

const BaseBackground = styled.div`
  padding: 16px;
  border-radius: 3px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  transition: 0.3s;
`;

const OperationalBackground = styled(BaseBackground)`
  color: ${(props) => props.theme.colors.summaryStatus.operational.text};
  background-color: ${(props) => props.theme.colors.summaryStatus.operational.background};
`;

const DegradedPerformanceBackground = styled(BaseBackground)`
  color: ${(props) => props.theme.colors.summaryStatus.degradedPerformance.text};
  background-color: ${(props) => props.theme.colors.summaryStatus.degradedPerformance.background};
`;

const PartialOutageBackground = styled(BaseBackground)`
  color: ${(props) => props.theme.colors.summaryStatus.partialOutage.text};
  background-color: ${(props) => props.theme.colors.summaryStatus.partialOutage.background};
`;

const MajorOutageBackground = styled(BaseBackground)`
  color: ${(props) => props.theme.colors.summaryStatus.majorOutage.text};
  background-color: ${(props) => props.theme.colors.summaryStatus.majorOutage.background};
`;

const UnknownBackground = styled(BaseBackground)`
  color: ${(props) => props.theme.colors.summaryStatus.unknown.text};
  background-color: ${(props) => props.theme.colors.summaryStatus.unknown.background};
`;

const Title = styled.h2`
  font-size: 20px;
  margin: 0;
  font-weight: normal;
`;

export const Summary = ({ components }: { components: ComponentType[] }) => {
  const summaries: Record<SummaryType["status"], any> = {
    operational: (
      <OperationalBackground>All Systems Operational</OperationalBackground>
    ),
    degradedPerformance: (
      <DegradedPerformanceBackground>Degraded Performance</DegradedPerformanceBackground>
    ),
    partialOutage: (
      <PartialOutageBackground>Partial Outage</PartialOutageBackground>
    ),
    majorOutage: (
      <MajorOutageBackground>Major Outage</MajorOutageBackground>
    ),
    unknown: (
      <UnknownBackground>Status Unknown</UnknownBackground>
    ),
  };

  const status: ComponentType["status"] =
    components.find((component) => component.status == "unknown") ? "unknown" :
    components.find((component) => component.status == "majorOutage") ? "majorOutage" :
    components.find((component) => component.status == "partialOutage") ? "partialOutage" :
    components.find((component) => component.status == "degradedPerformance") ? "degradedPerformance" :
    "operational";

  // return <Title><OperationalBackground>{components.length}</OperationalBackground></Title>;

  return <Title>{summaries[status]}</Title>;
};
