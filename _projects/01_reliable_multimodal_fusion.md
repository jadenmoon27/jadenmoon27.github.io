---
layout: page
title: Reliable Multimodal Fusion
description: Diagnosing whether quality signals actually change multimodal decisions.
importance: 1
category: research
related_publications: true
---

## Research question

Multimodal models often receive quality estimates for audio, video, or physiological signals. A model may appear “quality-aware,” yet still ignore those signals at decision time. This project asks a sharper question: **does changing the alignment between quality and the underlying instance measurably change the model's predictions?**

## Approach

I developed a leakage-safe, post-hoc identifiability diagnostic that:

1. freezes trained unimodal experts and fusion parameters;
2. preserves the marginal distribution of quality values;
3. breaks quality–instance alignment only at inference time; and
4. measures the resulting clean-versus-broken performance gap.

The evaluation uses repeated, subject- or video-disjoint splits and positive controls designed to verify that the diagnostic responds when reliability genuinely tracks expert correctness.

## My contribution

I led the study design, implementation, experimental evaluation, failure analysis, and paper writing as first author.

## Outcome

The work was accepted to INTERSPEECH 2026. The central result is diagnostic rather than promotional: native quality signals can leave substantial oracle routing headroom while producing near-zero clean-versus-broken gaps, showing that nominal quality awareness does not necessarily imply decision-level reliance.

{% cite moon2026qualityaware %}
