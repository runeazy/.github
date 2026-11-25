# Contributing to RunEazy

Thank you for helping. These rules hold in every RunEazy repository; a repository's own
`CONTRIBUTING.md` adds how to build and test it.

## Before you start

- **Small fixes** (typos, docs, small bugs): open a pull request.
- **Bigger changes:** open an issue first, so we can agree on the approach before you write code.
- **Security problems:** never in an issue. See [SECURITY.md](./SECURITY.md).

## Pull requests

1. Fork the repository and work on a branch.
2. Keep each pull request to one change, with tests where it changes behaviour.
3. Update the README of the folder you changed in the same pull request.
4. Write commit messages as [Conventional Commits](https://www.conventionalcommits.org/)
   (`feat(auth): …`, `fix(react): …`, `feat!:` for a breaking change). Versions and changelogs
   are made from them, so feature PRs carry no version bumps.
5. **Sign off every commit** under the [Developer Certificate of Origin](https://developercertificate.org/):
   `git commit -s` adds `Signed-off-by: Your Name <you@example.com>`, which certifies that you
   wrote the change or have the right to submit it under the repository's licence. A CI check
   asks for it. There is no CLA.

CI must be green before review. We aim to reply to every pull request within a week.

## Portable by design

RunEazy's code runs on any cloud and with any standard OAuth 2.0 / OpenID Connect issuer.
Configuration comes from the environment, backing services are reached over open standards
(PostgreSQL, OIDC, OTLP, S3, CloudEvents), and no repository except the deployment one names a
cloud provider's services, hosts, projects or accounts. A check and an automated review flag
lines that do; a person decides.

## Licences

Each repository's `LICENSE` applies to contributions to it: Apache-2.0 for libraries, tools and
docs, AGPL-3.0 for services, CC BY-SA 4.0 for learning content.

## Code of conduct

Everyone taking part follows our [Code of Conduct](./CODE_OF_CONDUCT.md).
