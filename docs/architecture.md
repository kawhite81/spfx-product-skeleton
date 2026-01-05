# Architecture Overview

This skeleton demonstrates a minimal but enterprise-safe SPFx architecture.

## Key Concepts
- Web parts are configuration-driven
- External dependencies are abstracted behind services
- UI explicitly handles loading, empty, and error states
- No tenant-specific assumptions are made

## Boundaries
- Web Part: orchestration and configuration
- Components: presentation and state rendering
- Services: data access and external calls
- Models: typed contracts for configuration and data

This separation is intentional and required.
