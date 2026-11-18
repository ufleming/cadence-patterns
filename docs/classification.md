# Classifying the protocol catalog

Use two independent single-select fields to make the catalog easy to browse: **Work type** says what an issue represents; **Pattern group** says which subject it primarily addresses. These fields classify definitions and supporting work, not execution results.

## Work type

| Option | Use for | Example |
| --- | --- | --- |
| Protocol | The root definition of the overall interaction protocol. | Cadence Patterns overview. |
| Concept | Vocabulary and the responsibility of one protocol element. | Assistant, Flow, callback ticket. |
| Pattern | A reusable rule with a problem, rationale and example. | Single entry through the owner. |
| Contract | A reusable request, input or return schema. | Skill input card or callback contract. |
| Release | Delivering a versioned protocol artifact. | Release 0.1.0. |
| Adoption | Applying a reviewed protocol version in a consumer. | Define instruction-loading points in a consumer. |
| Chore | Supporting configuration, legal or historical housekeeping. | License selection, catalog setup or a historical redirect. |

A pattern does not become a Concept because its description explains terminology. Classify by the issue's primary purpose. A Contract defines reusable fields; a filled card is an execution instance and needs its own consumer workflow. A Release publishes an artifact; Adoption applies it in a consumer.

## Pattern group

This subject field also applies to Concepts, Contracts and supporting work, so all related elements can appear together.

| Option | Subject |
| --- | --- |
| Ownership & routing | Role ownership, entry points and delegation between branches. |
| Skill invocation | Skill boundaries, caller selection and owner-prepared invocation. |
| Cards & continuations | Request/input cards, results, callbacks and resumption. |
| Queues & priority | Incoming/outgoing queues, correlation and Emergency priority. |
| Documentation & structure | Protocol index, descriptions, exemplars and catalog organization. |
| Lifecycle & readiness | Coordinated stage gates and readiness of participating elements. |
| Versioning & adoption | Versioned distribution, licensing, compatibility and consumer adoption. |

Select one primary group. Use links for additional subjects rather than duplicating an issue. For example, owner-mediated nested delegation belongs to Ownership & routing even though it also uses cards and callbacks.

## Examples

| Issue purpose | Work type | Pattern group |
| --- | --- | --- |
| Define a callback ticket | Concept | Cards & continuations |
| Explain the callback continuation rule | Pattern | Cards & continuations |
| Define the callback template | Contract | Cards & continuations |
| Explain Emergency queue ordering | Pattern | Queues & priority |
| Publish a document archive | Release | Versioning & adoption |

## Selection and maintenance

1. Read the issue's intended outcome and choose one Work type.
2. Choose the primary subject in Pattern group. Parent links provide context but do not mechanically determine the group.
3. Keep a companion definition's classification consistent with its public base. Consumer-specific adoption and setup work keep their own purpose.
4. Verify both saved values. Auto-add brings an issue into a project; it does not imply correct classification.
5. Change the documented option definitions and the project configuration together when the taxonomy changes. Preserve unrelated fields and review ambiguous new issues before assigning a speculative category.

Use Status for progress and the existing Repository field for source. Neither replaces these classification fields. Group a catalog table by Pattern group and filter by Work type when focusing on Concepts, Patterns or Contracts. Native issue parents continue to carry the structural hierarchy.

**Work type is a project field, distinct from GitHub's account-level native Issue Type.** A board can use this catalog taxonomy without changing native types. Option colors help scanning; the names and definitions carry the meaning.

See the [structure plan](STRUCTURE-PLAN.md) and [request lifecycle](request-lifecycle.md).
