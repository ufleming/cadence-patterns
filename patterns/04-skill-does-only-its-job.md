# 4. Skill does only its job; selection belongs to the caller

**A Skill never selects, filters or orders its inputs. Whoever forms the request does that.**

## Problem

When a Skill also decides *what* to work on, it cannot be reused: every caller with different selection rules needs a different copy.

## Rule

- A recurring [Flow](../concepts/flow.md) holds its own selection rules.
- An owner [Assistant](../concepts/assistant.md) forms a pool from its own context.
- A one-off request through the [entry point](../concepts/entry-point.md) is clarified before it reaches the Skill.
- The Skill receives concrete items on a card and does only its job (e.g. refinement only refines).
