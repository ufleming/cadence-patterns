# Protocol structure and delivery plan

Cadence Patterns publishes reusable concepts and interaction rules. A versioned package supplies the same reviewed documents and templates as a dependency. This plan establishes the protocol's structure; linking existing agent catalogs and adopting the package are separate work.

| Level | Content | Location |
| --- | --- | --- |
| Concept | Skill, Assistant, Flow, Gardener, card, callback, queue, core behavior, layer, Publisher | `concepts/` |
| Pattern | Problem, rule, what breaks without it, abstract example | `patterns/` |
| Contract | Reusable card and description templates (request, Skill card, callback, Assistant, Flow) | `templates/` |
| Worked example | One request through the whole interaction; one assistant from creation to its first card | `docs/request-lifecycle.md`, `docs/assistant-lifecycle.md` |
| Distribution | Version, inventory, validation, artifact | `manifest.json`, `package.json`, `docs/releases.md` |

Consumer-specific operating instructions belong in controlled consumer documentation. Public descriptions do not depend on a particular host, tracker, model, account or deployment.

The guiding principle across these levels is [reasonable sufficiency](../patterns/11-reasonable-sufficiency.md): pass what the next participant cannot work without, plus what you already have and is cheap to pass; prepare a foreseeable next step without separate downstream research. Conduct comes from ordered [layers](../concepts/layer.md). Supporting rules: [core behavior](../concepts/core-behavior.md) wins conflicts ([12](../patterns/12-conflicts-resolve-toward-the-core.md)), shared-record writes go through the [Publisher](../concepts/publisher.md) ([13](../patterns/13-write-through-the-publisher.md)), every written text has [two audiences](../patterns/14-two-audiences.md), rules can be traced to their layer ([15](../patterns/15-rule-provenance.md)), state lives outside the conversation ([16](../patterns/16-state-outside-the-conversation.md)) and authority is declared ([17](../patterns/17-declared-authority.md)).

A pattern earns its place by naming what breaks without it: a structural gap or a lost property such as transparency or continuity. Rules that only restate what a capable model already does, or that tell a human how to talk to an assistant, are left out.

## Delivery checklist

- [x] Align concepts and owner-mediated card preparation.
- [x] Describe nested requests and per-call callback decisions.
- [x] Separate result storage, continuation and progress updates.
- [x] Describe inbound/outbound workers, correlation and attributed history.
- [x] Retain separate requests and execute them in queue order.
- [x] Define Gardener-only Emergency as the next slot, without implied active interruption.
- [x] Verify native issue hierarchy and assignees.
- [x] Classify by the project **Work type** field plus title prefixes (`Concept ·`, `Pattern ·`, `Contract ·`) instead of native Issue Types. Revisit native types with an organization account at public launch.
- [x] Build and inspect a versioned public document artifact.
- [x] Review and merge the protocol documentation through a pull request.
- [x] 0.2.0: reasonable sufficiency, core behavior, soft duplicate check, Publisher, two audiences.
- [x] 0.3.0: layer, rule provenance, state outside the conversation, declared authority, Gardener creation and child Gardeners, Assistant and Flow templates, medium-agnostic cards, assistant lifecycle.
- Release publication is tracked in [Release 0.1.0](https://github.com/ufleming/cadence-patterns/issues/10); consumer adoption remains separate.

## Issue model

**Protocol** is the root, **Concept** defines vocabulary, **Pattern** defines a reusable rule, **Contract** defines a card/template, and **Release** tracks a versioned delivery. These describe protocol elements, not deployed agents. Reuse existing issues. A pattern belongs under its principal concept; a contract belongs under the concept it serves; a release belongs under the root. Cross-references describe other relationships.

Native Issue Types are not used: they are account-level and unavailable here. The project **Work type** field carries the classification, and title prefixes make it visible in plain issue lists. This decision is revisited when the catalog moves to an organization at public launch.

**Catalog issues are never closed.** A concept, pattern or contract issue stays open as the catalog entry for its file; its progress is shown by a maturity field, not by closing. Release and supporting-work issues close normally when done.

For project catalogs, [Work type and Pattern group](classification.md) provide the documented two-axis classification. Work type is a project field; its saved values and the separate native Issue Type must not be confused.

## Proposals to discuss

The following are candidates, not adopted rules:

- Stable operation identity, hard duplicate-effect prevention and restart recovery. (Adopted in 0.2.0: the [soft duplicate check](../concepts/queue.md#soft-duplicate-check); hard locks stay out of scope. Adopted in 0.3.0: resume from a recorded stop point, [16](../patterns/16-state-outside-the-conversation.md); recovery guarantees stay open.)
- Cancellation, timeouts and failure continuations.
- Fairness under sustained Emergency traffic.
- Compatibility between changed card schemas and mixed protocol versions.
- Provenance and immutable input references. (Adopted in 0.3.0: [rule provenance](../patterns/15-rule-provenance.md) and the layer stamp; immutable input references stay open.)
- Conformance evidence distinguishing installed instructions from observed behavior. (Started in 0.3.0: the [assistant lifecycle](assistant-lifecycle.md) doubles as a smoke scenario; recorded evidence stays open.)

## Acceptance

Definitions and examples agree about ownership, callback decisions, progress and Emergency. Public links require no privileged access. Work type and native-parent updates are read back. The artifact contains only public protocol files. Preparation, publication and adoption are reported separately.
