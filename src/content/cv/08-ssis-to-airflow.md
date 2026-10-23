---
title: The pipeline behind a recommendation model
org: Jane.com
period: 2020 to 2022
order: 11
stats:
  - value: "1B"
    label: clickstream rows per training build
  - value: "10 mo"
    label: rolling lookback
---

Airflow DAGs running PySpark and SparkSQL on EMR to build the training data for the product-recommendation model, a billion clickstream rows over a rolling ten-month lookback, and to post-process its output through SageMaker, with predictions landing in Redshift every hour for analysts. Data-quality DAGs scanned for anomalies and alerted before bad data reached the model. Along the way, legacy SSIS workbooks were retired for Python pipelines in Airflow and a dozen more were built. Sole data engineer for four months after turnover; mentored two junior engineers.
