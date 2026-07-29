---
layout: page
title: Resource-Efficient LLM Adaptation for Therapeutic Dialogue
description: Reproducible fine-tuning and structured evaluation under constrained compute.
importance: 4
category: research
related_publications: false
---

## Research question

How can open language models be adapted for therapeutic-dialogue generation while preserving reproducibility and enabling meaningful evaluation under limited compute?

## Approach and contribution

In Dartmouth's AIM HIGH Lab, advised by Prof. Nicholas C. Jacobson, I:

- fine-tuned LLaMA-3.1-8B-Instruct with LoRA/QLoRA;
- implemented reproducible training and inference workflows under constrained compute; and
- evaluated 1,753 generated responses using semantic metrics and structured failure analysis to identify contextual-grounding and off-target-generation errors.

## Research lesson

The project strengthened my interest in reliability as an evaluation problem: aggregate generation metrics are insufficient without explicit analysis of clinically meaningful error categories and failure modes.
