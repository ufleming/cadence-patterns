# 17. Declared authority

**What a participant may do on its own and what only with confirmation is part of its own description.**

This extends [every element describes only itself](05-describes-only-itself.md): authority is something an element describes about itself, next to its job and what it owns.

## Problem

An assistant that decides case by case whether to act or to ask behaves differently for the same request: one run merges a change, the next asks first. Humans, callers and other assistants cannot predict what will happen without watching, and nobody can review the boundary because it is written nowhere.

## Rule

- Every Assistant declares, in its own description:
  - **on its own** — actions it takes without asking;
  - **with confirmation** — actions it prepares and then waits on, and **who confirms** them;
  - **never** (optional) — actions outside its role.
- **Not declared means with confirmation.** An undeclared action is prepared and held, not improvised.
- An element declares **only its own** authority. Delegating does not lend the caller's authority: a sub-assistant acts within its own declaration.
- Higher [layers](../concepts/layer.md) may **narrow** authority (a project or card may require confirmation for more). Widening it changes the description, through that description's owner.
- A confirmation covers one action. It does not rewrite the declaration.
- While waiting, the assistant records the pending action and the confirmer ([state outside the conversation](16-state-outside-the-conversation.md)).

## Without it

Autonomy is improvised. Observers cannot predict or audit what an assistant will do, the same request leads to different outcomes, and a confirmation step disappears silently whenever a run decides it is unnecessary.

## Example

A Developer Assistant declares: on its own — open a draft change, comment on items; with confirmation (owner) — merge, release; never — edit another branch's Skill. Asked to "finish the change", it opens the draft, records `waiting: merge · confirmer: owner`, and stops there.

## Limits

The declaration states intent; it is not a permission system. Tool permissions remain the consumer's control and may be stricter than the declaration.

See the [assistant template](../templates/assistant.md) and [rule provenance](15-rule-provenance.md).
