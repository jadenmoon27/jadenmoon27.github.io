---
layout: page
title: Radiotherapy Segmentation Quality Assurance
description: Clinically defensible verification of head-and-neck autosegmentation.
importance: 2
category: research
related_publications: false
---

## Research question

Automatic organ-at-risk segmentation can reduce contouring burden in radiation oncology, but deployment requires a reliable way to identify cases that need human review. This project studies **automatic quality assurance under asymmetric clinical risk**, where missing a poor segmentation is more consequential than sending an acceptable case for review.

## Approach

At Mayo Clinic, I am developing patient-level evaluation and verification pipelines that combine 3D medical images, predicted masks, and structured quality signals. The work emphasizes:

- patient-disjoint evaluation and leakage prevention;
- high-sensitivity selective prediction;
- calibration and thresholding under explicit safety constraints;
- foundation-model-based verification; and
- comparison against strong non-foundation-model baselines.

## My contribution

I built data-auditing and evaluation infrastructure, implemented model and thresholding experiments, analyzed failure modes, and contributed to the scientific framing and manuscript path.

## Status and disclosure

This is ongoing research advised by Prof. Wei Liu at the Mayo Clinic Comprehensive Cancer Center. Exact internal datasets, unpublished performance numbers, and protected clinical details are intentionally omitted until public release is authorized.
