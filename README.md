# Pokedex Web App

Starter template to display Pokémon and filter them in a list.

[![React](https://img.shields.io/badge/React_19.1.1-blue)](https://reactjs.org/)
[![React Router DOM](https://img.shields.io/badge/Jest_DOM_6.9.1-darkred)](https://reactjs.org/)
[![Axios](https://img.shields.io/badge/Axios_1.7.9-red)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![JavaScript](https://img.shields.io/badge/JavaScript-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Vite_7.1.2-yellow)](https://vitejs.dev/)
[![Vite](https://img.shields.io/badge/Vitest_3.2.4-darkgreen)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/Polyform_Perimeter_License_1.0.0-red)](LICENSE)

## Preview

Live Link: [https://chrysalcore.github.io/pokedex/](https://chrysalcore.github.io/pokedex/)

## Project status

This project is under development and is not finished. Many core features are implemented (listing, filtering, main components and partial tests), but improvements, test coverage and visual refinements are still pending.

If you run it locally, be aware that some routes or components may be incomplete or in a "mock" state.

## Description

`Pokedex Web App` is an application created to display Pokémon, enable filtering, and demonstrate componentization and state patterns in React. The code uses React with contexts and reducers, external API consumption, and unit/integration tests in progress.

## Main features

- State management with `useReducer` and Context API.
- REST API consumption to fetch Pokémon data.
- Reusable components and testing for hooks and components.
- Responsive UI using CSS for different devices.
- Animations and smooth scrolling for improved UX.

## Technologies used

| Category | Technologies |
| :--- | :--- |
| Frontend & Language | React 19, JavaScript, Vite |
| State Management | useState, useReducer, Context API |
| HTTP Client | Axios |
| Routing | No routing library included by default |
| Testing | Vitest, Testing Library |
| Style | CSS |
| Tools | ESLint, Vitest |
| Version Control | Git, GitHub |
| Deployment | GitHub Pages |

## Local installation and usage

Follow these steps to run the project on your machine.

### Prerequisites

- `Node.js` (recommended 16+)
- `npm` or `pnpm`

### Steps

1. Clone the repository

    ```bash
    git clone https://github.com/chrysalcore/pokedex.git
    cd pokedex
    ```

2. Install dependencies

    ```bash
    npm install
    ```

3. Run in development mode

    ```bash
    npm run dev
    ```

### Run tests

If tests are configured in the project, you can run them with:

```bash
npm run test
# or
npm run vitest
```

## Roadmap (pending)

- Complete test coverage for hooks and components.
- Improve error handling and loading states.
- Add pagination and performance optimizations.
- Improve accessibility (a11y) and related tests.

## How to contribute

- Open an Issue to propose changes or report bugs.
- Create a Pull Request with one branch per feature/bugfix.
- Follow the existing code style and add tests when possible.

## Known issues

- Test coverage is incomplete for some hooks and components.
- Some routes or data may be in "mock" mode until integration is complete.

## License

This project is licensed under the [PolyForm Perimeter License 1.0.0](LICENSE).

### Key restrictions

- Free for **non-commercial** projects.
- **Prohibited** for use by businesses that compete with the owner.
- Contact the owner for commercial licenses.
