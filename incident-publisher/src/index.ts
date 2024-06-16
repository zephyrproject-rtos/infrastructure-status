#!/usr/bin/env node

import { Command, Option } from "commander";
import { Octokit } from "@octokit/rest";

const program = new Command();

program
  .version("1.0.0")
  .description("GitHub issues-backed status page incident publisher")
  .option("-o, --owner <owner>", "Repository owner", "zephyrproject-rtos")
  .option("-r, --repository <repository>", "Repository name", "infrastructure-status")
  .requiredOption("-g, --gist-id <gist ID>", "Incident Gist ID")
  .addOption(new Option("-t, --token <GitHub token>", "GitHub token")
              .makeOptionMandatory().env("GITHUB_TOKEN"))
  .parse(process.argv)

const options = program.opts();

const octokit = new Octokit({
  auth: options.token
});

console.log('incident-publisher');
console.log();

const getIncidents = async (state: "open" | "closed") => {
  const { data } = await octokit.rest.issues.listForRepo({
    owner: options.owner,
    repo: options.repository,
    labels: "incident,incident-activate",
    state: state
  });

  return data.map(({ id, title, body, created_at, closed_at, labels }) => {
    const isMaintenance = Boolean(
      labels.find(
        (label) =>
          (typeof label === "string" ? label : label.name) === "maintenance"
      ));

    return {
      id: id.toString(),
      title: title,
      description: body ?? "",
      createdAt: created_at,
      scheduled: isMaintenance,
      active: !closed_at,
    };
  });
};

(async() => {
  const currentIncidents = (await getIncidents("open"));
  console.log(`Retrieved ${currentIncidents.length} current incidents.`);

  const pastIncidents = (await getIncidents("closed")).slice(0, 5);
  console.log(`Retrieved ${pastIncidents.length} past incidents.`);

  await octokit.gists.update({
    gist_id: options.gistId,
    files: {
      ["current_incidents.json"]: {
        content: JSON.stringify(currentIncidents)
      },
      ["past_incidents.json"]: {
        content: JSON.stringify(pastIncidents)
      }
    }
  });

  console.log(`Published to Gist ${options.gistId}.`);
})();
