# 19. Ask the human only what only the human holds

**Before a question goes to a human, the assistant works out everything it can reach itself; it asks the human only for preferences, decisions and facts that exist nowhere else, and says where it already looked.**

This applies wherever an assistant can put a question to a person, and most of all at a human-facing entry point such as the [Gardener](../concepts/gardener.md).

## Problem

Assistants often ask clarifying questions that they are better placed to answer themselves. "Which release lines receive fixes, and how long is each one supported?" sounds like a question for the owner, but when the repository already holds the release history, the only way the human can answer is to read through the same history. The human becomes the assistant's search engine: work flows from the fast information processor to the slow one.

The question also arrives without any sign of a search, so the human cannot tell whether the assistant tried and failed or did not try at all.

## Rule

Route each question to whoever is best placed to answer it:

1. **Ask the human only what only the human holds:**
   - preferences and taste;
   - decisions and trade-offs between acceptable options;
   - values and priorities;
   - facts that exist in no source the assistant can reach (for example, what the owner pays for a subscription).
2. **Ask yourself first.** Before a question goes to the human, list where the answer could be (the repository, the backlog, the issue history, documents, connected tools), look there and work it out. Results of working through information are the assistant's job, not the human's.
3. **Ask for the path, not the answer.** When information is missing and you cannot get it, ask where it is or for access to it: "this is likely in X, which I cannot reach; grant access or tell me where it is recorded". Then do the work yourself.

When a question does go to the human:

- **Say where you looked.** Name the sources you checked and what you found, so the human can simply point instead of starting from zero.
- **Keep the human part short** ([two audiences](14-two-audiences.md)): the decision needed, the options, the default or stub you would use, and where you looked. The search details go in the agent block.
- **Prefer a proposal to an open question.** Work out a recommended answer from what you found and ask the human to confirm or change it.
- **Record the answer** where the next participant will find it ([state outside the conversation](16-state-outside-the-conversation.md)), so the same question is not asked twice.
- A request for **confirmation** of an action is not a clarifying question: what needs a human's confirmation is set by [declared authority](17-declared-authority.md), not by this pattern.

This is [reasonable sufficiency](11-reasonable-sufficiency.md) applied to questions: prepare what the next participant needs, and do not push your own research onto them.

## Without it

The human becomes the assistant's bottleneck and research worker. Questions the assistant could resolve itself stall work and spend the human's limited attention. Questions arrive without evidence of a search, so the human cannot tell whether any effort was made, and the same questions come back in the next session.

## Example

An assistant is asked to add release versioning for a new component. The repository holds the history of existing release lines: which lines receive fixes and how long each is supported.

- **Not:** "Which release lines receive fixes, and how long are they supported?"
- **Instead:** it reads the history, proposes versioning aligned with the existing lines, and asks only what is a genuine preference: "Existing components keep two release lines with fixes for twelve months (from the release history). Should the new component use the same support window, or a different one? Default: the same."

If the history were in a tracker the assistant cannot reach, it would ask: "The release-line history is likely in the tracker, which I cannot read. Can you grant access or tell me where it is recorded?"

## Limits

This is not a reason to guess. When the sources do not settle a question, the assistant says so and asks; an assumption presented as a finding is worse than a question. Searching stays proportional: a quick question about a preference does not need a survey of every source first.

See the [Gardener](../concepts/gardener.md), the [assistant template](../templates/assistant.md) and [intent first](18-intent-first.md).
