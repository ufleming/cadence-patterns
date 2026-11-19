# Versioned public artifact

The artifact contains public documents and templates. Consumers can pin it as a dependency without assuming any particular host.

```sh
npm test
npm pack --dry-run
npm pack
```

Releases are published to GitHub Packages as `@ufleming/cadence-patterns` by the release workflow: a published GitHub Release `vX.Y.Z` must match `package.json`, the archive is tested and packed, published, and its registry integrity is compared with the packed archive. The package inherits this repository's visibility. Consumers install it with a token that can read packages from `https://npm.pkg.github.com`; `npm pack` still produces the same archive for offline review.

The release owner reviews the exact revision, verifies archive contents and records its SHA-256 digest. A GitHub Release can distribute that archive with its version and release notes. Artifact preparation is separate from release publication and consumer adoption.

Until 1.0, minor versions may break compatibility. For example, 0.2.0 renamed pattern 11's file to `11-reasonable-sufficiency.md`; consumers linking the old path should update when they move their pin. Pin exact reviewed releases; mutable main-branch links are discovery references, not version pins. The public artifact excludes consumer configuration and private operational guides.
