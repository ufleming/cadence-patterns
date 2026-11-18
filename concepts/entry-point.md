# Entry point

**The entry point is the agent a human talks to.** It turns one-off requests into delegated work.

- Clarifies a vague request ("everything ready for refinement, highest priority first") or passes it to the owner [Assistant](assistant.md), which can resolve it too.
- Decides whether a [callback](callback-ticket.md) is needed, and may ask the human whether to be notified on completion or on updates.
- A [Gardener](gardener.md) is one instance of this role. It carries the human's intent and notification preference through the same owner-mediated protocol.
