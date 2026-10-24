---
title: Borrowing capacity recovered from the loan tapes
org: Finally
period: Jan 2026
order: 3
summary: >-
  Traced the data-quality defects dropping companies from the lender's loan tape, fixed them upstream, and the borrowing base rose by roughly half a million dollars.
stats:
  - value: "~$500K"
    label: borrowing base recovered
---

The card program is funded by a credit facility that advances funds against eligible receivables, computed from a loan tape of every company and its balances. Companies missing from the tape, or present with bad data, do not count. A set of companies had gone missing because of data-quality defects in sources upstream of the warehouse. Traced the root causes to mission-critical spreadsheets and backend data-quality issues, and fixed them all by correcting the data upstream, after backend query approval. The corrected tapes raised the borrowing base by roughly half a million dollars.
