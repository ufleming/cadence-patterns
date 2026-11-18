# 8. Assistants communicate through card queues

**Assistants never call each other directly: they put cards into each other's incoming queues, with a separate emergency lane.**

## Problem

Direct calls block the caller and make every agent depend on the others being available right now.

## Rule

- Each Assistant has incoming and outgoing [queues](../concepts/queue.md), plus a parallel emergency lane for each.
- A delegated card goes out; the Assistant continues with its queue.
- A [callback ticket](../concepts/callback-ticket.md) comes back through the incoming queue.
- Incoming and outgoing workers have distinct responsibilities. The executor takes the next eligible card when it is available.
- Correlate new cards with relevant history and decisions; preserve the sources of added context.
- Keep later requests separate, even if they concern the active item. Do not silently merge requests or overwrite active instructions. Each keeps its own result and callback obligations.
- Only the Gardener can mark Emergency. It becomes next before ordinary queued work; this does not imply interruption of the active operation.
- Do not send unsolicited `pending` updates. Completion callbacks and explicitly requested progress subscriptions are distinct.

## Example

A Flow requests refinement of five items. A Gardener then requests more work on one of them. The incoming worker links both cards, keeps the second queued and supplies the earlier result as context when available. A Gardener-marked Emergency is placed next without rewriting the active request. No completion-only caller is woken merely because a card is pending.

## Limits

The queue pattern does not by itself supply duplicate-effect prevention, restart recovery or fairness under sustained Emergency load. Those policies remain explicit consumer responsibilities and candidates for further patterns.
