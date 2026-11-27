# Cadence Patterns

**A small, versioned protocol for agent systems: work goes to the owner of a branch, travels down the tree, and the executor receives a filled card.**

These patterns grew inside Cadence, an agent system for running projects. They do not depend on GitHub, a tracker, a message bus, or a specific model: a folder of markdown files and any coding agent (Claude Code, Codex, …) is enough to apply them. Cards and queues are defined by structure, not storage; tickets are a recommended medium, not a requirement.

## Guiding principle

**Reasonable sufficiency.** Pass on everything the next participant cannot work without, plus what it will likely need when you already have it and it is cheap to pass. Leave out guesses and anything that costs more to gather than to find later. Two checks: *would they have to come back?* and *does it cost me more than it saves them?* When the next step is foreseeable, prepare what you already have for it, marked `prepared for: <step>`. This helps the next assistant do its work without separate downstream research. See [pattern 11](patterns/11-reasonable-sufficiency.md).

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
| **Core behavior** | What every agent built on the foundation inherits: card handling, ownership, callbacks. |
| **Publisher** | The single, tool-agnostic writer to the shared record (usually a tracker), configured per project. |
| **Layer** | One ordered source of conduct, from protocol patterns up to the prompt; each adds to the ones below and never contradicts them. |

More: [concepts/](concepts/) — [Skill](concepts/skill.md) · [Assistant](concepts/assistant.md) · [Flow](concepts/flow.md) · [Entry point](concepts/entry-point.md) · [Card](concepts/card.md) · [Callback ticket](concepts/callback-ticket.md) · [Queues](concepts/queue.md) · [Core behavior](concepts/core-behavior.md) · [Layer](concepts/layer.md) · [Publisher](concepts/publisher.md)

The [Gardener](concepts/gardener.md) is a human-facing entry point using this protocol; it also creates and maintains Assistants, Skills and Flows through the implementation core. Follow [one complete request](docs/request-lifecycle.md) through nested delegation, publication and continuation, and [one assistant](docs/assistant-lifecycle.md) from creation to its first card. The [structure and delivery plan](docs/STRUCTURE-PLAN.md) separates adopted rules from proposals still to discuss.

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
| 11 | [Reasonable sufficiency](patterns/11-reasonable-sufficiency.md) — guiding principle | draft |
| 12 | [Conflicts resolve toward the core](patterns/12-conflicts-resolve-toward-the-core.md) | draft |
| 13 | [Write through the Publisher](patterns/13-write-through-the-publisher.md) | draft |
| 14 | [Two audiences](patterns/14-two-audiences.md) | draft |
| 15 | [Rule provenance](patterns/15-rule-provenance.md) | draft |
| 16 | [State lives outside the conversation](patterns/16-state-outside-the-conversation.md) | draft |
| 17 | [Declared authority](patterns/17-declared-authority.md) | draft |
| 18 | [Intent first](patterns/18-intent-first.md) | draft |
| 19 | [Ask the human only what only the human holds](patterns/19-ask-only-what-the-human-holds.md) | draft |

## Templates

- [Initiating request card](templates/request-card.md)
- [Skill card](templates/skill-card.md)
- [Callback ticket](templates/callback-ticket.md)
- [Assistant description](templates/assistant.md)
- [Flow description](templates/flow.md)

## Versioning

Use a released version as a dependency and link to its patterns instead of copying them. Every release has notes describing what changed in each pattern.

The [release guide](docs/releases.md) explains validation and package preparation. The artifact contains public protocol documents only. Package availability does not itself load instructions, activate agents or demonstrate conformance.

## Contributing

Issues and PRs are welcome. A good pattern proposal states the problem, the rule, what breaks without it, and a minimal example that works without Cadence.

## License

[Apache License 2.0](LICENSE). Contributions are accepted under the same license.
