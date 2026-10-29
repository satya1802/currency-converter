# currency converter — SDLC Documentation

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start overview -->
currrency cinverter

**Documentation version:** v2
<!-- sdlc:auto:end overview -->

## Contents

<!-- sdlc:auto:start contents -->
| Document | State |
|---|---|
| [Requirements](requirements/README.md) | v1 approved |
| [Architecture](architecture/README.md) | 13 entries |
| [Development](development/README.md) | 1 entry |
| [Testing](testing/README.md) | 1 entry |
| [Deployment](deployment/README.md) | 1 entry |
| [Maintenance](maintenance/README.md) | 1 entry |
| [Data model](architecture/data-model.md) | generated |
| [API (OpenAPI)](architecture/api/openapi.yaml) | generated |
| [Decisions (ADRs)](architecture/adr/README.md) | 4 decisions |
| [Sprint plan](development/sprint-plan.md) | not generated yet |
| [Developer guide](development/developer-guide.md) | generated |
| [API reference](development/api-reference.md) | 1 route |
| [Test report](testing/test-report.md) | not run yet |
| [Tests](testing/test-cases.md) | 0 tests |
| [Deployment guide](deployment/deployment-guide.md) | not deployed yet |
| [Runbook](deployment/runbook.md) | not deployed yet |
| [Release notes](deployment/release-notes.md) | 0 releases |
| [Traceability matrix](traceability-matrix.md) | 11 requirements |
| [Changelog](CHANGELOG.md) | 2 versions |
<!-- sdlc:auto:end contents -->

## Open gaps

<!-- sdlc:auto:start open-gaps -->
### Requirements

- Product owner has not yet confirmed whether the optional ipinfo geolocation default will actually be included or dropped in favor of the fixed USD/EUR default.

### Architecture

- No mapping provided between this architecture and specific requirement IDs (US-001..US-011); traceability to individual requirements could not be confirmed.
- Behavior when ipinfo is unavailable is described at the endpoint level (defaults to USD) but not at the component level; confirm this is the sole fallback behavior.
- Technology rationale references NFR-001 and NFR-004, but these identifiers are not present in the known requirement key list (US-001..US-011); their source/definition is unconfirmed and should be reconciled with the requirements phase documentation.

### Development

- Development phase has not started: no planning or implementation records exist to document.

### Testing

- Testing phase has not started: no test plan or results exist to document.

### Deployment

- No deployment recorded yet: nothing has been released to any environment.

### Maintenance

- Maintenance phase has not started: the application has not been deployed, so there is nothing to maintain yet.
<!-- sdlc:auto:end open-gaps -->
