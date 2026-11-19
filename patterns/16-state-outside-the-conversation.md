# 16. State lives outside the conversation

**Everything needed to continue the work — decisions, progress and the stop point — is recorded in the system, not only in a session's context.**

## Problem

Sessions end, contexts are compacted, models change and another executor may take over. A [callback](03-callback-as-continuation.md) keeps a *waiting caller* independent of memory, but the executor's own work in progress still lives in its context until it finishes. Whatever the session knew and did not record is gone when it stops.

## Rule

- **Where:** at the item the work is about, in its result or a declared state record — wherever the next executor looks first. Not in private session notes.
- **What:**
  - decisions, with their reason;
  - progress: what is done (with references) and what remains;
  - the **stop point**: the next step and what it needs;
  - open questions and who is expected to answer them.
- **When:** at each meaningful step and before any point where the session may end (waiting for confirmation, a handoff, a long operation), not only on completion.
- **Resume from the record:** a resumed or new executor takes the record as the state. It does not assume memory of an earlier session and does not redo recorded decisions.
- The record is a written result: it goes through the [Publisher](../concepts/publisher.md) when it lands in a shared record, and carries a marker so each update replaces the previous one ([soft duplicate check](../concepts/queue.md#soft-duplicate-check)).

The amount follows [reasonable sufficiency](11-reasonable-sufficiency.md): enough for another executor to continue without asking.

## Without it

An interrupted session loses the work. Decisions are made again, possibly differently; finished steps are repeated or skipped; a second executor cannot take over. Continuity depends on one context window surviving.

## Example

An Assistant updating twelve descriptions finishes seven when its session ends. Its record on the item lists the seven with references, the decision to keep old links as redirects, and `next: description 8 · needs: exemplar link`. A new session reads the record and continues at description 8 without asking anyone what was decided.

## Limits

The pattern does not define storage, retention or recovery guarantees. It is not a lock: two executors resuming at once are resolved by the soft duplicate check, not prevented.

See [callback as continuation](03-callback-as-continuation.md) and [two audiences](14-two-audiences.md).
