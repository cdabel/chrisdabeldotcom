---
title: The data behind the LLM
org: Finally
period: "2026"
order: 1
stats:
  - value: "12.6M"
    label: labeled training rows
  - value: "381K"
    label: predictions scored across 5 models
---

The measurement layer that decides whether an LLM classifier may post journal entries into a customer's books without a human: a labeled corpus with dual-watermark incremental selection so user edits never leave labels stale, an SCD-2 shadow-run harness, and marts that encode the graduation bars, precision at confidence 0.9 and above, week-over-week drift, a high-confidence volume floor, and a model-collapse canary. One macro defines the eval denominator everywhere, so offline and online scoring cannot drift apart. Authored the retrieval architecture and corpus design for the customer-facing RAG assistant, and built the per-call Bedrock cost and MCP tool-call analytics around it.
