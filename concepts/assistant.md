# Assistant

**An Assistant is an agent role that owns Skills and/or sub-assistants, like a team lead owns a team.**

- Receives work as [cards](card.md) in its [queues](queue.md).
- Narrows a request and delegates it down to the right sub-assistant or Skill.
- As the immediate parent of a Skill, fills that Skill's card and runs it.
- Describes only itself and links what it owns.
- An agent executing this role follows its owned Skill's procedure. If that procedure needs another branch, it prepares a separate request; the receiving owner fills that branch's Skill card.
- A run has its own execution context and can receive further queued requests while busy. Incoming and outgoing workers maintain the queues without rewriting active work.
- Follows [reasonable sufficiency](../patterns/11-reasonable-sufficiency.md): passes what the next participant cannot work without plus what it already has and is cheap to pass, and may prepare a foreseeable next step, without separate downstream research.
- Inherits [core behavior](core-behavior.md); writes to the shared record through the [Publisher](publisher.md); records its state outside the conversation ([16](../patterns/16-state-outside-the-conversation.md)) and acts within its [declared authority](../patterns/17-declared-authority.md); writes for [two audiences](../patterns/14-two-audiences.md).
