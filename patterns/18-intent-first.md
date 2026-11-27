# 18. Intent first

**Before acting on a request, the receiver states what the requester is trying to achieve, then judges the idea and the proposed implementation against that intent, separately.**

This applies at every hop: a human talking to an [entry point](../concepts/entry-point.md), and an assistant receiving a [card](../concepts/card.md) from another assistant. Every request was worded by someone working under their own limits.

## Problem

Requests arrive worded imperfectly. A human states a raw idea together with a first guess at how to build it; an upstream assistant fills a card from what it could see. A receiver that executes the literal wording carries the wording error down the whole chain. A receiver that judges the request by its weakest part throws away a good idea because the suggested implementation was weak.

The two failures look like opposite temperaments, agreeing with everything and criticizing everything, but they have one cause: intent, idea and implementation are judged as a single thing.

## Rule

- Separate three layers of every request and judge each on its own:

  | Layer | Question | How replaceable |
  |---|---|---|
  | **Intent** | What state of the world does the requester want, and why? | Rarely rejected |
  | **Idea** | What approach do they propose? | Judged against the intent |
  | **Implementation** | How exactly? | The most replaceable |

- Answer in this order:
  1. **Restate the intent** in your own words, well enough that the requester would say "yes, that is what I meant".
  2. **Name what is strong** in the idea.
  3. **Where the implementation breaks**, say so and offer an alternative that serves the same intent.
  4. **Ask** only when the intent itself is unclear.
- **Cards carry intent.** Request and Skill cards have an **Intent** field: the why behind the task. When the proposed how breaks, the receiver may replace it while keeping the intent, and reports what it changed and why ([rule provenance](15-rule-provenance.md)).
- **Proportionality.** A clear, cheap request is simply done; reconstructing intent is not a ritual.
- **The requester has the last word.** If, after seeing the alternative, the requester keeps their implementation, it is carried out. The concern is noted once, not repeated.
- Replacing the how stays inside the card's scope and the receiver's [declared authority](17-declared-authority.md). Anything beyond it is prepared and confirmed, not improvised.

## Without it

Wording errors travel down the chain unchanged, or good ideas are dropped at the first weak detail. Agreement and criticism become a temperament instead of a judgment, and the requester has to word every request perfectly to get what they meant.

## Example

A human asks the entry point: "re-run refinement on every issue each night".

- **Intent:** nothing that is ready for refinement waits more than a day.
- **Idea:** a recurring run. Sound.
- **Implementation:** every issue, every night. Breaks: selection belongs to the Flow ([pattern 4](04-skill-does-only-its-job.md)), and most issues are not ready.

The answer restates the intent, keeps the recurring run, and proposes a nightly Flow that selects only items ready for refinement. If the human still wants every issue, that is done, with the cost noted once.

Down the chain, the request card says `Intent: reviewers can trust the summary without opening each comment`. The Skill finds that the suggested table format hides disagreements, uses a short list instead, and records `changed: format · reason: intent`.

## Limits

This is not mind-reading. Intent is reconstructed from the request and its context; when it cannot be, the receiver asks. Roles may differ in tone, blunt or exploratory, but not in the order of the answer.

Related ideas: commander's intent in mission planning, Rapoport's rules for criticism, the XY problem.

See the [request card](../templates/request-card.md) and the [Skill card](../templates/skill-card.md).
