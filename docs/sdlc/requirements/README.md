# Product Requirements

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
## Summary

### REQ-OVERVIEW · draft · source: requirements:overview

Lightweight-scope, version 1 requirements for a public currency converter: live FX conversion, hourly-refreshed Redis-cached rates, no login, mobile-responsive, indicative rates only.

Delivery scope: lightweight. Requirements version: 1. In-scope capabilities: amount entry with instant converted result; live FX rate retrieval; from/to currency selection across all ISO 4217 fiat currencies; effective exchange rate display; swap button; 'rates last updated' timestamp; server-side caching of fetched rates; public no-login access; mobile-responsive page; Open Exchange Rates as provider; hourly refresh; Redis caching; USD→EUR default pair; indicative rates only, not for executing transactions. Out of scope: cryptocurrency conversion; historical rate lookup/charts/data export; native iOS/Android app.

**Related:** EPIC-001, EPIC-002, EPIC-003

### REQ-TECH · approved · source: requirements:technology stack

Technology stack approved by the product owner: FastAPI backend, AWS hosting, PostgreSQL database, React frontend.

Backend: FastAPI 0.115 -- fetches FX rates server-side on a schedule, caches them, serves to visitors without exposing the API key. Cloud: AWS -- low-cost host for low traffic, absorbs spikes, hosts backend + key, scheduler triggers hourly refresh. Database: PostgreSQL 16 -- stores only the latest rate snapshot and last-updated timestamp as a fallback if the FX provider is briefly unreachable (no accounts/history). Frontend: React 19 -- single interactive screen (amount box, two currency pickers, swap button, live-updating result), mobile-responsive, supports searchable dropdown over 150+ ISO 4217 currencies. Rationale text for each choice was provided by the product owner and should be designed against exactly as specified, not substituted.

### REQ-SVC · approved · source: requirements:services

Three runtime services approved: Redis cache, Open Exchange Rates FX provider, ipinfo geolocation (optional).

Cache: Redis (container redis:7-alpine) -- holds latest rates in memory so conversions are instant and provider is not called per-visit. Fx rates: Open Exchange Rates (custom, env OPEN_EXCHANGE_RATES_APP_ID) -- source of all world fiat currency rates, called hourly by backend. Geolocation: ipinfo (custom, env IPINFO_TOKEN) -- optional lookup of visitor's country from IP to pre-fill a local-currency default base; can be dropped in favor of fixed USD→EUR default. Required API keys/env vars: IPINFO_TOKEN, OPEN_EXCHANGE_RATES_APP_ID, REDIS_URL.

**Related:** US-007, US-008, US-009, NFR-001, NFR-003, NFR-004

- ⚠ Product owner has not yet confirmed whether the optional ipinfo geolocation default will actually be included or dropped in favor of the fixed USD/EUR default.

### EPIC-001 · draft · source: requirements:EPIC-001

Core converter page: enter amount, pick from/to currency across all ISO 4217 fiat currencies, swap, see instant result, effective rate, and last-updated time.

The core converter page where any visitor enters an amount, selects a from- and to-currency across all ISO 4217 fiat currencies, swaps them, and instantly sees the converted value, the effective exchange rate, and when rates were last updated. Rates are indicative/informational only and not for executing transactions. Contains six user stories (US-001 through US-006).

**Related:** US-001, US-002, US-003, US-004, US-005, US-006

### US-001 · draft · source: requirements:US-001

Critical story: visitor enters an amount and immediately sees the converted value, with no reload or submit.

AC-001: entering a numeric amount with from/to currency selected displays the converted value instantly, no reload/submit. AC-002: changing the amount recalculates automatically. AC-003: non-numeric/invalid entry is rejected/ignored, no erroneous result shown. AC-004: empty amount input shows no result or a zero/empty result, not an error.

**Related:** EPIC-001, AC-001, AC-002, AC-003, AC-004, NFR-002

### US-002 · draft · source: requirements:US-002

Critical story: visitor selects from- and to-currency from the full ISO 4217 fiat currency list (~150+).

