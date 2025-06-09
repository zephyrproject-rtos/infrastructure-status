import { useState } from "react";
import { RunnerComponentType } from "@/api/types";
import styled from "styled-components";
import { Badge } from "./Badge";

const Box = styled.div`
  background-color: ${(props) => props.theme.colors.body};
  padding: 8px 16px;
  border-radius: 3px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
`;

const Popup = styled.div`
  background-color: ${(props) => props.theme.colors.body};
  color: ${(props) => props.theme.colors.text};
  border-radius: 8px;
  min-width: 50vw;
  top: 50%;
  left: 50%;
  padding: 20px;
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
`;

const Terminal = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  overflow-y: auto;
  overflow-x: auto;
  max-width: 80vw;
  max-height: 80vh;
  font-family: monospace;
  white-space: pre;
`;

const RunnerTitle = styled.div`
  font-weight: 500;
  padding-bottom: 5px;
`;

const RunnerState = styled.div`
  color: ${(props) => props.theme.colors.hintText};
  font-size: 14px;
`;

export const RunnerComponent = ({ name, status, runningRunnerCount, pendingRunnerCount, rawData, updatedAt }: RunnerComponentType) => {
  const [showRawData, setShowRawData] = useState(false);

  return (
    <div>
      <Box onClick={() => setShowRawData(true)}>
        <div>
          <RunnerTitle>{name}</RunnerTitle>
          <RunnerState>{runningRunnerCount ?? 0} running, {pendingRunnerCount ?? 0} pending</RunnerState>
        </div>
        <Badge status={status} updatedAt={updatedAt} />
      </Box>

      {showRawData &&
        <Overlay onClick={() => setShowRawData(false)}>
          <Popup onClick={(e) => e.stopPropagation()}>
            <Terminal>{rawData}</Terminal>
          </Popup>
        </Overlay>
      }
    </div>
    );
}
