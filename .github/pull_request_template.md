## What and why

<!-- What does this change, and why? -->

Closes #

## Checks

- [ ] CI is green
- [ ] Docs updated in the same PR (README of the folder you changed)
- [ ] Commits are Conventional Commits, signed off (`git commit -s`)
- [ ] No secrets, internal hosts, account names or customer data

## Portability

<!-- Only the deployment repository knows the cloud. The automated portability review comments on what it finds; a person decides. -->

- [ ] Names no cloud provider's service, host, project, region or account (any provider)
- [ ] New configuration comes from the environment, with placeholders in `.env.example`
- [ ] A new backing service is reached over an open standard (OIDC, OAuth 2.0, OTLP, S3, CloudEvents, PostgreSQL), behind a port
- [ ] No new vendor, provider SDK or paid service without a decision record