AC-005: currency selectors offer the full ISO 4217 fiat list (~150+) as provided by the rates provider. AC-006: each entry shown by ISO 4217 code (and name where available). AC-007: changing either currency updates the converted result and effective rate.

**Related:** EPIC-001, AC-005, AC-006, AC-007

### US-003 · draft · source: requirements:US-003

High-priority story: swap button reverses from- and to-currencies for quick opposite-direction conversion.

AC-008: clicking swap exchanges from- and to-currency. AC-009: after swap with an amount entered, result and effective rate immediately recalculate for the reversed pair.

**Related:** EPIC-001, AC-008, AC-009, NFR-002

### US-004 · draft · source: requirements:US-004

High-priority story: display the effective exchange rate used for the conversion.

AC-010: effective rate for 1 unit of from-currency in to-currency is displayed alongside the result. AC-011: rate updates whenever the currency pair changes or is swapped.

**Related:** EPIC-001, AC-010, AC-011, NFR-002

### US-005 · draft · source: requirements:US-005

High-priority story: show 'rates last updated' timestamp and an indicative-only notice.

AC-012: a 'rates last updated' timestamp reflecting cached rate data is displayed. AC-013: a clear notice states rates are indicative/informational only, not for executing transactions.

**Related:** EPIC-001, AC-012, AC-013

### US-006 · draft · source: requirements:US-006

Medium-priority story: USD/EUR pre-selected as default pair on first page load.

AC-014: on first page load, USD is pre-selected as from-currency, EUR as to-currency. AC-015: entering an amount with the default pair produces a conversion result without the visitor picking currencies first.

**Related:** EPIC-001, AC-014, AC-015

### EPIC-002 · draft · source: requirements:EPIC-002

Exchange rate data retrieval from Open Exchange Rates, hourly refresh, and server-side Redis caching.

Retrieval of live FX rates from Open Exchange Rates (requiring an API key), hourly refresh, and server-side caching in Redis so conversions are fast and resilient. Assumption: Open Exchange Rates is the provider, rates refresh hourly and are cached in Redis; rates are indicative only. Contains three user stories (US-007 through US-009).

**Related:** US-007, US-008, US-009

### US-007 · draft · source: requirements:US-007

Critical story: backend fetches live FX rates from Open Exchange Rates using an API key.

AC-016: with a valid API key, the full set of ISO 4217 fiat rates is retrieved and made available for conversions. AC-017: if the key is missing/invalid or the provider is unreachable, the system serves last cached rates and logs the error for the operator.

**Related:** EPIC-002, AC-016, AC-017, NFR-001, NFR-004, NFR-005

### US-008 · draft · source: requirements:US-008

High-priority story: rates refresh automatically every hour.

AC-018: once an hour has elapsed since last successful refresh, a new fetch is triggered; on success, cached rates and last-updated timestamp are replaced. AC-019: if a refresh attempt fails, previously cached rates remain in use and the timestamp keeps reflecting the last successful fetch.

**Related:** EPIC-002, AC-018, AC-019, NFR-004, NFR-005

### US-009 · draft · source: requirements:US-009

High-priority story: fetched rates are cached server-side in Redis to keep conversions fast and minimise provider calls.

AC-020: on successful fetch, rates and their fetch timestamp are stored in Redis. AC-021: visitor conversion requests are served from the Redis cache rather than calling the provider per request.

**Related:** EPIC-002, AC-020, AC-021, NFR-003

### EPIC-003 · draft · source: requirements:EPIC-003

Public, free, anonymous, mobile-responsive delivery of the converter as a web page (no native app).

The converter is delivered as a public, free, anonymous, mobile-responsive web page. Assumptions: no accounts or login; free with no payments or subscriptions; delivered as a mobile-responsive web page, not a native app. Contains two user stories (US-010, US-011).

**Related:** US-010, US-011

### US-010 · draft · source: requirements:US-010

Critical story: public anonymous access with no login and no payment ever requested.

