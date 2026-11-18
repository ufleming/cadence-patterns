# 10. Consume a pinned protocol artifact

**A consumer selects a version, loads relevant rules and checks whether actual behavior follows them.**

## Problem

Copied descriptions drift. Installing a dependency alone does not make an agent load or follow it.

## Rule

Publish a versioned artifact of concepts, patterns and templates. Consumers pin a reviewed version and define when relevant instructions load and required capabilities are checked. Distinguish artifact availability, instruction loading, observed behavior and adoption.

A package build does not activate agents or verify a runtime. Consumer-specific operating guides extend the protocol in their own controlled distribution; they must not silently change public meanings or place restricted content in a public artifact.

See [releases](../docs/releases.md).
