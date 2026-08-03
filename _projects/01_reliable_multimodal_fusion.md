---
layout: page
title: Reliable Multimodal Fusion
card_title: Multimodal Reliance Diagnostics
description: Diagnosing whether quality signals actually change multimodal decisions.
importance: 1
category: research
related_publications: true
status: Accepted
venue: INTERSPEECH 2026
status_kind: accepted
question: Does a quality-aware fusion model actually use its reliability signals at inference time?
metrics:
  - value: "25"
    label: runs / dataset
  - value: "2"
    label: multimodal datasets
tags:
  - Multimodal ML
  - Evaluation
  - Reliability
research_theme: Reliability diagnostics
home_featured: true
home_order: 2
card_size: standard
card_index: "02"
---

## Research question

Multimodal models often receive quality estimates for audio, video, or physiological signals. A model may appear “quality-aware,” yet still ignore those signals at decision time. This project asks a sharper question: **does changing the alignment between quality and the underlying instance measurably change the model's predictions?**

## Approach

I developed a leakage-safe intervention diagnostic that:

1. freezes trained experts and fusion parameters;
2. preserves the marginal distribution of quality values;
3. shuffles quality scores across held-out examples; and
4. measures whether model performance changes.

The evaluation covers StressID and CMU-MOSEI with 25 runs per dataset and subject- or video-disjoint splits. Positive controls test whether the diagnostic responds when reliability genuinely tracks expert correctness.

## My contribution

I led the study design, implementation, experimental evaluation, failure analysis, and paper writing as first author and presenting author.

## Outcome

The work was accepted to INTERSPEECH 2026. Native quality signals produced near-zero performance changes, while positive controls confirmed that the diagnostic detects decision-level reliance when informative reliability signals are present. The result distinguishes nominal quality awareness from actual use of quality at inference time.

{% cite moon2026qualityaware %}
