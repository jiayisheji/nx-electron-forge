# nx-electron-forge

[![Nx](https://img.shields.io/badge/Nx-Monorepo-143055?logo=nx&logoColor=white)](https://nx.dev)
[![Electron](https://img.shields.io/badge/Electron-Forge-47848f?logo=electron&logoColor=white)](https://www.electronforge.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![pnpm](https://img.shields.io/badge/pnpm-10.x-f69220?logo=pnpm&logoColor=white)](https://pnpm.io)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

Nx-powered Electron Forge monorepo for high-performance IPC, tooling, and enterprise Electron architecture.

## 🚀 Overview

`nx-electron-forge` is a monorepo focused on building a modern Electron development stack around:

- Nx workspace orchestration
- Electron Forge integration
- High-performance IPC architecture
- Enterprise-grade Electron application framework
- Plugin-based tooling and extensibility

The goal is to provide a complete solution for Electron engineering, from low-level IPC to high-level application architecture.

## ✨ Why

Electron projects often become difficult to scale when `main`, `preload`, and `renderer` evolve independently.

This project aims to solve that by providing:

- A structured IPC layer
- A unified monorepo workflow with Nx
- Tooling support for Electron Forge
- A future enterprise application framework built on top of IPC

## 📦 Packages

### `@nx-electron-forge/ipc`

A high-performance IPC framework for Electron, inspired by Fastify-style architecture.

### `@nx-electron-forge/forge`

An Nx plugin for integrating Electron Forge into the workspace.

### `@nx-electron-forge/core`

An enterprise-grade Electron framework built on top of `@nx-electron-forge/ipc`, inspired by NestJS-style architecture.

## 🗺️ Project Roadmap

### M1: IPC Foundation

- [ ] Complete `@nx-electron-forge/ipc`
- [ ] Add unit tests for `main`, `preload`, and `renderer`
- [ ] Publish `@nx-electron-forge/ipc`
- [ ] Build `apps/docs` for IPC documentation

### M2: Forge Tooling and Examples

- [ ] Build `@nx-electron-forge/forge`
- [ ] Create `apps/examples`
- [ ] Integrate `@nx-electron-forge/ipc` with `@nx-electron-forge/forge`
- [ ] Provide Nx generators and executors for Electron Forge workflows

### M3: Enterprise Framework

- [ ] Build `@nx-electron-forge/core`
- [ ] Design enterprise application architecture on top of IPC
- [ ] Provide toolchain support through `@nx-electron-forge/forge`
- [ ] Establish a complete framework, tooling, and examples ecosystem

## 📚 Documentation

Full documentation will be available in `apps/docs`.

## 🧪 Examples

Runnable examples will be available in `apps/examples`, including integration examples for `@nx-electron-forge/ipc` and `@nx-electron-forge/forge`.

## 🔀 Development Workflow

This repository follows a GitHub-based workflow:

- Branch-based development
- Pull request review and merge
- Conventional commits
- Workspace managed by Nx
- Package management via pnpm

## 📄 License

MIT
