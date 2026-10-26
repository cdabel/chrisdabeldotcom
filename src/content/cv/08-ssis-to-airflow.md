---
title: The pipeline behind a recommendation model
org: Jane.com
period: 2020 to 2022
order: 13
summary: >-
  Airflow and PySpark on EMR fed the recommendation model a billion clickstream rows per build; its recommendations replaced best-seller lists in email and lifted click-through 25%.
stats:
  - value: "25%"
    label: lift in email click-through
  - value: "1B"
    label: clickstream rows per training build
---

Airflow DAGs running PySpark and SparkSQL on EMR to build the training data for the product-recommendation model, a billion clickstream rows over a rolling ten-month lookback, and to post-process its output through SageMaker, with predictions landing in Redshift every hour for analysts. Data-quality DAGs scanned for anomalies and alerted before bad data reached the model. Model recommendations replaced best-seller lists in the marketplace's emails, and click-through rose 25%. Along the way, legacy SSIS workbooks were retired for Python pipelines in Airflow and a dozen more were built. Sole data engineer for four months after turnover; mentored two junior engineers. [The full case study.](/jane/)
