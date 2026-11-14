---
layout: default
title: Home
permalink: /
full_width: true
body_class: jm-minimal-site
description: Dartmouth computer science student studying reliable multimodal learning, selective prediction, and evaluation under task and observation shift.
---

<div class="jm-shell">
  <section class="jm-hero" aria-labelledby="jm-home-title">
    <div class="jm-hero-copy">
      <p class="jm-eyebrow">Dartmouth College · Computer Science</p>
      <h1 id="jm-home-title">Jaden Moon</h1>
      <p class="jm-subtitle">Reliable multimodal learning under changing tasks and observations.</p>
      <p class="jm-lede">
        I study when machine-learning systems should combine observations, surface predictions, or defer—and whether evaluation protocols support those decisions.
      </p>
      <p class="jm-bio">
        I am a Dartmouth CS undergraduate in the HealthX Lab with
        <a href="https://www.cs.dartmouth.edu/~campbell/" target="_blank" rel="noopener noreferrer">Prof. Andrew T. Campbell</a>.
        In 2026, I conducted radiotherapy AI research at the Mayo Clinic Comprehensive Cancer Center with Wei Liu, Ph.D.
      </p>

      <div class="jm-actions" aria-label="Primary links">
        <a class="jm-btn jm-btn-primary" href="{{ '/research/' | relative_url }}">Research</a>
        <a class="jm-btn" href="{{ '/publications/' | relative_url }}">Publications</a>
        <a class="jm-btn" href="{{ '/cv/' | relative_url }}">CV</a>
      </div>

      <div class="jm-socials" aria-label="External links">
        <a href="mailto:jaden.moon.27@dartmouth.edu">Email</a>
        <a href="https://scholar.google.com/citations?user=0y1JayYAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
        <a href="https://github.com/jadenmoon27" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/jmoon85" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>

    <div class="jm-portrait-wrap">
      <img class="jm-portrait" src="{{ '/assets/img/prof_pic.jpg' | relative_url }}" alt="Portrait of Jaden Moon">
    </div>

  </section>

  <section class="jm-section" aria-labelledby="selected-work-title">
    <div class="jm-section-heading">
      <p class="jm-eyebrow">Selected work</p>
      <h2 id="selected-work-title">Selected research outputs</h2>
    </div>

    <article class="jm-entry">
      <div class="jm-entry-meta">INTERSPEECH 2026</div>
      <div>
        <h3>When Does Quality-Aware Multimodal Fusion Matter?</h3>
        <p>A leakage-safe diagnostic for testing whether reliability scores affect otherwise fixed multimodal fusion decisions.</p>
        <p class="jm-links"><a href="https://www.isca-archive.org/interspeech_2026/moon26b_interspeech.pdf" target="_blank" rel="noopener noreferrer">Paper</a><a href="https://github.com/jadenmoon27/quality-aware-fusion-diagnostic" target="_blank" rel="noopener noreferrer">Code</a></p>
      </div>
    </article>

    <article class="jm-entry">
      <div class="jm-entry-meta">UbiComp Companion 2026 · WellComp</div>
      <div>
        <h3>ReliaGate</h3>
        <p>A post-hoc reliability gate that surfaces or withholds unchanged wearable-stress predictions.</p>
        <p class="jm-links"><a href="https://arxiv.org/abs/2608.15951v1" target="_blank" rel="noopener noreferrer">Paper</a><a href="https://github.com/jadenmoon27/reliagate-wellcomp2026" target="_blank" rel="noopener noreferrer">Code</a></p>
      </div>
    </article>

    <article class="jm-entry">
      <div class="jm-entry-meta">NeurIPS 2026 TAE · Non-archival</div>
      <div>
        <h3>Beyond Subject-Wise Splits</h3>
        <p>A pre-test audit of whether wearable-health evaluation plans can support their stated claims.</p>
        <p class="jm-links"><a href="https://openreview.net/forum?id=nfK5CJlXnW" target="_blank" rel="noopener noreferrer">Paper</a></p>
      </div>
    </article>

  </section>

  <section class="jm-section" aria-labelledby="current-work-title">
    <div class="jm-section-heading">
      <p class="jm-eyebrow">Current work</p>
      <h2 id="current-work-title">Ongoing research</h2>
    </div>

    <article class="jm-entry">
      <div class="jm-entry-meta">Honors thesis</div>
      <div>
        <h3>SensorAssess</h3>
        <p>Sensor–language transfer for predicting assessment-item responses from sensor histories and item language under participant-disjoint, semantic-family, and whole-instrument holdouts.</p>
      </div>
    </article>

    <article class="jm-entry">
      <div class="jm-entry-meta">Two manuscripts under review · IEEE ISBI 2027</div>
      <div>
        <h3>Radiotherapy contour evaluation</h3>
        <p>Evaluation of frozen MedGemma readouts and structural evaluability for selective review of head-and-neck radiotherapy contours.</p>
        <p class="jm-links"><a href="https://arxiv.org/pdf/2611.15370" target="_blank" rel="noopener noreferrer">MedGemma paper</a><a href="https://arxiv.org/pdf/2611.15255" target="_blank" rel="noopener noreferrer">Selective-review paper</a></p>
      </div>
    </article>

  </section>
</div>
