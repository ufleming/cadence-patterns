# Callback: resume `<caller>`

**Original request:** `<link>`

**Return to:** `<receiving Assistant>` · **Declared by:** `<caller, before delegation>`

## On arrival, run
`<skill to run>`

Through its owner: `<Assistant>`. The recipient validates the outcome and prepares the Skill's input card.

## With this context
`<everything needed to continue, so the caller does not have to remember anything>`

## Result of the delegated work
`<filled in by the executing side: link to OUT, summary>`

## Outcome and limitations

`<Actual observed outcome, including incomplete/failed work and unavailable result references. Do not fabricate a successful result or choose a new continuation.>`

## Useful context for the next participant

`<Relevant observations encountered during the delegated task, with sources and relevance; remaining information not collected. Keep this separate from evidence that required work is complete.>`

Follow [reasonable sufficiency](../patterns/11-reasonable-sufficiency.md); a foreseeable next step may be marked `prepared for: <step>`. The executor does not investigate missing downstream information solely to fill this section.

Progress updates are separate and off by default. A completion-only caller is not sent `pending` updates.
