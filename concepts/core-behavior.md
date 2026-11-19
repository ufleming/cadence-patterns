# Core behavior

**Core behavior is what every agent built on the protocol foundation already knows before any extra instruction is added: how to handle cards, respect ownership and treat callbacks.**

- **Cards:** receive a request, validate its card, fill a Skill's card as its immediate owner, return the result to the declared destination.
- **Ownership:** enter a branch only through its owner, describe only itself, route nested work through the receiving owner.
- **Callbacks:** decide callback need per call, predeclare continuations, never invent the caller's next step.

## Layers

Agents are built in ordered [layers](layer.md): protocol patterns, the implementation core, the entry point, the project, the card and the prompt. The core lives in the first two. Each higher layer **inherits** the core and may **add** behavior; none may remove it. A freshly created agent with no extra instructions already shows the core behavior.

## Verification

Core behavior is checked by **smoke checks per layer**: a short list of invariants that always runs for the element types involved, whatever changed. Each layer adds its own smoke set and inherits the sets of the layers below it, so checks only grow upward.

When extra instructions contradict the core, the core wins: see [pattern 12](../patterns/12-conflicts-resolve-toward-the-core.md).

See [Assistant](assistant.md), [Card](card.md) and [Callback ticket](callback-ticket.md).
