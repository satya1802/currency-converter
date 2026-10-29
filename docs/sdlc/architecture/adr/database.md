<!-- sdlc:auto:start adr -->
# ADR-0003: Use PostgreSQL 16 for Database

Status: Accepted  
Date: 2026-10-29

## Context and Problem Statement

Which Database technology does the project use? Decided in architecture v2.

## Considered Options

- PostgreSQL 16
- SQLite
- DynamoDB

## Decision Outcome

Chosen option: PostgreSQL 16, because Only the latest rate snapshot and timestamp are persisted as a resilience fallback; Postgres 16 stores the rate map as JSONB reliably and costs nothing to adopt now (NFR-004).

## Consequences

More than strictly needed for one row, but it is the safe default and avoids a migration if persistence needs ever grow.
<!-- sdlc:auto:end adr -->