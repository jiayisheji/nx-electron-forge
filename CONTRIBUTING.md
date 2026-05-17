# Contributing to nx-electron-forge

We would love for you to contribute to nx-electron-forge and help make it even better than it is
today! As a contributor, here are the guidelines we would like you to follow:

- [Question or Problem?](#question)
- [Issues and Bugs](#issue)
- [Feature Requests](#feature)
- [Submission Guidelines](#submit)
- [Development Setup](#development)
- [Coding Rules](#rules)
- [Commit Message Guidelines](#commit)

## <a name="question"></a> Got a Question or Problem?

For bug reports and feature requests, please use [GitHub Issues][new_issue].

For design discussion, usage questions, or architecture feedback, please open a GitHub Discussion or start from an issue with enough context, examples, and expected behavior.

Before opening a new topic, please search existing issues and pull requests to avoid duplicates.

## <a name="issue"></a> Found a Bug?

If you find a bug in the source code, you can help us by
[submitting an issue](#submit-issue) to our [GitHub Repository][github]. Even better, you can
[submit a Pull Request](#submit-pr) with a fix.

## <a name="feature"></a> Missing a Feature?

You can _request_ a new feature by [submitting an issue](#submit-issue) to our GitHub
Repository. If you would like to _implement_ a new feature, please submit an issue with
a proposal for your work first, to be sure that we can use it.
Please consider what kind of change it is:

- For a **Major Feature**, first open an issue and outline your proposal so that it can be
  discussed. This will also allow us to better coordinate our efforts, prevent duplication of work,
  and help you to craft the change so that it is successfully accepted into the project. For your issue name, please prefix your proposal with `[discussion]`, for example "[discussion]: your feature idea".
- **Small Features** can be crafted and directly [submitted as a Pull Request](#submit-pr).

## <a name="submit"></a> Submission Guidelines

### <a name="submit-issue"></a> Submitting an Issue

Before you submit an issue, please search the issue tracker, maybe an issue for your problem already exists and the discussion might inform you of workarounds readily available.

We want to fix all the issues as soon as possible, but before fixing a bug, we need to reproduce and confirm it. In order to reproduce bugs we will systematically ask you to provide a minimal reproduction scenario using a repository or [Gist](https://gist.github.com/). Having a live, reproducible scenario gives us a wealth of important information without going back & forth to you with additional questions like:

- version of nx-electron-forge used
- 3rd-party libraries and their versions
- and most importantly - a use-case that fails

Unfortunately, we are not able to investigate / fix bugs without a minimal reproduction, so if we don't hear back from you we are going to close an issue that doesn't have enough info to be reproduced.

You can file new issues by filling out our [new issue form][new_issue].

### <a name="submit-pr"></a> Submitting a Pull Request (PR)

Before you submit your Pull Request (PR), consider the following guidelines:

1. Search [GitHub Pull Requests][gh_prs] for related open or closed PRs.
1. Create a branch from `main` using a descriptive name such as `feature/*`, `fix/*`, or `docs/*`.

   ```shell
   git checkout -b feature/your-change main
   ```

1. Create your patch, **including appropriate test cases** when applicable.
1. Follow our [Coding Rules](#rules).
1. Run the relevant checks before submitting your PR.
1. Commit your changes using our [commit message conventions](#commit).
1. Push your branch to GitHub:

   ```shell
   git push origin feature/your-change
   ```

1. Open a pull request against `main` and describe the change clearly.

- If we suggest changes then:
  - Make the required updates.
  - Re-run the relevant checks to ensure the changes still pass.
  - Rebase your branch and force push to update the pull request:

    ```shell
    git rebase main -i
    git push -f
    ```

That's it! Thank you for your contribution!

#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and sync the latest changes from `main`:

- Delete the remote branch on GitHub either through the GitHub web UI or your local shell:

  ```shell
  git push origin --delete feature/your-change
  ```

- Check out the main branch:

  ```shell
  git checkout main -f
  ```

- Delete the local branch:

  ```shell
  git branch -D feature/your-change
  ```

- Update your local `main` branch:

  ```shell
  git pull --ff origin main
  ```

## <a name="development"></a> Development Setup

You will need [Node.js](https://nodejs.org), `pnpm`, and the workspace dependencies installed locally.

After cloning the repo, run:

```bash
pnpm install
```

### <a name="common-scripts"></a>Commonly used scripts

```bash
# check formatting
pnpm format:check

# write formatting changes
pnpm format:write

# run spellcheck
pnpm spellcheck
```

## <a name="rules"></a> Coding Rules

To ensure consistency throughout the source code, keep these rules in mind as you are working:

- All features or bug fixes should include appropriate tests when practical.
- We use Prettier for formatting and keep the codebase wrapped at **100 characters**.
- We use ESLint through Nx lint targets when they are available in the workspace.
- We use CSpell for repository-wide spell checking.

## <a name="commit"></a> Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted. This leads to **more
readable messages** that are easy to follow when looking through the **project history**. But also,
we use the git commit messages to **generate the change log**.

### Commit Message Format

Each commit message consists of a **header**, a **body**, and a **footer**. The header uses a required **type**, **scope**, and **subject**:

```plaintext
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** is required.

The commit header must not exceed **72 characters**. Body and footer lines should stay within **120 characters** when possible.

Footer should contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) if any.

Samples: (even more [samples][commits_samples])

```plaintext
docs(docs): update roadmap section
fix(core): correct ipc dependency wiring
```

### Revert

If the commit reverts a previous commit, it should begin with `revert:`, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **chore**: Updating tasks etc; no production code change
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

### Scope

Use a single scope that reflects the primary area affected by the change.

The following scopes are supported:

- **ipc**
- **forge**
- **core**
- **deps**
- **release**
- **docs**
- **examples**
- **scripts**
- **tools**

### Subject

The subject contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

A detailed explanation can be found in this [document][commit-message-format].

[commit-message-format]: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#
[github]: https://github.com/jiayisheji/nx-electron-forge
[new_issue]: https://github.com/jiayisheji/nx-electron-forge/issues/new
[gh_prs]: https://github.com/jiayisheji/nx-electron-forge/pulls
[commits_samples]: https://github.com/jiayisheji/nx-electron-forge/commits/main
