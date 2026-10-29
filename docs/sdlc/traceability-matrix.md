# Traceability Matrix

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start legend -->
Built from recorded links, not written by a model: requirement key → plan item (`source_stable_key`) → development ticket (`stable_key`) → the ticket's test steps → the last live deployment that started after the work finished. **AC tests** counts the story's acceptance criteria that have a test case, and those whose test cases all passed in the latest finished E2E run.
<!-- sdlc:auto:end legend -->

<!-- sdlc:auto:start matrix -->
| Requirement | Epic | Title | Plan items | Sprint | Design | Code | Commits | Ticket | Tests | AC tests | Deployed |
|---|---|---|---|---|---|---|---|---|---|---|---|
| US-001 | EPIC-001 | Enter amount and see instant converted result | US-001 | 2 | GET /api/rates, backend, frontend, rate_snapshot | — | — | not started | not run | 0/4 tested · 0/4 passing | — |
| US-002 | EPIC-001 | Select from- and to-currencies across all ISO 4217 fiat currencies | US-002, US-002-T1, US-002-T2, US-002-T3 | 1 | GET /api/currencies, backend, frontend, rate_snapshot | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-003 | EPIC-001 | Swap from- and to-currencies | US-003 | 2 | frontend | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-004 | EPIC-001 | Display the effective exchange rate | US-004 | 2 | GET /api/rates, frontend | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-005 | EPIC-001 | Show rates last-updated timestamp and indicative-only notice | US-005 | 2 | GET /api/rates, frontend, rate_snapshot | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-006 | EPIC-001 | Default currency pair pre-selected | US-006 | 2 | GET /api/geo-default, backend, frontend, geolocation | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-007 | EPIC-002 | Retrieve live FX rates from Open Exchange Rates | US-007 | 1 | backend, database, fx_provider, rate_snapshot | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-008 | EPIC-002 | Refresh rates hourly | US-008 | 1 | POST /internal/refresh, backend, rate_snapshot, scheduler | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-009 | EPIC-002 | Cache fetched rates in Redis | US-009 | 1 | GET /api/rates, backend, cache, database, rate_snapshot | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-010 | EPIC-003 | Public anonymous access without login | US-010 | 3 | frontend | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-011 | EPIC-003 | Mobile-responsive converter page | US-011 | 3 | frontend | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
<!-- sdlc:auto:end matrix -->
