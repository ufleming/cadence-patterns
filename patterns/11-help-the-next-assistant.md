# 11. Help the next assistant do its work

**Understand what the next participant needs, and preserve useful information encountered while doing your own task.**

This is a guiding principle for the whole protocol: a good result helps its next consumer continue with less rediscovery. It does not expand the current task into the next participant's research.

## Know the next consumer when possible

At intake, read your task and its required input/output. Also read the next participant's declared task or input contract when it is supplied on the card or accessible through the declared Flow or continuation. The next consumer can be another Assistant, a Skill owner or the participant called by a later Flow.

The caller can include the next consumer, the relevant contract reference and the information that consumer expects. This is context for a better handoff; it does not authorize changing the route or choosing a new continuation. When the next consumer or its requirements are unknown, record that limit and do the current task. Do not invent a successor or scan unrelated workflows to guess one.

## Keep what you encounter

During your own work, retain facts, references, decisions, constraints and useful observations that match those downstream needs. Add a brief explanation of relevance and distinguish confirmed information from an assumption. Pass only the context permitted for the receiving participant.

Do not initiate separate investigation solely to fill this optional downstream context. If useful information does not arise, leave it as not collected or unknown. The next participant obtains what it still needs as part of its own task.

This does not relax the current Skill's required outputs or validation. Information already required by the current task must still be produced. An incidental hint is context, not proof that downstream research, QA or another operation has been completed.

## Pass it in the declared result

Keep a small downstream-context section with the result or handoff card:

- Known next consumer and expected-input contract, when available.
- Useful observations, their sources and why they matter.
- Remaining unknowns or information not collected.

The receiver validates those observations and resolves the remaining gaps. A normal result can carry this context without a callback; a callback carries it when a continuation was requested. This principle does not add progress notifications or require waking a completion-only caller.

## Example

A Developer's card identifies QA as the next participant and links QA's expected inputs. While implementing a change, the Developer encounters a reproducible edge case and an existing fixture. It passes the reproduction, fixture reference and affected area with the result. It does not start separate testing research merely to find more QA material, and does not claim that QA has passed.

If no useful QA hint appears, the Developer still supplies its own required result. QA performs its planned work and collects any missing information.

## Review the handoff

A good handoff preserves an encountered useful fact with its source and states genuine gaps. An unknown next consumer, unavailable downstream contract or empty optional hint section does not by itself block the current task. Unrequested research, invented successors and claims of downstream completion fail this rule.

See [owner routing](01-single-entry-through-owner.md), [nested delegation](09-nested-delegation.md), [request card](../templates/request-card.md) and [callback ticket](../templates/callback-ticket.md).
