# 11. Reasonable sufficiency

**Pass on everything the next participant cannot work without, plus what it will likely need when you already have it and it is cheap to pass. Leave out guesses and anything that costs more to gather now than to find later.**

This is the guiding principle of the whole protocol. It applies to every handoff: cards, results, callbacks, comments and descriptions. Its purpose is to *help the next assistant do its work* with less rediscovery, without turning your task into the next participant's research.

## Problem

Too little context makes the next participant come back, wait or redo your discovery. Too much context buries what matters, spends a finite reading budget and mixes facts with guesses. Neither a minimal nor an exhaustive handoff is right; the right amount is proportional to the task.

## Rule

| Include | Exclude |
|---|---|
| What the next participant **cannot work without** | Guesses presented as facts |
| What it **will likely need**, when you **already have it** and passing it is **cheap** | Anything that costs more to gather now than to find later |
| Sources, and honest gaps (`unknown`, `not collected`) | Separate research done only to fill the handoff |

## Two checks

Apply both before you hand off:

1. **Lower bound — would they have to come back?** If the next participant would have to ask you, or repeat what you already discovered, to do its work, add it.
2. **Upper bound — does it cost me more than it saves them?** If gathering or writing something costs more than it saves the receiver, leave it out and name the gap instead.

A small task gets a short handoff. A larger task with a known next step can justify a richer one.

The same holds for questions: do not hand the receiver research you can do yourself — [ask the human only what only the human holds](19-ask-only-what-the-human-holds.md).

## Help the next assistant

- **Know the next consumer when possible.** Read your own task and required input/output. Also read the next participant's declared task or input contract when the card, the declared Flow or a predeclared continuation supplies it. When it is unknown, record that and do your task; do not invent a successor or scan unrelated workflows.
- **Keep what you encounter.** Retain facts, references, decisions, constraints and observations that match those needs, with their source and a note on why they matter. Distinguish confirmed information from assumptions. Pass only what the receiver is permitted to see.
- **Pass it in the declared result.** A normal result carries this context without a callback; a callback carries it when a continuation was requested. No progress notifications are added.
- **Required outputs stay required.** This principle never relaxes the current Skill's outputs or validation. A hint is context, not proof that downstream work (research, QA, review) has been done.

## Prepare the foreseeable next step

When you can **reasonably foresee** the next Flow or Skill that will work on the item, prepare what you already have for it and leave it in your agent block (see [two audiences](14-two-audiences.md)) with an explicit mark:

```
prepared for: <next Flow or Skill>
```

- **Reasonably foresee** means it follows from what you already know: a declared next consumer, a declared Flow sequence, a predeclared continuation, or the item's evident next stage. Not from searching for one.
- It is a **recommendation, not an order.** The receiver validates it, uses what helps and may ignore the rest. It does not choose the route, start the step or authorize a continuation.
- **No separate downstream research.** Prepare only from material your own task produced or encountered.
- If no next step is foreseeable, skip the section.

## Example

A Developer's card names QA as the next participant and links QA's expected inputs. While implementing a change, the Developer hits a reproducible edge case and finds an existing fixture. Its result carries, under `prepared for: QA review`, the reproduction, the fixture reference and the affected area. It does not start testing research to find more QA material, and it does not claim that QA has passed.

If nothing useful for QA comes up, the Developer still supplies its own required result, and QA collects what it needs.

### Example: a collapsed handoff block

In a shared tracker that supports collapsed sections, leave the result visible
and put compact handoff context underneath it. An example review comment:

```markdown
The form now saves a draft when the user leaves the page. The offline case
still needs QA.

<details><summary>Agent details</summary>

- Prepared for: QA review
- Checked revision: example revision 7
- Reproduction: edit a draft, disconnect the network, then leave and reopen
  the page.
- Known gap: the offline path has not been run.

</details>
```

Use the destination's required format. Add optional handoff details when they
help the next participant and are already known. Keep decisions and requests
that need a person's attention in the visible text.

## Review the handoff

- Passes: an encountered useful fact with its source; an honest gap; a `prepared for` block built from material already at hand.
- Does not block: an unknown next consumer, an unavailable downstream contract, an empty optional section.
- Fails: a receiver forced to come back for something you had; unrequested research; invented successors; guesses as facts; claims of downstream completion.

See [owner routing](01-single-entry-through-owner.md), [nested delegation](09-nested-delegation.md), [two audiences](14-two-audiences.md), [request card](../templates/request-card.md) and [callback ticket](../templates/callback-ticket.md).
