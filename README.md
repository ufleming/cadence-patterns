# Cadence Patterns

**A small, versioned protocol for agent systems: work goes to the owner of a branch, travels down the tree, and the executor receives a filled card.**

These patterns grew inside [Cadence](https://github.com/ufleming) and are used by it as a dependency. They do not depend on GitHub, a message bus, or a specific model: a folder of markdown files and any coding agent (Claude Code, Codex, …) is enough to apply them.

> Status: `0.x` — the patterns are still moving. Expect breaking changes between minor versions until `1.0`.

## The model in one picture

```
Caller (Flow · Gardener · Assistant mid-plan)
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
| **Skill** | One job with a defined IN/OUT. Knows nothing about who called it or how inputs were selected. |
| **Assistant** | Owns Skills and/or sub-assistants. Describes only itself and links what it owns. |
| **Flow** | A recurring process (e.g. refinement). Holds schedule, filters and selection rules — never Skill logic. |
| **Gardener** | The conversational entry point a human talks to; turns one-off requests into delegated work. |
| **Card** | The filled template a Skill expects. The only way work reaches a Skill. |
| **Callback ticket** | A self-contained continuation: context + which Skill to run to resume. |

## Patterns

| # | Pattern | Status |
|---|---|---|
| 1 | [Single entry through the owner](patterns/01-single-entry-through-owner.md) | draft |
| 2 | [Work reaches a Skill only as a card](patterns/02-skill-card.md) | draft |
| 3 | [Callback is a continuation, not a notification](patterns/03-callback-as-continuation.md) | draft |
| 4 | Skill does only its job; selection belongs to the caller | planned |
| 5 | Every element describes only itself | planned |
| 6 | Exemplars and top-down descriptions | planned |
| 7 | Linked elements move through stages together | planned |

## Templates

- [Skill card](templates/skill-card.md)
- [Callback ticket](templates/callback-ticket.md)

## Using it as a dependency

Cadence packages reference a released version of this repo and link to its patterns instead of copying them. Releases carry release notes describing what changed in each pattern.

## Contributing

Issues and PRs are welcome. A good pattern proposal states the problem, the rule, and a minimal example that works without Cadence.
