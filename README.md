# Cadence Patterns

**A small, versioned protocol for agent systems: work goes to the owner of a branch, travels down the tree, and the executor receives a filled card.**

These patterns grew inside Cadence, an agent system for running projects. They do not depend on GitHub, a message bus, or a specific model: a folder of markdown files and any coding agent (Claude Code, Codex, …) is enough to apply them.

## Guiding principle

**Help the next assistant do its work.** Understand its expected inputs when the next step is known, and preserve useful information encountered during your own task. Pass relevant facts and sources with the result; leave genuinely missing information for the next participant to obtain. This does not require separate downstream research or change the current task's required outputs. The [handoff pattern](patterns/11-help-the-next-assistant.md) explains how this applies to owners, Flows and cards.

> Status: `0.x` — the patterns are still moving. Expect breaking changes between minor versions until `1.0`.

## The model in one picture

```
Caller (recurring process · human entry point · agent mid-plan)
   │  request + context   (+ callback: needed or not)
   ▼
Owner Assistant of the branch        ← single entry point
   │  narrows the request to concrete items, delegates down
   ▼
Immediate parent sub-assistant       ← fills the Skill card (+ callback template)
   │
   ▼
Skill                                ← does one job, IN → OUT
   │
   └─► callback ticket back to the caller (only if requested)
```

## Vocabulary

| Term | Meaning |
|---|---|
| **Skill** | One job with a defined IN/OUT. Does not own caller selection or orchestration logic. |
| **Assistant** | Owns Skills and/or sub-assistants. Describes only itself and links what it owns. |
| **Flow** | A recurring process (e.g. backlog refinement). Holds schedule, filters and selection rules — never Skill logic. |
| **Entry point** | The agent a human talks to; turns one-off requests into delegated work. |
| **Card** | The filled template a Skill expects. The only way work reaches a Skill. |
| **Callback ticket** | A self-contained continuation: context + which Skill to run to resume. |
| **Queue** | Each Assistant's incoming and outgoing card queues, each with a parallel emergency lane. |

More: [concepts/](concepts/) — [Skill](concepts/skill.md) · [Assistant](concepts/assistant.md) · [Flow](concepts/flow.md) · [Entry point](concepts/entry-point.md) · [Card](concepts/card.md) · [Callback ticket](concepts/callback-ticket.md) · [Queues](concepts/queue.md)

The [Gardener](concepts/gardener.md) is a human-facing entry point using this protocol. Follow [one complete request](docs/request-lifecycle.md) through nested delegation, publication and continuation. The [structure and delivery plan](docs/STRUCTURE-PLAN.md) separates adopted rules from proposals still to discuss.

The [catalog classification guide](docs/classification.md) defines Work type and Pattern group, with selection rules for Concepts, Patterns, Contracts and supporting work.

## Patterns

| # | Pattern | Status |
|---|---|---|
| 1 | [Single entry through the owner](patterns/01-single-entry-through-owner.md) | draft |
| 2 | [Work reaches a Skill only as a card](patterns/02-skill-card.md) | draft |
| 3 | [Callback is a continuation, not a notification](patterns/03-callback-as-continuation.md) | draft |
| 4 | [Skill does only its job; selection belongs to the caller](patterns/04-skill-does-only-its-job.md) | draft |
| 5 | [Every element describes only itself](patterns/05-describes-only-itself.md) | draft |
| 6 | [Exemplars and top-down descriptions](patterns/06-exemplars-and-top-down.md) | draft |
| 7 | [Linked elements move through stages together](patterns/07-move-together.md) | draft |
| 8 | [Assistants communicate through card queues](patterns/08-card-queues.md) | draft |
| 9 | [Apply the same protocol inside a Skill](patterns/09-nested-delegation.md) | draft |
| 10 | [Consume a pinned protocol artifact](patterns/10-versioned-protocol.md) | draft |
| 11 | [Help the next assistant do its work](patterns/11-help-the-next-assistant.md) | draft |

## Templates

- [Initiating request card](templates/request-card.md)
- [Skill card](templates/skill-card.md)
- [Callback ticket](templates/callback-ticket.md)

## Versioning

Use a released version as a dependency and link to its patterns instead of copying them. Every release has notes describing what changed in each pattern.

The [release guide](docs/releases.md) explains validation and package preparation. The artifact contains public protocol documents only. Package availability does not itself load instructions, activate agents or demonstrate conformance.

## Contributing

Issues and PRs are welcome. A good pattern proposal states the problem, the rule, and a minimal example that works without Cadence.

## License

[Apache License 2.0](LICENSE). Contributions are accepted under the same license.
