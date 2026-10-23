---
title: Half a million dollars of borrowing capacity, found in the data
org: Finally
period: "2026"
order: 3
stats:
  - value: "~$500K"
    label: borrowing base recovered
---

<!--
Still to confirm before this is final: the exact figure, whether the
companies were absent from the tape or present with disqualifying fields,
the root-cause category, where in the pipeline the fix landed, and how
many companies were affected.
-->

The card program is funded by a credit facility that advances against eligible receivables, computed from a loan tape of every company and its balances. Companies missing from the tape, or present with bad data, do not count. A set of companies had gone missing because of data-quality defects upstream in the warehouse. Traced the root causes, fixed them, and the corrected tapes raised the borrowing base by roughly half a million dollars.
