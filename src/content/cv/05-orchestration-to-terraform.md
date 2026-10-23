---
title: Two vendor exits, no data outage
org: Finally
period: "2026"
order: 9
summary: >-
  dbt Cloud to MWAA in Terraform with Cosmos and Dataset scheduling, Fivetran to self-hosted Airbyte across four sources, eight VPC peerings adopted into state.
stats:
  - value: "295"
    label: tables moved off Fivetran
  - value: "8"
    label: live VPC peerings adopted into Terraform
---

Replaced dbt Cloud with AWS MWAA provisioned in Terraform: IAM, a versioned S3 DAG bucket, GitHub Actions OIDC deploys, Secrets Manager as the connection backend, and an Okta-gated webserver. Every DAG on it is mine, rendered by Astronomer Cosmos with per-model tasks for retries, Airflow Dataset scheduling so gold never builds on stale silver, Slack alerting, and a manifest-drift check in CI. Separately moved four sources off Fivetran to self-hosted Airbyte, about 295 tables and 34M rows, with least-privilege replication users on Aurora reader endpoints and two weeks of post-cutover repair where Airbyte lands JSON and metadata differently. Left the card source on Fivetran on purpose, since it is on a decommission path. And declined to apply one Terraform plan whose drift belonged to another team and would have replaced their node group.
