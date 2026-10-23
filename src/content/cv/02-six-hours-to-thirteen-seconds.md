---
title: A six-hour credit-risk model, now thirteen seconds
org: Finally
period: "2026"
order: 5
stats:
  - value: "6 h to 13 s"
    label: rebuild time
  - value: "2 TB to 0"
    label: spill to disk
---

Re-architected the daily delinquency and balance model behind lender covenant reporting from five chained recursive CTEs to window functions. It moved from an X-Large warehouse to an X-Small, and is backed by monotonicity and balance-identity tests.
