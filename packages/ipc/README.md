# @nx-electron-forge/ipc

A robust and strictly typed IPC (Inter-Process Communication) bridge library for Electron and Node.js applications, powered by Nx Monorepo.

## 🚀 Features

- **Type-Safe Communication**: Enforce strict types between Electron Main and Renderer processes.
- **Cross-Platform Ready**: Optimized for modern Node.js (`es2022+`) and browser environments.
- **Built-in Mocking**: Comes with dedicated test utilities for Vitest to mock Electron IPC easily.

## 📦 Installation

```bash
pnpm add @nx-electron-forge/ipc
```

## 🛠️ Development & Testing

This package is managed as part of an Nx workspace. You can run tasks directly from the root directory.

### Run Unit Tests

```bash
pnpm exec nx test ipc
```

### Build Package

```bash
pnpm exec nx build ipc
```

### Lint & Formatting

```bash
pnpm exec nx lint ipc
```

## 🤝 Contributing

We welcome contributions via Pull Requests! To ensure a smooth review process, please follow these guidelines:

1. **Commit Message Format**: We enforce [Conventional Commits](https://conventionalcommits.org). Your commit must start with types like `feat:`, `fix:`, `docs:`, or `chore:`.
2. **Pre-commit Checks**: Husky will automatically run `lint-staged` and `cspell` before you commit. Make sure all checks pass.
3. **Write Tests**: If you add a feature or fix an IPC bug, please include corresponding `*.test.ts` files under `src/`.
