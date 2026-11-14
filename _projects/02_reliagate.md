---
layout: page
title: ReliaGate
description: Reliability routing for low-stakes wearable stress prediction.
importance: 2
category: research
related_publications: true
status: Accepted
venue: WellComp 2026
status_kind: accepted
question: When should a wearable stress model surface a prediction—and when should it withhold one?
metrics:
  - value: "+10.1 pp"
    label: coverage
  - value: "−5.6 pp"
    label: accepted risk
  - value: "4"
    label: public datasets
tags:
  - Selective prediction
  - Wearables
  - Distribution shift
research_theme: Selective prediction
home_featured: true
home_order: 1
card_size: standard
card_index: "01"
follow_on:
  title: ReliaGate++
  status: Ongoing follow-on work
  status_kind: ongoing
  question: Extending static routing into validation-locked temporal emission control and episode-level reliability auditing.
  metrics:
    - label: Cue precision
    - label: Subject reach
    - label: Episode coverage
  tags:
    - Time series
    - Reliability
  card_size: standard
  card_index: "04"
  anchor: reliagate-ongoing-follow-on-work
---

## Research question

A wearable stress model can be accurate on average while becoming unreliable for particular participants, signal-quality conditions, or shifted datasets. ReliaGate asks whether a trained predictor should **surface or withhold** each unchanged prediction without retraining the underlying stress model.

## Method

ReliaGate is a post-hoc reliability router that combines:

- model confidence;
- signal quality and modality trust;
- cross-modal agreement;
- train-standardized atypicality; and
- train-fitted embedding geometry.

The router is evaluated with subject-disjoint folds, fold-local selection, and paired held-out-subject intervals.

## Evaluation

I evaluated ReliaGate across WESAD, UBFC-Phys, EmpaticaE4Stress, and PhysioNetE4. On UBFC-Phys, relative to the learned no-geometry routing system, ReliaGate increased coverage by 10.1 percentage points while reducing accepted risk by 5.6 percentage points. WESAD analyses showed that favorable pooled outcomes could coexist with higher median per-subject accepted risk.

## ReliaGate++ (ongoing follow-on work)

I am extending static routing into validation-locked temporal emission control and auditing cue precision, false stress and reassurance, contradiction and flip rates, subject reach, and episode coverage.

## Status and contribution

I led the method development, implementation, evaluation, and manuscript writing as first author. The paper was **accepted at WellComp 2026**, a UbiComp/ISWC 2026 workshop.

## Paper and reproducibility artifacts

- [arXiv paper](https://arxiv.org/abs/2608.15951)
- [Authenticated aggregate-only reproduction release](https://github.com/jadenmoon27/reliagate-wellcomp2026)

The public release supports aggregate verification and provenance review. It
does not redistribute raw wearable signals, participant identifiers,
per-window predictions, embeddings, or model checkpoints.

{% cite moon2026reliagate %}
