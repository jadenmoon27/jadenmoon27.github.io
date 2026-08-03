---
layout: about
title: about
permalink: /
subtitle: Computer science at Dartmouth College · Reliable machine learning for health

profile:
  align: right
  image: prof_pic.jpg
  image_circular: true
  more_info: >
    <p>Dartmouth College</p>
    <p>Hanover, New Hampshire</p>

selected_papers: true
social: true

announcements:
  enabled: true
  scrollable: false
  limit: 4

latest_posts:
  enabled: false
  scrollable: false
  limit: 0
---

I am a computer science student at Dartmouth College working on **reliable machine learning for health**. I study selective prediction, uncertainty quantification, distribution shift, and multimodal health sensing, with an emphasis on evaluation protocols that remain meaningful under noisy or shifted evidence.

At Dartmouth's HealthX Lab, advised by Prof. Andrew T. Campbell, I develop reliability-routing and intervention-based diagnostics for wearable and multimodal stress prediction. My first-author paper, **“When Does Quality-Aware Multimodal Fusion Matter?”**, was accepted to INTERSPEECH 2026, and my first-author **ReliaGate** paper was accepted at WellComp 2026. At Mayo Clinic, advised by Wei Liu, Ph.D., I develop selective-review methods for quality assurance of radiotherapy autosegmentation.

My broader goal is to build AI systems whose reliability claims remain meaningful under the conditions that make health data difficult: heterogeneous measurements, missing modalities, distribution shift, limited labels, and asymmetric clinical risk. I plan to pursue a PhD in computer science focused on reliable machine learning, multimodal learning, and AI for healthcare.

## Research focus

- Reliable machine learning and selective prediction
- Uncertainty quantification and calibration
- Distribution-shift evaluation
- Multimodal health sensing
- Medical imaging and clinically defensible AI evaluation

## Current work

**ReliaGate.** I develop a post-hoc reliability router that uses confidence, signal quality and modality trust, cross-modal agreement, train-standardized atypicality, and train-fitted embedding geometry to surface or withhold unchanged wearable-stress predictions. The paper was accepted at WellComp 2026. [Read more →](/research/)

**ReliaGate++ (ongoing follow-on work).** I am extending static routing into validation-locked temporal emission control and auditing cue precision, false stress and reassurance, contradiction and flip rates, subject reach, and episode coverage.

**Multimodal reliance diagnostics.** I develop leakage-safe interventions that test whether quality-aware fusion actually uses reliability signals at decision time. [Read more →](/research/)

**Radiotherapy segmentation quality assurance.** I build patient-disjoint selective-review pipelines for head-and-neck organ-at-risk autosegmentation under high-sensitivity clinical constraints. [Read more →](/research/)
