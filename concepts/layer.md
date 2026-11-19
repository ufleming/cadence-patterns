# Layer

**A layer is one ordered source of an agent's conduct. Each layer adds to the layers below it and never contradicts them.**

| # | Layer | Supplies |
|---|---|---|
| 1 | Protocol patterns | the shared rules: ownership, cards, callbacks, queues |
| 2 | Implementation core | how one system realizes those rules, including how it creates Skills, Assistants and Flows |
| 3 | Entry point | the conduct of the human-facing agent, for example a [Gardener](gardener.md) |
| 4 | Project | the project's conventions: tools, fields, templates, limits |
| 5 | Card | the element's own description card and the filled card of the current request |
| 6 | Prompt | a one-off instruction in the current session |

- **Order:** lower layers are general and change rarely; higher layers are specific and close to the current task.
- **Add, never contradict:** a higher layer refines what is below it (adds fields, chooses destinations, narrows scope, sets limits). It does not remove or reverse a lower requirement.
- **The core wins:** layers 1–2 hold the [core behavior](core-behavior.md). A higher instruction that contradicts it loses, and the conflict is noted ([pattern 12](../patterns/12-conflicts-resolve-toward-the-core.md)). A contradiction between two higher layers is resolved the same way: the lower layer is followed and the conflict is noted for the owner of the higher one.
- **One home per rule:** every rule an agent follows belongs to one layer, so its fix is made there ([rule provenance](../patterns/15-rule-provenance.md)).
- **Checks grow upward:** each layer adds its own smoke checks and inherits the sets below it.

A system may leave a layer empty, for example a project with no entry point of its own; the order of the remaining layers does not change.

See [Core behavior](core-behavior.md), [Card](card.md) and the [assistant template](../templates/assistant.md), whose layer stamp records the sources an Assistant was built from.
