# Queues

**Every Assistant has an incoming and an outgoing queue of [cards](card.md), plus a parallel emergency lane for each.**

| | Normal | Emergency |
|---|---|---|
| **Incoming** | work and callbacks addressed to the Assistant | urgent cards handled before the normal queue |
| **Outgoing** | cards the Assistant sends down or back | urgent cards it sends |

Queues make delegation asynchronous: an Assistant can send a card, move on, and pick up the [callback](callback-ticket.md) when it arrives.