AC-022: all converter functionality usable without login, sign-up, or account prompt. AC-023: completing a conversion never triggers a payment, billing, or subscription request; the tool is free to use.

**Related:** EPIC-003, AC-022, AC-023, NFR-007

### US-011 · draft · source: requirements:US-011

High-priority story: converter page adapts responsively to mobile, tablet, and desktop screens.

AC-024: on a mobile-sized viewport, amount input, currency selectors, swap button, and result are legible and usable without horizontal scrolling. AC-025: on a desktop viewport, layout adapts appropriately and all controls remain usable.

**Related:** EPIC-003, AC-024, AC-025, NFR-006

### NFR-001 · draft · source: requirements:NFR-001

Security: FX provider API key must never be exposed in the browser.

Backend fetches rates server-side using the secret Open Exchange Rates key and only serves resulting rates to visitors; the key itself is never sent to the browser.

**Related:** US-007

### NFR-002 · draft · source: requirements:NFR-002

Performance: conversions update instantly with no page reload or submit button.

Applies to amount entry, currency selection, and swap -- all must recalculate the result and rate live as the visitor interacts, without a reload or submit action.

**Related:** US-001, US-002, US-003, US-004

### NFR-003 · draft · source: requirements:NFR-003

Performance: conversions must be served from the Redis cache, not from the provider per request.

Minimises FX provider calls and rate-limit exposure; the Redis cache is the serving path for all visitor conversion requests.

**Related:** US-009

### NFR-004 · draft · source: requirements:NFR-004

Availability: graceful fallback to last cached rates if the FX provider is unreachable or the key is invalid.

The tool must keep working by serving the last cached rates, with the last-updated timestamp continuing to reflect the most recent successful fetch.

**Related:** US-007, US-008

### NFR-005 · draft · source: requirements:NFR-005

Maintainability: failed rate fetches must be logged for the operator.

Logging must capture when and why an hourly refresh or fetch attempt did not succeed.

**Related:** US-007, US-008

### NFR-006 · draft · source: requirements:NFR-006

Usability: converter must be legible and usable across phone, tablet, and desktop.

All controls remain usable at every breakpoint, with no horizontal scrolling on mobile viewports.

**Related:** US-011

### NFR-007 · draft · source: requirements:NFR-007

Privacy: fully anonymous use, no accounts, no payment, no permanent user data.

Only the latest rate snapshot and its last-updated timestamp are persisted; no personal or account data is stored.

**Related:** US-010
<!-- sdlc:auto:end narrative -->

<!-- sdlc:auto:start summary -->
**Requirements version:** v1  
**Delivery scope:** lightweight  
**Approved:** 2026-10-29

**Capabilities in scope:** Amount entry with instant converted result, Live FX rate retrieval for the conversion, From-currency and to-currency selection across all ISO 4217 fiat currencies, Effective exchange rate display, Swap from/to currencies button, "Rates last updated" timestamp, Server-side caching of fetched rates, Public, no-login access for any visitor, Mobile-responsive converter page, Open Exchange Rates as the FX rate provider, Hourly refresh of exchange rates, Rates cached in Redis, USD to EUR pre-selected as the default currency pair, Indicative rates only, not for executing transactions

**Approved technology stack:**

| Layer | Choice | Rationale |
|---|---|---|
| backend | FastAPI | The backend's one job is small: on a schedule, fetch rates from the third-party FX API with your secret key, cache them server-side, and serve them to visitors so the key is never exposed in the browser. FastAPI is a lightweight Python service that does exactly this with very little code, and its built-in hourly-refresh and simple endpoints match your 'refreshed periodically, cached server-side' requirement directly. |
| cloud | AWS | A public, free tool needs a host that is cheap at low traffic, stays up, and absorbs occasional spikes if the tool gets shared. AWS covers all of that, keeps your FX API key and backend in one place, and its scheduler can trigger the hourly rate refresh. It is the default here and fits a product with no special hosting needs. |
| database | PostgreSQL | You deliberately have no accounts, no history, and no saved user data, so there is almost nothing to store permanently -- the live rates live in the cache. PostgreSQL is here as a reliable place to keep the latest rate snapshot and the last-updated timestamp so the tool still shows a recent value if the FX provider is briefly unreachable. It is the safe default and costs you nothing to adopt now. |
| frontend | React | Your whole product is one interactive screen: an amount box, two currency pickers, a swap button, and a result that updates the instant someone types. React is built exactly for this kind of live, no-reload interaction, and it produces the mobile-responsive web page you asked for (no native app needed). A searchable dropdown over 150+ ISO 4217 currencies is a solved, well-supported pattern here. |
<!-- sdlc:auto:end summary -->

