# 3. Callback is a continuation, not a notification

**A callback ticket tells the caller exactly how to resume: the context and the Skill to run next. The caller may forget the task entirely while it waits.**

## Problem

Agents lose context: sessions end, windows overflow, models change. An agent that waits for an answer "in its head" loses the thread; a bare "done" message forces it to reconstruct what it was doing.

## Rule

Whether a callback is needed is decided by the **caller**, by one test: *does it need the answer to continue its own work?*

| Caller | Callback |
|---|---|
| Flow | No — fire and forget; the result lives where the Flow will look next run |
| Assistant mid-plan | Yes — it cannot continue without the answer |
| Human entry point | Optional — may ask the human whether to subscribe to completion or updates |

Decide separately for every call. A Flow's lack of an outer callback does not remove callbacks needed by nested participants. An Assistant may instead use an explicitly defined persisted observation/resume mechanism when appropriate.

The **caller predeclares** the continuation. The receiving owner prepares the Skill card and callback template; the executing side fills the actual result and evidence, without inventing the caller's next task. When requested, the callback ticket is **self-contained**:

- the context needed to resume;
- the Skill to run on arrival;
- a link to the original request.

On arrival the caller validates the result and invokes the continuation through its normal owner-mediated route. State lives in the ticket rather than relying on remembered conversation; the executor records its own progress the same way ([16](16-state-outside-the-conversation.md)).

## Result storage and progress

Saving a comment or artifact and waking a caller are different operations. If another step depends on the result, define how it will resume. Default completion-only callbacks do not send `pending` updates. Progress updates need a separate explicit subscription.

For example, a Developer asks a Publisher to create a draft PR and predeclares its own draft-review continuation. The Publisher returns the saved PR reference and actual publication outcome. The Developer reviews it through its Skill owner and admits it to review only if the check passes.

## Template

See [templates/callback-ticket.md](../templates/callback-ticket.md).
