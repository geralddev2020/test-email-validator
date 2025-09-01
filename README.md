# Email Validator

A full-stack application with a NestJS API backend and a React (Vite) frontend. It is all written in TypeScript.

## Tech Stack

### Frontend (./ui)

- React – Component-based UI library
- Vite – Fast build tool and dev server
- TailwindCSS – Utility-first CSS framework
- shadcn/ui – Reusable, accessible component library built on Radix UI
- Vitest – Next-generation Vite-native testing framework

### Backend (./api)

- NestJS  – Node.js framework for scalable server-side applications

### Prerequisites

- Node.js (22.14.0) - check .nvmrc
- `npm` or `pnpm` or `yarn`
- Token for UserCheck (for API)

### Motivation

For the frontend, since I had the freedom to decide, I went with **React** along with **Tailwind CSS**, **shadcn/ui**, and **Vitest**, as these technologies allow me to build applications quickly and efficiently. I can still extend the project with more unit tests, integrate end-to-end testing using tools like Playwright and add Storybook.

In the backend, I chose **NestJS** because it's an opinionated framework that I believe will makes it easier to scaffold from scratch and prevents the project becoming overly complicated for just one endpoint. Even though my primary backend framework is **Laravel (PHP)**, I opted for NestJS in this case.

### Getting started

Please check each individual folder (`api` and `ui`) for installation and usage instructions. An `⁠.nvmrc` file has been added to each project to automatically manage and install the correct Node.js version.
