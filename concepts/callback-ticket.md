# Callback ticket

**A callback ticket is a ready-made continuation: the context and the Skill to run to resume work.**

- Requested by a caller that needs the answer to continue its own plan.
- Arrives in the caller's incoming [queue](queue.md) like any other card.
- The caller predeclares the continuation. The executing side fills the actual result, not a new instruction of its own choice.
- The receiving Assistant validates the outcome and prepares the continuation Skill's card through normal ownership.
- Saving the result and delivering a callback are different operations. Progress updates are separately requested; completion-only callers receive no unsolicited `pending` messages.

Template: [templates/callback-ticket.md](../templates/callback-ticket.md)
