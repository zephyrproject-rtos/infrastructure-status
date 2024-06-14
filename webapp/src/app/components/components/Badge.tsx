import { ComponentType } from "@/api/types";
import styled from "styled-components";
import { Tooltip } from "react-tooltip";
import dayjs from "dayjs";

export const BaseBadge = styled.div`
  padding: 5px 12px;
  border-radius: 16px;
  font-size: 13px;
  transition: 0.3s;
`;

const OperationalBadge = styled(BaseBadge)`
  color: ${(props) => props.theme.colors.badgeStatus.operational.text};
  background-color: ${(props) => props.theme.colors.badgeStatus.operational.background};
`;

const DegradedPerformanceBadge = styled(BaseBadge)`
  color: ${(props) => props.theme.colors.badgeStatus.degradedPerformance.text};
  background-color: ${(props) =>
    props.theme.colors.badgeStatus.degradedPerformance.background};
`;

const PartialOutageBadge = styled(BaseBadge)`
  color: ${(props) => props.theme.colors.badgeStatus.partialOutage.text};
  background-color: ${(props) => props.theme.colors.badgeStatus.partialOutage.background};
`;

const MajorOutageBadge = styled(BaseBadge)`
  color: ${(props) => props.theme.colors.badgeStatus.majorOutage.text};
  background-color: ${(props) => props.theme.colors.badgeStatus.majorOutage.background};
`;

const UnknownBadge = styled(BaseBadge)`
  color: ${(props) => props.theme.colors.badgeStatus.unknown.text};
  background-color: ${(props) => props.theme.colors.badgeStatus.unknown.background};
`;

export const Badge = ({ status, updatedAt }:
  { status: ComponentType["status"], updatedAt: string }) => {
  const badges: Record<ComponentType["status"], any> = {
    operational: <OperationalBadge>Operational</OperationalBadge>,
    degradedPerformance: (
      <DegradedPerformanceBadge>Degraded Performance</DegradedPerformanceBadge>
    ),
    partialOutage: <PartialOutageBadge>Partial Outage</PartialOutageBadge>,
    majorOutage: <MajorOutageBadge>Major Outage</MajorOutageBadge>,
    unknown: <UnknownBadge>Unknown</UnknownBadge>,
  };

  return (
    <div data-tooltip-id="last-update"
         data-tooltip-content={dayjs(updatedAt).format("MMMM D, YYYY h:mm A")}>
      {badges[status]}
      <Tooltip id="last-update" />
    </div>
  );
};