<!-- sdlc:auto:start epics -->
## EPIC-001: Currency Conversion Experience

The core converter page where any visitor enters an amount, selects a from- and to-currency across all ISO 4217 fiat currencies, swaps them, and instantly sees the converted value, the effective exchange rate, and when rates were last updated. Rates are indicative/informational only and not for executing transactions.

### US-001: Enter amount and see instant converted result

**Priority:** critical

> As a visitor, I want to enter an amount and immediately see it converted into the target currency, so that I can quickly find out what an amount is worth in another currency.

| ID | Given | When | Then |
|---|---|---|---|
| AC-001 | I am on the converter page with a from- and to-currency selected | I enter a numeric amount in the amount input | the converted value in the to-currency is displayed instantly without a page reload or a submit button |
| AC-002 | I have entered an amount and seen a result | I change the amount to a different value | the converted result recalculates automatically to reflect the new amount |
| AC-003 | I am on the converter page | I enter a non-numeric or invalid value in the amount input | the field rejects or ignores the invalid entry and no erroneous result is shown |
| AC-004 | the amount input is empty | the page is in its default state | no converted result or a zero/empty result is shown rather than an error |

### US-002: Select from- and to-currencies across all ISO 4217 fiat currencies

**Priority:** critical

> As a visitor, I want to choose a from-currency and a to-currency from the full set of world fiat currencies, so that I can convert between any two supported currencies.

| ID | Given | When | Then |
|---|---|---|---|
| AC-005 | I am on the converter page | I open the from-currency or to-currency selector | I can choose from the full ISO 4217 fiat currency list (~150+ currencies) as provided by the rates provider |
| AC-006 | the currency list is displayed | I look at each entry | each currency is identified by its ISO 4217 code (and name where available) so I can distinguish currencies |
| AC-007 | I have selected a from- and to-currency and entered an amount | I change either the from- or to-currency | the converted result and effective rate update to reflect the newly selected currency pair |

### US-003: Swap from- and to-currencies

**Priority:** high

> As a visitor, I want a swap button that reverses the from- and to-currencies, so that I can quickly convert in the opposite direction without re-selecting currencies.

| ID | Given | When | Then |
|---|---|---|---|
| AC-008 | I have a from-currency and a to-currency selected | I click the swap button | the from- and to-currencies are exchanged with each other |
| AC-009 | I have an amount entered and swap the currencies | the swap completes | the converted result and effective rate immediately recalculate for the reversed pair |

### US-004: Display the effective exchange rate

**Priority:** high

> As a visitor, I want to see the effective exchange rate used for the conversion, so that I understand the rate applied to my amount.

| ID | Given | When | Then |
|---|---|---|---|
| AC-010 | a from- and to-currency are selected | a conversion result is shown | the effective rate for 1 unit of the from-currency in the to-currency is displayed alongside the result |
| AC-011 | I change the currency pair or swap currencies | the conversion recalculates | the displayed effective rate updates to match the current pair |

### US-005: Show rates last-updated timestamp and indicative-only notice

**Priority:** high

> As a visitor, I want to see when the rates were last updated and a note that they are indicative, so that I know how current the rates are and that they are not for executing transactions.

