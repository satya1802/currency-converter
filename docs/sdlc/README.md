# currency converter — SDLC Documentation

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start overview -->
currrency cinverter

**Documentation version:** v3
<!-- sdlc:auto:end overview -->

## Contents

<!-- sdlc:auto:start contents -->
| Document | State |
|---|---|
| [Requirements](requirements/README.md) | v1 approved |
| [Architecture](architecture/README.md) | 13 entries |
| [Development](development/README.md) | 18 entries |
| [Testing](testing/README.md) | 1 entry |
| [Deployment](deployment/README.md) | 1 entry |
| [Maintenance](maintenance/README.md) | 1 entry |
| [Data model](architecture/data-model.md) | generated |
| [API (OpenAPI)](architecture/api/openapi.yaml) | generated |
| [Decisions (ADRs)](architecture/adr/README.md) | 4 decisions |
| [Sprint plan](development/sprint-plan.md) | 3 sprints |
| [Developer guide](development/developer-guide.md) | generated |
| [API reference](development/api-reference.md) | 1 route |
| [Test report](testing/test-report.md) | not run yet |
| [Tests](testing/test-cases.md) | 0 tests |
| [Deployment guide](deployment/deployment-guide.md) | not deployed yet |
| [Runbook](deployment/runbook.md) | not deployed yet |
| [Release notes](deployment/release-notes.md) | 0 releases |
| [Traceability matrix](traceability-matrix.md) | 11 requirements |
| [Changelog](CHANGELOG.md) | 3 versions |
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

- No record of actual sprint execution, ticket status (in-progress/done), code commits, or pull requests -- only the approved plan was provided.
- No dates given for plan approval or sprint start/end.
- Sprint-to-story assignment is inferred from goal wording, not explicitly stated per item; confirm actual sprint assignment.
- No execution status (completed/in-progress) reported for this sprint.
- Sprint-to-story assignment is inferred, not explicitly stated per item; confirm actual sprint assignment.
- No execution status reported for this sprint.
- No implementation or completion evidence for this epic's child stories.
- No implementation status, code, or test evidence provided for this story.
- No implementation status for the story or either subtask (endpoint, dropdown component).
- No implementation status or test evidence provided.
- No implementation status for the story or its three subtasks (client/fetch service, persistence, fallback/error handling).
- No implementation status (e.g., scheduled job configured) or evidence of the hourly refresh running.
- No implementation or verification status provided (role assignment to qa-agent suggests this may be a verification task rather than a build task, but that is not stated explicitly).

### Testing

- Testing phase has not started: no test plan or results exist to document.

### Deployment

- No deployment recorded yet: nothing has been released to any environment.

### Maintenance

- Maintenance phase has not started: the application has not been deployed, so there is nothing to maintain yet.
<!-- sdlc:auto:end open-gaps -->
