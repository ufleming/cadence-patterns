# 9. Apply the same protocol inside a Skill

**Nested work is requested through the receiving Assistant, with its own scope, result destination and callback decision.**

## Problem

A procedure needs another role's contribution. Bypassing that role's ownership or inheriting one callback flag from the whole call tree loses input and continuation boundaries.

## Rule

The Assistant executing a Skill prepares a request for the other branch. The receiving branch routes it to the requested Skill's owner, which fills that Skill's card. The nested caller declares what result it needs and how to continue.

Return that result to the immediate caller. That caller remains responsible for completing its own work and reporting to the original caller. The outer request's notification preference does not override this nested relationship.

Apply [reasonable sufficiency](11-reasonable-sufficiency.md) at each handoff: read the declared receiver's accessible input contract, retain useful observations encountered in the current task, and return those with sources and honest gaps. This does not require extra research for the receiver or permit inventing its next task.

## Example

A Flow starts refinement without a callback. The refinement Assistant needs a Dev contribution before QA. The contribution is saved on the item, and refinement resumes through its declared callback or another explicit observation mechanism. The Flow itself is not woken.

See [owner routing](01-single-entry-through-owner.md), [callbacks](03-callback-as-continuation.md) and [lifecycle](../docs/request-lifecycle.md).