| ID | Given | When | Then |
|---|---|---|---|
| AC-012 | the converter page is showing rates | I view the page | a 'rates last updated' timestamp reflecting the cached rate data is displayed |
| AC-013 | the converter page is displayed | I view the result area | a clear notice states the rates are indicative/informational only and not for executing transactions |

### US-006: Default currency pair pre-selected

**Priority:** medium

> As a visitor, I want a sensible default currency pair pre-selected when I arrive, so that I can start converting immediately without configuring currencies first.

| ID | Given | When | Then |
|---|---|---|---|
| AC-014 | I open the converter page for the first time | the page loads | USD is pre-selected as the from-currency and EUR as the to-currency |
| AC-015 | the default pair is pre-selected | I enter an amount | a conversion result is produced using the default pair without me having to pick currencies |

## EPIC-002: Exchange Rate Data & Caching

Retrieval of live FX rates from Open Exchange Rates (requiring an API key), hourly refresh, and server-side caching in Redis so conversions are fast and resilient. Assumption: Open Exchange Rates is the provider, rates refresh hourly and are cached in Redis; rates are indicative only.

### US-007: Retrieve live FX rates from Open Exchange Rates

**Priority:** critical

> As a site operator, I want the system to fetch current FX rates from Open Exchange Rates using an API key, so that conversions are based on live market rates.

| ID | Given | When | Then |
|---|---|---|---|
| AC-016 | a valid Open Exchange Rates API key is configured | the system fetches rates | the full set of ISO 4217 fiat rates is retrieved from Open Exchange Rates and made available for conversions |
| AC-017 | the API key is missing or invalid, or the provider is unreachable | a rate fetch is attempted | the failure is handled gracefully by serving the last cached rates and the error is logged for the operator |

### US-008: Refresh rates hourly

**Priority:** high

> As a site operator, I want rates to refresh automatically every hour, so that displayed rates stay reasonably current without manual intervention.

| ID | Given | When | Then |
|---|---|---|---|
| AC-018 | the system is running | an hour has elapsed since the last successful refresh | a new rate fetch is triggered and the cached rates and last-updated timestamp are replaced on success |
| AC-019 | an hourly refresh attempt fails | the provider returns an error or is unreachable | the previously cached rates remain in use and the last-updated timestamp continues to reflect the last successful fetch |

### US-009: Cache fetched rates in Redis

**Priority:** high

> As a site operator, I want fetched rates cached server-side in Redis, so that conversions are fast and provider calls are minimised.

| ID | Given | When | Then |
|---|---|---|---|
| AC-020 | rates have been fetched from the provider | the fetch succeeds | the rates and their fetch timestamp are stored in Redis for serving to visitors |
| AC-021 | a visitor requests a conversion | the system needs rate data | the rates are served from the Redis cache rather than calling the provider on each request |

## EPIC-003: Public Access & Responsive Delivery

The converter is delivered as a public, free, anonymous, mobile-responsive web page. Assumptions: no accounts or login; free with no payments or subscriptions; delivered as a mobile-responsive web page, not a native app.

### US-010: Public anonymous access without login

**Priority:** critical

> As a visitor, I want to use the converter without creating an account or logging in, so that I can convert currencies instantly and anonymously.

| ID | Given | When | Then |
|---|---|---|---|
| AC-022 | I navigate to the converter URL | the page loads | I can use all converter functionality without any login, sign-up, or account prompt |
| AC-023 | I am using the tool | I complete a conversion | no payment, billing, or subscription is requested at any point and the tool is free to use |

### US-011: Mobile-responsive converter page

**Priority:** high

> As a visitor on a mobile device, I want the converter page to adapt to my screen size, so that I can use it comfortably on phones, tablets, and desktops.

| ID | Given | When | Then |
|---|---|---|---|
| AC-024 | I open the converter on a mobile-sized viewport | the page renders | the amount input, currency selectors, swap button, and result are legible and usable without horizontal scrolling |
| AC-025 | I open the converter on a desktop viewport | the page renders | the layout adapts appropriately and all controls remain usable |
<!-- sdlc:auto:end epics -->
