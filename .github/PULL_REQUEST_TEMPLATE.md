## PR Checklist

Please check if your PR fulfills the following requirements:

- [ ] The commit message follows our guidelines (Conventional Commits)
- [ ] Tests for the changes have been added (for bug fixes / features)
- [ ] Docs have been added / updated (for bug fixes / features)
- [ ] I have tested this change in a local Electron environment
- [ ] I have verified that this change does not introduce unnecessary dependencies (Performance First)

## PR Type

What kind of change does this PR introduce?

<!-- Please check the one that applies to this PR using "x". -->

- [ ] 🚀 **Feature**: A new feature
- [ ] 🐛 **Bugfix**: A bug fix
- [ ] ⚡️ **Performance**: A code change that improves performance
- [ ] 🛠️ **Refactoring**: A code change that neither fixes a bug nor adds a feature
- [ ] 📝 **Docs**: Documentation only changes
- [ ] 🎨 **Style**: Changes that do not affect the meaning of the code
- [ ] 🧪 **Test**: Adding missing tests or correcting existing tests
- [ ] 👷 **Build/CI**: Changes to our build system or CI configuration files
- [ ] 📦 **Dependencies**: Update dependencies or add new ones (Check Performance Impact!)
- [ ] 🔨 **Other**: Other changes that don't fit into the categories above

## Affected Packages

Which packages are affected by this PR?

<!-- Please check all that apply -->

- [ ] `@nx-electron-forge/ipc` (packages/ipc)
- [ ] `@nx-electron-forge/core` (packages/core)
- [ ] `@nx-electron-forge/forge` (packages/forge)
- [ ] `docs` (Documentation site)
- [ ] `examples` (Sample applications)

## What is the current behavior?

<!-- Please describe the current behavior that you are modifying, or link to a relevant issue. -->

Linked Issue: Closes #

## What is the new behavior?

<!-- Please describe the implementation details and how it solves the issue. -->

## Does this PR introduce a breaking change?

- [ ] Yes
- [ ] No

<!-- If this PR contains a breaking change, please describe the impact and migration path for existing applications below. -->

## Performance Impact

<!-- Since this framework focuses on performance, please describe if this PR affects startup time, bundle size, or memory usage. -->

## Other information

<!-- Any additional context or screenshots. -->
