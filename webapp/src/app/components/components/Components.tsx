"use client";

import { useData } from "@/api/client";
import { RunnerComponent } from "./RunnerComponent";
import { ServiceComponent } from "./ServiceComponent";
import styled from "styled-components";
import { Summary } from "./Summary";
import { Skeleton } from "./Skeleton";
import { Stack } from "../Stack";
import { RunnerComponentType, ServiceComponentType } from "@/api/types";

const Card = styled.div`
  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.content};
  padding: 16px;
`;

const CategoryTitle = styled.h3`
  color: ${(props) => props.theme.colors.text};
`;

export const Components = () => {
  const { components, loading } = useData();
  const runnerComponents = components?.filter((component) => component.type == "runner");
  const serviceComponents = components?.filter((component) => component.type == "service");

  return (
    <Card>
      {!loading ? (
        <Summary components={components} />
      ) : null}
      <CategoryTitle>Runners</CategoryTitle>
      <Stack>
        {loading ? (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          runnerComponents?.map((component) => (
            <RunnerComponent key={component.id} {...component as RunnerComponentType} />
          ))
        )}
      </Stack>
      <CategoryTitle>Services</CategoryTitle>
      <Stack>
        {loading ? (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          serviceComponents?.map((component) => (
            <ServiceComponent key={component.id} {...component as ServiceComponentType} />
          ))
        )}
      </Stack>
    </Card>
  );
};
