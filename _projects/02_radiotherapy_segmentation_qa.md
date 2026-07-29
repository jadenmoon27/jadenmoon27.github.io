---
layout: page
title: Radiotherapy Segmentation Quality Assurance
description: Selective review of head-and-neck autosegmentation under asymmetric clinical risk.
importance: 3
category: research
related_publications: false
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
