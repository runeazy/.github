# runeazy/.github

The RunEazy organisation's defaults, shared by every repository:

| Path                                                                 | What it is                                                              |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `profile/README.md`                                                  | The organisation's profile page                                         |
| `CODE_OF_CONDUCT.md`, `SECURITY.md`, `SUPPORT.md`, `CONTRIBUTING.md` | Community health files, used by any repository that has none of its own |
| `.github/ISSUE_TEMPLATE/`                                            | Issue forms: bug report and feature request                             |
| `.github/pull_request_template.md`                                   | The PR template, with the portability checklist                         |
| `.github/workflows/`                                                 | Reusable workflows: the golden path's CI jobs (below)                   |
| `template/`                                                          | The skeleton a new repository starts from                               |

## Reusable workflows

A repository's CI is a few lines that call these by tag, so a change to a check is one PR here
and a Renovate bump everywhere else:

```yaml
# .github/workflows/ci.yml in a repository
name: CI
on:
  pull_request:
  push:
    branches: [main]
permissions:
  contents: read
jobs:
  checks:
    uses: runeazy/.github/.github/workflows/checks.yml@v1
  dco:
    if: github.event_name == 'pull_request'
    uses: runeazy/.github/.github/workflows/dco.yml@v1
  node:
    uses: runeazy/.github/.github/workflows/node.yml@v1
```

| Workflow     | Jobs                                                                                                                   |
| ------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `checks.yml` | `security` (gitleaks, and dependency review on PRs when enabled), `markdown`, `commits` (commitlint on a PR's commits) |
| `dco.yml`    | `dco`: every commit in a PR carries a `Signed-off-by:` line matching its author                                        |
| `node.yml`   | `lint`, `typecheck`, `test`, `build`: the repository's npm scripts of those names, skipped when absent                 |

The workflows stay thin: checks that need logic (cloud terms, the dependency rule, boundaries) are
commands in `@runeazy/devkit-checks`, so CI could leave GitHub without rewriting them.

## Releasing

Tag `vX.Y.Z` and move the major tag (`v1`) to it. A breaking change to a workflow's inputs or job
names is a new major tag.
