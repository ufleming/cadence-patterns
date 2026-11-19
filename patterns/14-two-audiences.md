# 14. Two audiences

**Every description, comment and ticket has two parts: a human part that reads from simple to complex and contains only what a human needs, and an agent block whose structure the writing agent chooses.**

## Problem

A text written for both humans and agents at once serves neither: humans wade through machine detail, and agents parse prose to find fields. Fixing one layout for agent material also forces every task into the same shape.

## Rule

| Part | Reader | Shape |
|---|---|---|
| **Human part** | people | Simple → complex: the idea in a plain sentence, who passes what to whom, a diagram if useful, then only the important details. Nothing a human does not need. |
| **Agent block** | agents | Collapsed at the end. Its structure is the agent's choice: fields, checklists, plans, references, a `prepared for: <step>` section. |

- Applies to **every** description, comment and ticket an agent writes.
- The amount in both parts follows [reasonable sufficiency](11-reasonable-sufficiency.md): proportional to the task, never padded.
- The human part must stand on its own; the agent block may refer to it rather than repeat it.

## Example

A QA comment opens with what will be tested and the main risk in two sentences, then lists the scenarios. Its collapsed agent block holds the exact test depth and aspect for an evaluation run, plus a `prepared for: verification` section with fixture references.

See [exemplars and top-down descriptions](06-exemplars-and-top-down.md) and [write through the Publisher](13-write-through-the-publisher.md).
