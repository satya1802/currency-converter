# Sprint Plan

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start sprints -->
## Sprint 1: Sprint 1

Stand up the rate-fetching, caching and refresh pipeline, and confirm anonymous public access

Capacity: 20 points · Committed: 15

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-007 | Story | Retrieve live FX rates from Open Exchange Rates | 8 | backend-agent | — |
| ↳ US-007-T1 | Task | Implement Open Exchange Rates client and fetch service | — | backend-agent | — |
| ↳ US-007-T2 | Task | Persist rate snapshot to Postgres | — | backend-agent | — |
| ↳ US-007-T3 | Task | Implement fallback and error logging on fetch failure | — | backend-agent | — |
| US-008 | Story | Refresh rates hourly | 3 | devops-agent | US-007, US-009 |
| US-009 | Story | Cache fetched rates in Redis | 3 | backend-agent | US-007 |
| US-010 | Story | Public anonymous access without login | 1 | qa-agent | — |

## Sprint 2: Sprint 2

Deliver the core converter: full currency selection, default pair, and instant amount conversion

Capacity: 20 points · Committed: 15

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-001 | Story | Enter amount and see instant converted result | 5 | frontend-agent | US-009, US-006 |
| US-002 | Story | Select from- and to-currencies across all ISO 4217 fiat currencies | 8 | frontend-agent | US-007 |
| ↳ US-002-T1 | Task | Implement GET /api/currencies endpoint | — | backend-agent | — |
| ↳ US-002-T2 | Task | Implement searchable currency dropdown component | — | frontend-agent | — |
| US-006 | Story | Default currency pair pre-selected | 2 | frontend-agent | US-002 |

## Sprint 3: Sprint 3

Add swap, effective rate, last-updated notice, and make the converter fully mobile-responsive

Capacity: 20 points · Committed: 14

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-003 | Story | Swap from- and to-currencies | 3 | frontend-agent | US-001, US-002 |
| US-004 | Story | Display the effective exchange rate | 3 | frontend-agent | US-001 |
| US-005 | Story | Show rates last-updated timestamp and indicative-only notice | 3 | frontend-agent | US-009 |
| US-011 | Story | Mobile-responsive converter page | 5 | frontend-agent | US-001, US-002, US-003, US-004, US-005 |

## Unscheduled

_Nothing unscheduled._
<!-- sdlc:auto:end sprints -->
