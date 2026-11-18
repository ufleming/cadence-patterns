# 2. Work reaches a Skill only as a card

**Every Skill publishes the card it expects. Before running it, the immediate parent takes the template, fills it and attaches the inputs.**

## Problem

Free-form prompts between agents drift: each caller phrases the task differently, inputs get lost, and the Skill has to guess what it was given.

## Rule

- The card template lives **with the Skill** and is its requirement.
- The filler is always the **immediate parent** (see pattern 1).
- Inputs are **attached**, not described: issue links, file paths, drive addresses.
- If the caller asked for a callback, the card carries a **callback template** (see pattern 3).
- Everyone around the Skill knows its card; nobody invents a new shape for it.

## Template

See [templates/skill-card.md](../templates/skill-card.md).
