# Skill card: `<skill name>`

**Requested by:** `<caller>` · **Filled by:** `<immediate parent assistant>`

**Original request:** <stable reference> · **Related cards:** <earlier requests/results and their relevance>

## Task
<one sentence: what this run must produce>

## Inputs
- <link / path / address>
- <link / path / address>

## Context
<only what the Skill needs: constraints, rules, prior decisions>

## Expected output
<format and destination of OUT>

## Help the next assistant

- Known next consumer and expected-input contract: <references, or unknown>
- In the result, retain useful observations encountered during this task: <fact, source and relevance, or not collected>
- Remaining downstream gaps: <unknowns for the next participant to resolve>

Read the accessible declared downstream requirements at intake. Follow the [handoff rule](../patterns/11-help-the-next-assistant.md): no separate research solely for optional hints; preserve the current task's required outputs.

## Callback
- Needed: yes | no
- If yes: fill [callback-ticket.md](callback-ticket.md) and attach it here.
- The caller predeclares the continuation; the executing side fills the actual result.
- Progress updates: off by default, or <explicitly requested events and destination>.
- Emergency: ordinary by default, or <originating Gardener's designation>.
