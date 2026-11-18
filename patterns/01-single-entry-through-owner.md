# 1. Single entry through the owner

**Whoever wants a Skill to run — a Flow, the Gardener, another Assistant — sends the request to the owner Assistant of that branch. The request travels down the tree; only the Skill's immediate parent fills its card.**

## Problem

With several kinds of callers (scheduled Flows, one-off human requests, Assistants mid-plan), describing every path to every Skill explodes into special cases. Callers that reach into a Skill directly also have to know its card, its inputs and its neighbours.

## Rule

1. A caller only knows the **owner Assistant** of the branch (e.g. refinement → Product Owner Assistant).
2. The owner and every level below **narrow the request** until it is concrete: specific items plus context.
3. The **immediate parent** of the Skill turns that into a filled card and runs the Skill.
4. Nothing outside the branch touches the Skill or its card.

Callers differ only in what they bring:

| Caller | Brings |
|---|---|
| Flow | A ready selection made by its own filter and priority rules |
| Gardener | Possibly a vague request ("all ready-for-refinement from priority X"); resolves it itself or lets the owner resolve it |
| Assistant mid-plan | Concrete items and, usually, a callback request |

## Minimal example (no Cadence)

```
assistants/product-owner.md        # owner: lists its sub-assistants
assistants/refinement.md           # immediate parent of the skill
skills/refinement/SKILL.md         # the job
skills/refinement/card.md          # card template
```

A scheduled job asks `product-owner` to "refine these 5 issues". `product-owner` delegates to `refinement`, which fills `card.md` and runs the Skill.
