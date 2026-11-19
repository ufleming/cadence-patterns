# 13. Write through the Publisher

**All writes to the shared record — in the common case, a tracker — go through one writer, the [Publisher](../concepts/publisher.md). It is tool-agnostic and configured per project.**

## Problem

When every agent writes to the shared record itself, each one has to learn the tool, its fields and the project's conventions. Writes drift in shape, duplicates appear, and switching to another tool means retraining everyone.

## Rule

- Participants **prepare content**; the Publisher **writes** it. Reading may stay direct.
- The request is a normal card: what to write, where, and in which layout. The Publisher returns the saved reference and the actual outcome, including failures.
- The Publisher's operations are **generic** (create, read, update, delete for any resource type). Specialized operations exist only where quality and speed matter.
- The Publisher is **configured per project**: the available tool and its conventions are its knowledge, not the caller's.
- Before writing, it applies the [soft duplicate check](../concepts/queue.md#soft-duplicate-check).

## Example

A reviewer Assistant finishes its review and sends the Publisher a card: post this comment on item X, human part plus agent block. The Publisher finds no earlier comment with the same marker, posts it using the project's conventions and returns the comment reference. If the reviewer had been asked to resume afterwards, the reference arrives in its callback.

## Limits

The pattern does not choose a tool, medium, transport or permissions model. Moving to another tool — or from a tracker to files — means reconfiguring the Publisher, not its callers.

See [callback as continuation](03-callback-as-continuation.md) and [two audiences](14-two-audiences.md).
