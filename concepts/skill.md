# Skill

**A Skill is one job with a defined input and output.** Its procedure does not own the caller's selection or orchestration logic.

- **Input:** a filled [card](card.md) with attached inputs.
- **Output:** a result delivered where the card says.
- **Runs only through its parent [Assistant](assistant.md)** — never directly.
- **Who forms its context:** whoever asks for the work (a [Flow](flow.md), an [entry point](entry-point.md), another Assistant) brings the request; the Skill's immediate parent turns it into the card.
- A procedure can require work from another branch. The executing Assistant makes a nested request through that branch's owner; this does not turn the Skill into an independently acting agent.
