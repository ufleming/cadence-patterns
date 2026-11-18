# Queues

**Each execution context receives and sends [cards](card.md) through distinct queues while its Assistant is working.**

| | Normal | Emergency |
|---|---|---|
| **Incoming** | work and callbacks addressed to the Assistant | urgent cards handled before the normal queue |
| **Outgoing** | cards the Assistant sends down or back | urgent cards it sends |

## Incoming and outgoing workers

An incoming worker retains each request, correlates it with earlier cards and decisions, and assembles attributed context while the executor is busy. An outgoing worker handles requests, results and requested callbacks. A run can assign these responsibilities to separate workers in its own chat or equivalent execution context; no particular host is required.

## Related requests stay separate

Later requests remain separate cards even when they concern the active item or add instructions. Enrich their context with relevant history, but do not silently merge them or rewrite the active card. Finish the earlier request, then process the next eligible request. Retain each caller's result destination and callback preference.

## Emergency and quiet waiting

Only the [Gardener](gardener.md) can mark Emergency. It takes the next execution slot before ordinary queued work, without implicitly interrupting or cancelling active work. Context may still be assembled while it waits.

Completion-only callers are not woken for `pending` or queue-position updates. Progress updates require an explicit subscription. Delivery and restart guarantees require additional consumer policies.
