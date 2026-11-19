# Flow: `<flow name>`

**Owner Assistant:** `<branch owner that receives its requests>` · **Exemplar:** `<link to the Flow exemplar>`

## Purpose
`<one sentence: what this recurring process achieves>`

## Entry and exit
- Starts: `<schedule or trigger; manual launch allowed: yes | no>`
- Item enters when: `<filter: the state an item must be in>`
- Item exits when: `<the state it leaves in>` · results land at: `<destination the next run observes>`
- Next Flow, when declared: `<reference, or none>`

## Selection
- Filter: `<rule>`
- Priority order: `<rule>`
- Items per run: `<limit>`

Selection lives here, never in a Skill — [pattern 4](../patterns/04-skill-does-only-its-job.md).

## Stages

| Stage | Participants | Entry | Exit |
|---|---|---|---|
| `<stage>` | `<Assistants and Skills, through their owner>` | `<what must be true to start>` | `<what it leaves behind>` |

The Flow sends a [request card](request-card.md) to its owner Assistant with the selection and launch context. It requests no outer callback; participants inside a stage still decide their own — [pattern 3](../patterns/03-callback-as-continuation.md).

## Moves together
- `<this Flow, the Skills it launches and the Assistants that own them>`

These pass each lifecycle stage as one batch; the Flow is ready only when every participant is — [pattern 7](../patterns/07-move-together.md).

The Flow describes only its schedule, selection and what it sends; it links its participants instead of repeating them — [pattern 5](../patterns/05-describes-only-itself.md).
