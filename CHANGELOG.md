# Changelog

## 0.2.0 — 2026-11-18

- **Pattern 11 is now the guiding principle "Reasonable sufficiency"** (file renamed from `11-help-the-next-assistant.md`): include what the next participant cannot work without and what it will likely need when already at hand and cheap; exclude guesses and what costs more to gather than to find later. Two checks (lower and upper bound). Added "Prepare the foreseeable next step" with an explicit `prepared for: <step>` mark — a recommendation, not an order, with no separate downstream research.
- New concept **Core behavior** and **pattern 12 "Conflicts resolve toward the core"**: every agent inherits card handling, ownership and callbacks; contradicting extra instructions lose; smoke checks per layer, each layer inheriting the lower sets.
- **Soft duplicate check** in Queues: check by marker before writing; none → do the work, exists → merge quietly; hard locks explicitly out of scope.
- New concept **Publisher** and **pattern 13 "Write through the Publisher"**: one tool-agnostic writer to the shared tracker, configured per project.
- New **pattern 14 "Two audiences"**: human part simple → complex, agent block structured by the agent, amount proportional to the task.
- Skill card, request card and callback ticket templates updated (reasonable sufficiency section, `prepared for`, output layout, Publisher and marker); lifecycle example updated.
- Validation now also checks that every concept and pattern file is listed in the manifest.
- Established help the next assistant as a guiding principle, with known downstream-contract references, encountered observations and explicit gaps in the card templates; no separate downstream research is required.

- Documented Work type and Pattern group for catalog classification, including supporting release, adoption and housekeeping work.

## 0.1.0 — 2026-11-18

- Clarified owner-prepared Skill cards and initiating request context.
- Added Gardener as an entry-point instance and Emergency authority.
- Added per-call nested delegation and caller-predeclared continuations.
- Added separate incoming/outgoing workers, related-card history and separate queued requests.
- Defaulted progress updates off; Emergency takes the next slot without active interruption.
- Prepared the 0.1.0 document package, manifest, validation and delivery plan; no consumer adoption is implied.

- Initial patterns (draft): single entry through the owner, Skill card, callback as continuation.
- Patterns 4–8 (draft), including card queues with an emergency lane.
- Concepts: Skill, Assistant, Flow, Entry point, Card, Callback ticket, Queues.
- Templates: Skill card, callback ticket.
