# 7. Linked elements move through stages together

**A Flow, the Skills it launches and the Assistants that own them pass each stage as one batch.**

## Problem

An element promoted alone looks ready but cannot work: a Flow marked ready launches a Skill whose owner is not, and the gap shows only when a run fails.

## Rule

- An element is ready only when everything that takes part in it is ready.
- In collaborative steps (e.g. refinement) every participant leaves a comment, even "nothing to add"; the summarizing agent checks that nobody is missing.
