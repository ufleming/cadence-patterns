# Protocol structure and delivery plan

Cadence Patterns publishes reusable concepts and interaction rules. A versioned package supplies the same reviewed documents and templates as a dependency. This plan establishes the protocol's structure; linking existing agent catalogs and adopting the package are separate work.

| Level | Content | Location |
| --- | --- | --- |
| Concept | Skill, Assistant, Flow, Gardener, card, callback, queue | `concepts/` |
| Pattern | Problem, rule, responsibilities, abstract example | `patterns/` |
| Contract | Reusable human-readable card templates | `templates/` |
| Worked example | One request through the whole interaction | `docs/request-lifecycle.md` |
| Distribution | Version, inventory, validation, artifact | `manifest.json`, `package.json`, `docs/releases.md` |

Consumer-specific operating instructions belong in controlled consumer documentation. Public descriptions do not depend on a particular host, tracker, model, account or deployment.

## Delivery checklist

- [ ] Align concepts and owner-mediated card preparation.
- [ ] Describe nested requests and per-call callback decisions.
- [ ] Separate result storage, continuation and progress updates.
- [ ] Describe inbound/outbound workers, correlation and attributed history.
- [ ] Retain separate requests and execute them in queue order.
- [ ] Define Gardener-only Emergency as the next slot, without implied active interruption.
- [ ] Classify existing issues and verify their native hierarchy.
- [ ] Build and inspect a versioned public document artifact.
- [ ] Review and merge the exact revision; publish release separately from consumer adoption.

## Issue model

**Protocol** is the root, **Concept** defines vocabulary, **Pattern** defines a reusable rule, **Contract** defines a card/template, and **Release** tracks a versioned delivery. These describe protocol elements, not deployed agents. Reuse existing issues. A pattern belongs under its principal concept; a contract belongs under the concept it serves; a release belongs under the root. Cross-references describe other relationships.

## Proposals to discuss

The following are candidates, not adopted rules:

- Stable operation identity, duplicate-effect prevention and restart recovery.
- Cancellation, timeouts and failure continuations.
- Fairness under sustained Emergency traffic.
- Compatibility between changed card schemas and mixed protocol versions.
- Provenance and immutable input references.
- Conformance evidence distinguishing installed instructions from observed behavior.

## Acceptance

Definitions and examples agree about ownership, callback decisions, progress and Emergency. Public links require no privileged access. Type and native-parent updates are read back. The artifact contains only public protocol files. Preparation, publication and adoption are reported separately.
