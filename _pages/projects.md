---
layout: page
title: research
permalink: /research/
description: Selected research on reliable multimodal learning, medical AI, and rigorous evaluation.
nav: true
nav_order: 2
horizontal: true
---

My work is organized around a common question: **when should we trust a model's prediction, and what evidence supports that trust?** The projects below span multimodal sensing, medical imaging, and language models, but share an emphasis on leakage-safe evaluation, subject-level generalization, and explicit failure analysis.

<div class="projects">
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="container">
    <div class="row row-cols-1">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
</div>
