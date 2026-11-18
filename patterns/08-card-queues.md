# 8. Assistants communicate through card queues

**Assistants never call each other directly: they put cards into each other's incoming queues, with a separate emergency lane.**

## Problem

Direct calls block the caller and make every agent depend on the others being available right now.

## Rule

- Each Assistant has incoming and outgoing [queues](../concepts/queue.md), plus a parallel emergency lane for each.
- A delegated card goes out; the Assistant continues with its queue.
- A [callback ticket](../concepts/callback-ticket.md) comes back through the incoming queue.
- Emergency cards are handled before normal ones in both directions.
