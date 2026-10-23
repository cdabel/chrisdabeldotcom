---
title: Governance built for a regulated fintech
org: Finally
period: 2025 to 2026
order: 2
summary: >-
  Row access by role membership over an entitlements table, masking split by job, and every service account moved onto the proper user type with rotated keys.
---

Snowflake governance from scratch for the company's LLM surfaces. The plan I was handed called for Oracle-style session attributes, which Snowflake does not have and which a row access policy could not trust anyway, since session variables are spoofable. Isolation is instead a Row Access Policy over an entitlements table checked by role membership, the one primitive that cannot be assumed without a grant. Masking is split by job: a financials reader sees free text and dollar values, an eval reader sees the text and not the dollars. Then the unglamorous half: every service account moved onto Snowflake's actual service-user type, keys rotated, and SCIM 2.0 discovery work alongside the IT security team. None of it is exotic. All of it is what an auditor asks about first.
