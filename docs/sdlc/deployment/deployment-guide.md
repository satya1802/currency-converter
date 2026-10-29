# Deployment Guide

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start how-it-deploys -->
Pushes to `main` run `.github/workflows/deploy.yml`, which builds the API image (if there is a backend) and deploys the SPA to AWS Amplify. Commits touching only `docs/sdlc/**` don't deploy. Deployments can also be started from the platform's Deployment tab.
<!-- sdlc:auto:end how-it-deploys -->

<!-- sdlc:auto:start environments -->
| Name | Service | Runtime | Scaling | Environment |
|---|---|---|---|---|
| SPA hosting | React 19 static build served via S3 + CloudFront | Static assets / CDN | CDN edge caching, scales with traffic | dev |
| Rates API | FastAPI 0.115 on AWS (ECS Fargate / App Runner) | Python 3.12 container | 1 task, scale-out on CPU for shared spikes | dev |
| Hourly scheduler | Amazon EventBridge Scheduler | Managed cron trigger | n/a | dev |
| Cache | Redis (redis:7-alpine) | Container | single node, in-memory | dev |
| Database | PostgreSQL 16 (Amazon RDS) | Managed Postgres | single small instance | dev |
| Open Exchange Rates | Open Exchange Rates API | External SaaS | n/a | dev |
| ipinfo | ipinfo API | External SaaS | n/a | dev |
<!-- sdlc:auto:end environments -->

<!-- sdlc:auto:start live -->
_Not deployed yet._
<!-- sdlc:auto:end live -->

<!-- sdlc:auto:start topology -->
```mermaid
graph LR
  n_SPA_hosting["SPA hosting<br/>React 19 static build served via S3 + CloudFront"]
  n_Rates_API["Rates API<br/>FastAPI 0.115 on AWS (ECS Fargate / App Runner)"]
  n_Hourly_scheduler["Hourly scheduler<br/>Amazon EventBridge Scheduler"]
  n_Cache["Cache<br/>Redis (redis:7-alpine)"]
  n_Database["Database<br/>PostgreSQL 16 (Amazon RDS)"]
  n_Open_Exchange_Rates["Open Exchange Rates<br/>Open Exchange Rates API"]
  n_ipinfo["ipinfo<br/>ipinfo API"]
  n_SPA_hosting -->|"HTTPS"| n_Rates_API
  n_Rates_API -->|"TCP (Redis)"| n_Cache
  n_Rates_API -->|"TCP (PostgreSQL, TLS)"| n_Database
  n_Rates_API -->|"HTTPS"| n_Open_Exchange_Rates
  n_Rates_API -->|"HTTPS"| n_ipinfo
  n_Hourly_scheduler -->|"HTTPS"| n_Rates_API
```
<!-- sdlc:auto:end topology -->
