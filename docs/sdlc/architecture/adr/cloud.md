<!-- sdlc:auto:start adr -->
# ADR-0004: Use AWS for Cloud

Status: Accepted  
Date: 2026-10-29

## Context and Problem Statement

Which Cloud technology does the project use? Decided in architecture v2.

## Considered Options

- AWS
- GCP
- Azure

## Decision Outcome

Chosen option: AWS, because Cheap at low traffic, absorbs occasional spikes, and provides EventBridge Scheduler for the hourly refresh plus managed hosting for the key and backend in one place.

## Consequences

Any major cloud would work; AWS is the approved default and keeps the FX key and backend co-located.
<!-- sdlc:auto:end adr -->