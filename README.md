# Pricing Experiment Studio

Premium React + TypeScript workspace for packaging experiments, price anchoring, elasticity readouts, and executive pricing decisions.

## Executive Summary

Pricing changes are easy to frame as design tweaks or finance-side adjustments. In reality, they alter trust, activation, plan selection, procurement confidence, and long-term revenue mix. Pricing Experiment Studio treats monetization changes like a controlled operating system: hypotheses are visible, guardrails are explicit, and rollout decisions stay tied to commercial outcomes.

## Recruiter Takeaway

This project shows product sense and operator thinking at the same time. It is designed like an internal tool for teams that need to test pricing without damaging conversion quality or executive trust.

## Tech Stack

[![React](https://img.shields.io/badge/React-19-111827?style=for-the-badge&logo=react&logoColor=61DAFB&labelColor=111827&color=0F172A)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-111827?style=for-the-badge&logo=vite&logoColor=FFD84D&labelColor=111827&color=6D28D9)](https://vite.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.X-111827?style=for-the-badge&logo=typescript&logoColor=E5F0FF&labelColor=111827&color=2563EB)](https://www.typescriptlang.org/)
[![CSS](https://img.shields.io/badge/CSS-Pricing%20Experiment%20UI-111827?style=for-the-badge&logo=css&logoColor=F8FAFC&labelColor=111827&color=F472B6)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Vitest](https://img.shields.io/badge/Vitest-Tested-111827?style=for-the-badge&logo=vitest&logoColor=ffffff&labelColor=111827&color=A855F7)](https://vitest.dev/)
[![License](https://img.shields.io/badge/License-MIT-111827?style=for-the-badge&logo=github&logoColor=ffffff&labelColor=111827&color=84CC16)](https://opensource.org/license/mit)

## Overview

| Area | What it covers |
| --- | --- |
| Commercial pressure | ARR exposure, conversion lift, elasticity confidence, rollback watch |
| Package architecture | Multi-tier comparison designed for packaging and price-shape tests |
| Live portfolio | Promote / hold / rollback pricing experiments |
| Elasticity map | Segment-sensitive response to pricing pressure |
| Scenario board | Which commercial outcome each pricing strategy optimizes for |
| Guardrails + action queue | Rollout discipline and next-step execution |

## Business Problem

Most pricing changes fail because teams optimize one outcome in isolation:

- more immediate cash
- higher ARPA
- cleaner pricing page conversion
- simpler package ladder

What gets missed is the interaction between those gains and the downstream cost:

- worse activation quality
- lower enterprise trust
- procurement friction
- more support burden
- distorted pipeline mix

This project models pricing as a workflow where commercial upside and operational downside must be visible at the same time.

## Architecture / Workflow

```mermaid
flowchart LR
    A["Pricing hypothesis"] --> B["Package or paywall experiment"]
    B --> C["Audience / cohort targeting"]
    C --> D["Commercial guardrails"]
    D --> E["Elasticity + conversion review"]
    E --> F["Promote, hold, or rollback"]
```

## What An Engineering Leader Sees Here

- A frontend system shaped around pricing operations, not generic dashboard filler
- Clear commercial-state modeling: tests, cohorts, guardrails, scenario framing, action queues
- A design language that supports narrative comparison instead of widget clutter
- UI decisions anchored to GTM and monetization logic

## Screenshots

### Hero Capture

![Hero capture](https://raw.githubusercontent.com/mizcausevic-dev/pricing-experiment-studio/project/pricing-experiment-studio/screenshots/01-hero.svg)

### Package Architecture

![Package architecture](https://raw.githubusercontent.com/mizcausevic-dev/pricing-experiment-studio/project/pricing-experiment-studio/screenshots/02-ladder.svg)

### Elasticity and Cohort Readout

![Elasticity and cohort readout](https://raw.githubusercontent.com/mizcausevic-dev/pricing-experiment-studio/project/pricing-experiment-studio/screenshots/03-cohorts.svg)

### Guardrails and Action Queue

![Guardrails and action queue](https://raw.githubusercontent.com/mizcausevic-dev/pricing-experiment-studio/project/pricing-experiment-studio/screenshots/04-queue.svg)

## Local Run

```powershell
Set-Location "C:\Users\chaus\dev\repos\pricing-experiment-studio"
npm install
npm test
npm run build
npm run dev
```

## Portfolio Links

- [Kinetic Gain](https://kineticgain.com/)
- [Skills / Portfolio](https://mizcausevic.com/skills/)
- [LinkedIn](https://www.linkedin.com/in/mirzacausevic)
- [Medium](https://medium.com/@mizcausevic)
- [GitHub](https://github.com/mizcausevic-dev)
