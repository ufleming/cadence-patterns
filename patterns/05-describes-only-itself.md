# 5. Every element describes only itself

**A Skill describes its logic, a Flow its schedule and selection, an Assistant itself and what it owns — and they link to each other instead of repeating each other.**

## Problem

When descriptions overlap, one change has to be made in several places, and sooner or later they disagree.

## Rule

| Element | Describes | Links to |
|---|---|---|
| Skill | job, diagram, input/output, its card | — |
| Flow | schedule, selection, the card it sends | owner Assistant |
| Assistant | itself, its role | the Skills and sub-assistants it owns |
