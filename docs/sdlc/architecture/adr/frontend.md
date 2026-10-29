<!-- sdlc:auto:start adr -->
# ADR-0001: Use React 19 for Frontend

Status: Accepted  
Date: 2026-10-29

## Context and Problem Statement

Which Frontend technology does the project use? Decided in architecture v2.

## Considered Options

- React 19
- Vue
- Svelte

## Decision Outcome

Chosen option: React 19, because The whole product is one live, no-reload screen (amount box, two pickers, swap, instant result); React 19 handles this reactive recalculation cleanly and produces the mobile-responsive page required.

## Consequences

A full SPA framework is slightly more than a static page would need, but it gives the instant interactivity (NFR-002) and the searchable 150+ currency dropdown with no custom plumbing.
<!-- sdlc:auto:end adr -->