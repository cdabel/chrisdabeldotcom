---
title: A data platform where there was none
org: Finally
period: 2025 to 2026
order: 4
summary: >-
  Inherited 281 untested replication models and built the entire analytics layer, orchestration, governance, and external reporting above them, solo.
stats:
  - value: "438"
    label: dbt models
  - value: "326"
    label: tests, up from zero
---

Sole data engineer for a three-product fintech. Inherited 281 source-replication models with no tests, no documentation, and nothing above the source layer, including a schema-per-tenant source flattened across roughly 1,600 customer schemas of about 120 tables each. Built everything above it, product by product: 157 analytics models, 4 SCD-2 snapshots, 75 native Snowflake procedures, tasks, and report functions, a warehouse holding about 280M rows and materializing 10.6B a year. The real deliverable is the dependency-review checklist in the repo, so the next person can operate it without me. [The full case study.](/finally/)
