# Skill card: `<skill name>`

**Requested by:** `<caller>` · **Filled by:** `<immediate parent assistant>`

**Original request:** `<stable reference>` · **Related cards:** `<earlier requests/results and their relevance>`

## Task
`<one sentence: what this run must produce>`

## Inputs
- `<link / path / address>`
- `<link / path / address>`

## Context
`<only what the Skill needs: constraints, rules, prior decisions>`

## Expected output
`<format and destination of OUT>`

- Layout: human part (simple → complex, only what a human needs) + collapsed agent block of the agent's own structure — [two audiences](../patterns/14-two-audiences.md).
- Shared-record writes go through the [Publisher](../concepts/publisher.md), with a result marker for the [soft duplicate check](../concepts/queue.md#soft-duplicate-check): `<marker>`.

## Reasonable sufficiency

- Known next consumer and expected-input contract: `<references, or unknown>`
- In the result, retain useful observations encountered during this task: `<fact, source and relevance, or not collected>`
- Foreseeable next step, if any: `prepared for: <Flow or Skill>` in the agent block — a recommendation, not an order.
- Remaining downstream gaps: `<unknowns for the next participant to resolve>`

Read the accessible declared downstream requirements at intake. Apply [both checks](../patterns/11-reasonable-sufficiency.md#two-checks): would the next participant have to come back? does it cost more than it saves? No separate research solely for optional hints; preserve the current task's required outputs.

## Callback
- Needed: yes | no
- If yes: fill [callback-ticket.md](callback-ticket.md) and attach it here.
- The caller predeclares the continuation; the executing side fills the actual result.
- Progress updates: off by default, or `<explicitly requested events and destination>`.
- Emergency: ordinary by default, or `<originating Gardener's designation>`.
