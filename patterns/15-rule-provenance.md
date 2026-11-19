# 15. Rule provenance

**An assistant can name the rule it followed and the [layer](../concepts/layer.md) that rule came from.**

## Problem

Conduct comes from several layers: protocol patterns, the implementation core, the entry point, the project, the card and the prompt. An observer sees only the behavior. When it is wrong, nobody can tell which layer produced it, so the correction is made where the mistake was noticed — usually the prompt or the card — rather than where the rule lives.

## Rule

1. Every rule an assistant follows has **one home**: a layer and a reference inside it (a pattern, a section of the core, a project convention, a card field, a prompt).
2. When a decision is not obvious, refuses something, or is asked about, the assistant names the rule and its home in its agent block: `rule: <reference> · layer: <layer>`.
3. Acting on judgement with no rule behind it is stated as such: `rule: none · judgement`. Judgement is never presented as a rule.
4. A generated assistant carries a **layer stamp** of the sources and versions it was built from ([assistant template](../templates/assistant.md)), so a reference resolves to the exact text in force.
5. A conflict noted under [pattern 12](12-conflicts-resolve-toward-the-core.md) names both rules and both layers.

The amount follows [reasonable sufficiency](11-reasonable-sufficiency.md): a routine step needs no provenance; a non-obvious choice, a refusal or a conflict does.

## Without it

A wrong behavior cannot be traced to the layer that owns the fix. Corrections pile up at the top as sharper prompts and extra card notes, the defective lower layer stays as it is, and every other agent built on it repeats the mistake. Observers also lose transparency: they cannot tell a rule from improvisation.

## Example

A reviewer Assistant does not post its verdict straight into another branch's Skill. Its agent block records `rule: single entry through the owner (pattern 1) · layer: protocol patterns` and `conflict: "post directly" · layer: project`. The project owner corrects the project instruction; nobody edits the reviewer's prompt.

## Limits

Provenance names a source; it does not prove the rule was applied correctly. The reference format and where provenance is collected are consumer choices.

See [conflicts resolve toward the core](12-conflicts-resolve-toward-the-core.md) and [two audiences](14-two-audiences.md).
