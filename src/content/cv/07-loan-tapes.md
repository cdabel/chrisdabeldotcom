---
title: Regulated reporting that could not be late
org: Finally
period: 2025 to 2026
order: 10
stats:
  - value: "282K"
    label: rows per daily loan tape
  - value: "119"
    label: metrics in the monthly sponsor-bank and Visa pack
---

Daily and monthly GPG-encrypted loan tapes to a credit facility via Snowflake tasks, Python stored procedures, and an S3-triggered Lambda and SQS fan-out to SFTP, with a re-runnable backfill and three operator runbooks. Most of the work was correctness nobody sees: KYC entity resolution, credit limits floored at zero, charge-off and recovery columns wired in from the delinquency model, and one afternoon finding commas inside application IDs corrupting the CSV. The monthly sponsor-bank and Visa program pack runs on 345 parameterized queries with a written operating procedure, so the cycle is reproducible rather than tribal knowledge.
