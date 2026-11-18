# Card

**A card is how work moves between agents.** Every [Skill](skill.md) publishes the card it expects; the caller's request becomes a filled card on its way down.

- Contains the task, attached inputs (links, paths), the context the Skill needs, the expected output, and optionally a [callback](callback-ticket.md).
- Assistants exchange cards through their [queues](queue.md) instead of free-form messages.

Template: [templates/skill-card.md](../templates/skill-card.md)
