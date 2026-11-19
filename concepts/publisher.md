# Publisher

**The Publisher is the single writer to the shared record. Every other participant hands it what to write instead of writing itself.**

The shared record is wherever the system keeps its common work — in the common case an issue tracker, but equally a set of files or a message channel.

- **One writer:** creating, updating and deleting items, comments, fields, reactions or any other shared record goes through the Publisher.
- **Tool- and medium-agnostic:** its operations are generic — create, read, update and delete for any resource type — with specialized operations added only where a write must be both good and fast (for example, publishing a comment).
- **Configured per project:** it learns the available tool and the project's conventions (fields, templates, labels) and applies them, so callers do not need to know them.
- Receives work as a [card](card.md) through its owner like any Skill, and returns the saved reference and actual outcome.
- Applies the [soft duplicate check](queue.md#soft-duplicate-check) before writing.

See [pattern 13](../patterns/13-write-through-the-publisher.md).
