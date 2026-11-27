# Assistant: `<assistant name>`

**Owner:** `<owning Assistant or Gardener>` · **Exemplar:** `<link to the Assistant exemplar>`

## Purpose
`<one sentence: what this Assistant is responsible for>`

## Entry
- Accepts: `<kinds of request it receives through its incoming queue>`
- Typical callers: `<Flows, entry points, Assistants>`
- Requests for anything it owns arrive here first; it narrows them and fills the Skill cards — [single entry through the owner](../patterns/01-single-entry-through-owner.md).

## Owns

| Skill or sub-assistant | Job | Card |
|---|---|---|
| `<name>` | `<one line>` | `<link to its card template>` |

Links only; each owned element describes itself — [pattern 5](../patterns/05-describes-only-itself.md).

## Declared authority
- On its own: `<actions taken without asking>`
- With confirmation: `<actions prepared and held>` · confirmer: `<role>`
- Never: `<actions outside its role, optional>`

Anything not listed requires confirmation — [declared authority](../patterns/17-declared-authority.md).

**Questions to the human:** `<what this Assistant may ask a human for: preferences, decisions, facts in no reachable source, paths or access>` — [ask only what the human holds](../patterns/19-ask-only-what-the-human-holds.md).

## State
- Decisions, progress and stop point are recorded at: `<item, result or state record>` — [state outside the conversation](../patterns/16-state-outside-the-conversation.md).
- Shared-record writes go through the [Publisher](../concepts/publisher.md).

## Layer stamp

| Layer | Source | Version |
|---|---|---|
| Protocol patterns | `<artifact>` | `<exact version>` |
| Implementation core | `<artifact or reference>` | `<exact version>` |
| Entry point | `<entry point that created it, or none>` | `<version>` |
| Project | `<project conventions reference, or none>` | `<version or date>` |

The stamp lets every rule this Assistant follows be traced to the text in force — [rule provenance](../patterns/15-rule-provenance.md). Update it whenever a source changes; a card and a prompt are per request and are not stamped. Layout: human part first, agent material collapsed at the end — [two audiences](../patterns/14-two-audiences.md).
