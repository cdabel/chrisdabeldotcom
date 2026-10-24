---
title: New tenants register their own sync
org: Finally
period: Dec 2025
order: 10
summary: >-
  A Celery task in the card platform's backend that registers each new tenant schema with the Fivetran API on creation, naming only the tables the warehouse reads, with exponential backoff on retry.
---

The card platform gives every customer a Postgres schema, and before this a new tenant's whole schema synced to Snowflake, every table, whether anything downstream read it or not. A Celery task in the backend now fires on tenant creation and POSTs to the Fivetran API with the schema and the specific tables to sync, carrying what a reliable outbound call needs: exponential backoff on retry, idempotent re-runs, and logging that says what was sent. Selective from the first sync, so the fan-out that was later pruned in the warehouse stopped growing at the source.
