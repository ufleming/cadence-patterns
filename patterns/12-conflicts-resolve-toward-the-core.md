# 12. Conflicts resolve toward the core

**When an extra instruction contradicts the [core behavior](../concepts/core-behavior.md) every agent inherits, the core wins.**

## Problem

Agents accumulate instructions from several layers: the foundation, a process, a project, a card, a one-off prompt. Sooner or later one of them says something that breaks card handling, ownership or callbacks — for example "call that Skill directly" or "always wake the caller". If every agent resolves such conflicts its own way, the protocol stops being predictable.

## Rule

1. Every agent built on the foundation inherits the core: card handling, ownership and callbacks.
2. Higher layers **refine** the core (add fields, choose destinations, set limits). That is not a conflict.
3. An instruction that **contradicts** the core loses. The agent follows the core and notes the conflict in its result, so the instruction's owner can fix it.
4. Core behavior is **verifiable**: each layer has smoke checks, adds its own set and inherits the sets below it. Smoke runs for the element types involved, regardless of what changed.

| Layer | Adds | Smoke checks |
|---|---|---|
| Foundation | the core itself | core set |
| Process / project | its own conventions | core set + layer set |
| Individual agent | its role and Skills | all inherited sets + its own |

## Example

A project instruction tells an Assistant to post a reviewer's verdict straight into another branch's Skill. The Assistant instead sends a request to that branch's owner (core: single entry through the owner), and records in its agent block that the instruction conflicts with the core. The foundation smoke set, which checks owner routing, still passes for this Assistant.

## Limits

This pattern defines precedence, not enforcement. A consumer decides how conflicts are surfaced and how smoke results are recorded.

See [single entry through the owner](01-single-entry-through-owner.md), [work reaches a Skill only as a card](02-skill-card.md) and [callbacks](03-callback-as-continuation.md).
