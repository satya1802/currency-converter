<!-- sdlc:auto:start adr -->
# ADR-0002: Use FastAPI 0.115 for Backend

Status: Accepted  
Date: 2026-10-29

## Context and Problem Statement

Which Backend technology does the project use? Decided in architecture v2.

## Considered Options

- FastAPI 0.115
- Flask
- Express

## Decision Outcome

Chosen option: FastAPI 0.115, because The backend's only job is fetch-cache-serve; FastAPI gives typed endpoints and schedulable refresh in very little code while keeping the OXR key server-side (NFR-001).

## Consequences

A tiny service; FastAPI's async HTTP and startup hooks fit the hourly job and cache-first serving with minimal overhead.
<!-- sdlc:auto:end adr -->