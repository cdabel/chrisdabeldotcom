---
title: Finding out before the lender does
org: Finally
period: 2025 to 2026
order: 10
summary: >-
  Slack and email alerting on lender tape failures, Airflow DAGs, and Fivetran connectors, plus a Streamlit app that watches dbt Cloud jobs and their schedule collisions.
---

A daily obligation fails quietly unless something is listening. Every reporting procedure behind the lender tapes moved off Snowflake's built-in email onto Slack webhooks with success and failure notifications, email retained as the second channel. Every production Airflow DAG got a failure notifier with the try count and a deep link to the task log. Fivetran's connector alerts, which only speak email, were routed into Slack through the Email Slack app so sync failures land where people already look. Underneath it all, a Streamlit app in the repo monitors the dbt Cloud jobs, maps model dependencies and refresh intervals, and lays the schedule out as a Gantt chart to find the collisions before they become a stale number in a report.
