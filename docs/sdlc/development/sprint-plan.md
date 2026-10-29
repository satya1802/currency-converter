# Sprint Plan

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start sprints -->
## Sprint 1: Sprint 1

Stand up the backend rate pipeline (fetch from Open Exchange Rates, cache in Redis, hourly refresh) and the full currency list endpoint with a searchable picker.

Capacity: 20 points · Committed: 19

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-002 | Story | Select from- and to-currencies across all ISO 4217 fiat currencies | 8 | frontend-agent | US-009 |
| ↳ US-002-T1 | Task | Implement GET /api/currencies endpoint | — | backend-agent | — |
| ↳ US-002-T2 | Task | Build searchable currency dropdown component | — | frontend-agent | — |
| ↳ US-002-T3 | Task | Wire currency selection state into conversion pipeline | — | frontend-agent | — |
| US-007 | Story | Retrieve live FX rates from Open Exchange Rates | 5 | integration-agent | — |
| US-008 | Story | Refresh rates hourly | 3 | backend-agent | US-007, US-009 |
| US-009 | Story | Cache fetched rates in Redis | 3 | backend-agent | US-007 |

## Sprint 2: Sprint 2

Deliver the core converter interaction: instant amount conversion, swap, effective rate, last-updated notice, and default currency pair.

Capacity: 20 points · Committed: 15

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-001 | Story | Enter amount and see instant converted result | 5 | frontend-agent | US-009, US-002 |
| US-003 | Story | Swap from- and to-currencies | 3 | frontend-agent | US-001, US-002 |
| US-004 | Story | Display the effective exchange rate | 2 | frontend-agent | US-001 |
| US-005 | Story | Show rates last-updated timestamp and indicative-only notice | 2 | frontend-agent | US-009 |
| US-006 | Story | Default currency pair pre-selected | 3 | backend-agent | US-002 |

## Sprint 3: Sprint 3

Verify anonymous public access and make the converter fully mobile-responsive.

Capacity: 20 points · Committed: 7

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-010 | Story | Public anonymous access without login | 2 | qa-agent | US-001, US-002 |
| US-011 | Story | Mobile-responsive converter page | 5 | frontend-agent | US-001, US-002, US-003, US-004, US-005, US-006 |

## Unscheduled

_Nothing unscheduled._
<!-- sdlc:auto:end sprints -->
