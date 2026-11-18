# Flow

**A Flow is a recurring process — for example, refining the backlog every day.**

- Holds the schedule and the rules for picking work: filters, priority order, how many items per run.
- Sends the selected items to the owner [Assistant](assistant.md) of the branch that does the work.
- Never contains Skill logic and never waits for a [callback](callback-ticket.md): results land where its next run will look.
- Passes launch context with the selected inputs, such as recurring/manual origin and relevant iteration information. Concrete runtime identifiers are a consumer concern.
- Its lack of an outer callback does not suppress callbacks required by participants inside the operation.
- When a subsequent participant is declared, its expected-input contract can accompany the launch context. Results may retain useful observations for that participant under the [next-assistant principle](../patterns/11-help-the-next-assistant.md); this neither invents a successor nor changes the Flow's selection or schedule.
