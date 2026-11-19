# Request: `<intended operation>`

**From:** `<caller>` · **To:** `<branch owner>`

## Requested work

`<Intended operation and declared Skill or capability.>`

## Inputs and context

- `<Stable item/file references and permitted scope.>`
- `<Relevant constraints, decisions and launch context.>`

## Related cards

- `<Earlier request, result or decision and its relevance.>`

## Next consumer, when known

- Next Assistant, Skill or Flow: `<declared reference, or unknown>`
- Expected downstream inputs: `<accessible task/contract reference, or unknown>`

Apply [reasonable sufficiency](../patterns/11-reasonable-sufficiency.md): pass what the receiver cannot work without, plus what you already have and is cheap to pass. Retain relevant observations encountered during the current task; do not start separate research to fill optional downstream context. This does not select or authorize a new next step.

## Result and return

- Result destination: `<where the actual outcome belongs; shared-record writes go through the Publisher>`
- Completion callback: `<none, or recipient and predeclared continuation>`
- Progress updates: `<off by default, or requested events>`
- Emergency: `<ordinary by default; Gardener-marked only>`

The receiving owner prepares the [Skill input card](skill-card.md). This request does not invoke the Skill directly.
