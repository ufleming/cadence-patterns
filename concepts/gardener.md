# Gardener

**A Gardener is a human-facing entry point that uses the same card and ownership patterns as other callers, and that grows the system it routes into: it creates and maintains its Assistants, Skills and Flows by the protocol.**

## Routing

It receives human intent, resolves enough context to route it, and requests work from the appropriate branch owner. It does not bypass a Skill's owner.

The Gardener carries completion and progress-notification preferences. It is the authority for marking a request **Emergency**; queue workers and Skills cannot promote ordinary work themselves.

## Creating and maintaining elements

- **Creates** Assistants, Skills and Flows from the protocol's templates ([assistant](../templates/assistant.md), [flow](../templates/flow.md), [skill card](../templates/skill-card.md)) by asking the implementation core to generate them. It does not write their conduct by hand; each generated element inherits the [core behavior](core-behavior.md) and carries a [layer](layer.md) stamp of its sources.
- **Maintains** them: when a lower layer changes, it has affected elements regenerated or updated by the same route, and moves linked elements through stages together ([pattern 7](../patterns/07-move-together.md)).
- Each element it creates has a declared owner and [declared authority](../patterns/17-declared-authority.md); the Gardener itself is subordinate to the same rules.

## Child Gardeners

A Gardener may have **child Gardeners**, each the entry point for one branch of the system. A child routes and maintains only inside its branch and refers anything outside it to its parent. Emergency authority follows the same tree: a child marks Emergency only within its branch.

This concept defines only the Gardener's role in the protocol. Its project responsibilities and implementation are outside this description.

See [Entry point](entry-point.md), [Card](card.md), [Queues](queue.md) and the [assistant lifecycle](../docs/assistant-lifecycle.md).
