---
layout: page
title: Resource-Efficient LLM Adaptation for Therapeutic Dialogue
description: Reproducible fine-tuning and structured evaluation under constrained compute.
importance: 3
category: research
related_publications: false
---

## Research question

How can open language models be adapted for therapeutic-dialogue generation while preserving reproducibility and enabling meaningful evaluation under limited compute?

## Approach and contribution

In Dartmouth's AIM HIGH Lab, advised by Prof. Nicholas C. Jacobson, I:

- fine-tuned LLaMA-3.1-8B-Instruct with LoRA and QLoRA;
- used 4-bit quantization to reduce training cost by 35 percent;
- designed versioned training and inference workflows;
- evaluated 1,753 generated responses using semantic metrics and structured error analysis; and
- developed prompting strategies to improve contextual grounding and reduce off-target generations.

## Research lesson

The project strengthened my interest in reliability as an evaluation problem: aggregate generation metrics are insufficient without explicit analysis of clinically meaningful error categories and failure modes.
