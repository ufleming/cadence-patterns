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

When requested, the callback ticket is **self-contained**:

- the context needed to resume;
- the Skill to run on arrival;
- a link to the original request.

On arrival the caller just runs that Skill with that context and carries on. State lives in the ticket, not in the agent's memory — so it works across sessions and models.

## Template

See [templates/callback-ticket.md](../templates/callback-ticket.md).
