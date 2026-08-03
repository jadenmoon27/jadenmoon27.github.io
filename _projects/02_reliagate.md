---
layout: page
title: ReliaGate
description: Reliability routing for low-stakes wearable stress prediction.
importance: 2
category: research
related_publications: true
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

{% cite moon2026reliagate %}
