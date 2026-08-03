---
layout: page
title: Radiotherapy Segmentation Quality Assurance
card_title: Radiotherapy Segmentation QA
description: Selective review of head-and-neck autosegmentation under asymmetric clinical risk.
importance: 3
category: research
related_publications: false
status: Ongoing
venue: Mayo Clinic
status_kind: ongoing
question: How can an AI system identify autosegmentations that require human review under asymmetric clinical risk?
metrics:
  - value: "59.4%"
    label: low-risk coverage
  - value: "99.91%"
    label: NPV
  - value: "0.936"
    label: AUROC
tags:
  - Medical imaging
  - Quality assurance
  - Calibration
research_theme: Selective prediction
home_featured: true
home_order: 3
card_size: standard
card_index: "03"
---

## Research question

Automatic organ-at-risk segmentation can reduce contouring burden in radiation oncology, but deployment requires a reliable way to identify cases that need human review. This project studies **selective review under asymmetric clinical risk**, where missing a poor segmentation is more consequential than sending an acceptable case for review.

## Approach

At Mayo Clinic, I developed a validation-locked selective-review model that combines CT, geometric, segmentation-uncertainty, and native-plan dose-context evidence.

The supporting pipeline is patient-disjoint and spans 752 cases, 37,228 contour instances, and 5 folds. It uses nnU-Net and SLURM with automated checks for split leakage, provenance, and reproducibility.

## Held-out evaluation

On 3,812 held-out contour instances, the model classified 59.4% as low risk while achieving:

- 99.91% negative predictive value;
- 97.47% sensitivity; and
- 0.936 AUROC.

## My contribution

I built data-auditing and evaluation infrastructure, implemented model and thresholding experiments, analyzed failure modes, and contributed to the scientific framing and manuscript development.

## Status and disclosure

This is ongoing research advised by Wei Liu, Ph.D., at the Mayo Clinic Comprehensive Cancer Center. Only aggregate results already disclosed in my final public CV are shown here; no patient-level data, protected examples, private paths, or internal clinical artifacts are disclosed.
