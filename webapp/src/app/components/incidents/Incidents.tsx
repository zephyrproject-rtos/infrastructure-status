"use client";

import { useData } from "@/api/client";
import { Incident } from "./Incident";
import { Stack } from "../Stack";

export const Incidents = () => {
  const { incidents, loading } = useData();

  return !loading && incidents?.length != 0 ? (
    <Stack>
      {incidents.map((incident) => (
        <Incident key={incident.id} {...incident} />
        ))}
    </Stack>
  ) : null;
};
