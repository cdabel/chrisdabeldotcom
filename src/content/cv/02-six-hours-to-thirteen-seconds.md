---
title: A six-hour credit-risk model, now thirteen seconds
org: Finally
period: "2026"
order: 7
summary: >-
  Five chained recursive CTEs became window functions over a date spine, then the hard part: point-in-time grace periods, cure detection, and a charge-off rule with recovery netting.
stats:
  - value: "6 h to 13 s"
    label: rebuild time
  - value: "2 TB to 0"
    label: spill to disk
---

The daily delinquency and balance model behind two lender tapes and the sponsor-bank pack was five chained recursive CTEs, each level multiplying the last. Rewrote every recursion as a window function over a shared date spine, in twelve steps that cut cardinality early. It moved from an X-Large warehouse to an X-Small, measured in query history. Performance was the easy half. The hard half was point-in-time grace periods through an SCD-2 snapshot, cycle-aware cure detection, and a charge-off rule with recovery netting that now produces the company's $9.8M loss series, all backed by a monotonicity test that insists days past due go up by exactly one or reset to zero.
