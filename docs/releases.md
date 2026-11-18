# Versioned public artifact

The artifact contains public documents and templates. Consumers can pin it as a dependency without assuming any particular host.

```sh
npm test
npm pack --dry-run
npm pack
```

`package.json` is private to prevent accidental npm-registry publication. `npm pack` still creates an installable archive. No registry or registry credentials have been selected.

The release owner reviews the exact revision, verifies archive contents and records its SHA-256 digest. A GitHub Release can distribute that archive with its version and release notes. Artifact preparation is separate from release publication and consumer adoption.

Until 1.0, minor versions may break compatibility. Pin exact reviewed releases; mutable main-branch links are discovery references, not version pins. The public artifact excludes consumer configuration and private operational guides.
