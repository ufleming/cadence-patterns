# Skill

**A Skill is one job with a defined input and output.** It does not know who called it or how its inputs were chosen.

- **Input:** a filled [card](card.md) with attached inputs.
- **Output:** a result delivered where the card says.
- **Runs only through its parent [Assistant](assistant.md)** — never directly.
- **Who forms its context:** whoever asks for the work (a [Flow](flow.md), an [entry point](entry-point.md), another Assistant) brings the request; the Skill's immediate parent turns it into the card.
