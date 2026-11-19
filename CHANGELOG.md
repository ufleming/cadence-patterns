# Changelog

## 0.3.0 — 2026-11-19

Patterns are the primary education every generated Skill, Assistant and Flow receives. Each new pattern states what breaks without it.

- New concept **Layer**: the ordered sources of conduct — protocol patterns, implementation core, entry point, project, card, prompt. Each layer adds and never contradicts the ones below; the core (layers 1–2) wins conflicts. Core behavior and pattern 12 now refer to it; pattern 12's smoke table follows the layer names.
- New **pattern 15 "Rule provenance"**: an assistant can name the rule it followed and its layer; a layer stamp records the sources a generated assistant was built from.
- New **pattern 16 "State lives outside the conversation"**: decisions, progress and the stop point are recorded at the item, at each meaningful step, and a resumed session continues from the record.
- New **pattern 17 "Declared authority"**: on its own / with confirmation (and who confirms) / never, in the element's own description; undeclared means with confirmation; higher layers may narrow, not widen. Pattern 5 lists declared authority among what an Assistant describes.
- **Gardener** concept extended: besides routing, it creates and maintains Assistants, Skills and Flows through the implementation core, and may have child Gardeners for branches.
- New templates: **Assistant description** (purpose, owner, entry, owned elements, declared authority, state, layer stamp) and **Flow description** (entry and exit, selection, stages, what moves together).
- **Medium-agnostic cards**: a card or queue may live in a tracker issue, a file or a message; structure matters, not storage. Tickets are recommended, not required. The Publisher writes to the "shared record" (in the common case a tracker); pattern 13's rule is unchanged.
- New worked example **One assistant from creation to its first card** (`docs/assistant-lifecycle.md`), with checks that double as a smoke scenario.
- Patterns 6 and 7 gained a Problem section. Pattern 3 links pattern 16.
- Structure plan: native Issue Types replaced by the project Work type field plus title prefixes (revisit at public launch); catalog issues are never closed; adopted proposals marked.
- Validation also checks that every template is in the manifest and that patterns from 15 on have a "Without it" section.

## 0.2.1 — 2026-11-19

Packaging only; concepts, patterns and templates are unchanged from 0.2.0.

- Published to GitHub Packages as `@ufleming/cadence-patterns` (`publishConfig.registry` `https://npm.pkg.github.com`), with a release workflow that validates the tag, publishes the checked archive and verifies registry integrity.
- The package inherits this repository's visibility (public). The release check now asserts that the package visibility equals the repository visibility instead of assuming private. Installing from GitHub Packages still requires a token with `read:packages`.

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
