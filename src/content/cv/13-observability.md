---
title: Finding out before the lender does
org: Finally
period: Feb 2026
order: 11
summary: >-
  Slack and email alerting on lender tape failures, Airflow DAGs, and Fivetran connectors, plus a Streamlit dashboard over a dbt Cloud API ingestion pipeline that watches jobs and their schedule collisions.
---

A daily obligation fails quietly unless something is listening. Every reporting procedure behind the lender tapes moved off Snowflake's built-in email onto Slack webhooks with success and failure notifications, email retained as the second channel. Every production Airflow DAG got a failure notifier with the try count and a deep link to the task log. Fivetran's connector alerts, which only speak email, were routed into Slack through the Email Slack app so sync failures land where people already look. Underneath it all, an ingestion pipeline pulls the dbt Cloud API into a vendor-data bronze database in Snowflake, and a Streamlit dashboard in the repo reads it to monitor the jobs, map model dependencies and refresh intervals, and lay the schedule out as a Gantt chart to find the collisions before they become a stale number in a report.
