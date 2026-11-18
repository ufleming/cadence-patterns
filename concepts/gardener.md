# Gardener

**A Gardener is a human-facing entry point that uses the same card and ownership patterns as other callers.**

It receives human intent, resolves enough context to route it, and requests work from the appropriate branch owner. It does not bypass a Skill's owner.

The Gardener carries completion and progress-notification preferences. It is the authority for marking a request **Emergency**; queue workers and Skills cannot promote ordinary work themselves.

This concept defines only the Gardener's role in the protocol. Its broader project responsibilities and implementation are outside this description.

See [Entry point](entry-point.md), [Card](card.md) and [Queues](queue.md).
