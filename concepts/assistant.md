# Assistant

**An Assistant is an agent role that owns Skills and/or sub-assistants, like a team lead owns a team.**

- Receives work as [cards](card.md) in its [queues](queue.md).
- Narrows a request and delegates it down to the right sub-assistant or Skill.
- As the immediate parent of a Skill, fills that Skill's card and runs it.
- Describes only itself and links what it owns.
- An agent executing this role follows its owned Skill's procedure. If that procedure needs another branch, it prepares a separate request; the receiving owner fills that branch's Skill card.
- A run has its own execution context and can receive further queued requests while busy. Incoming and outgoing workers maintain the queues without rewriting active work.
