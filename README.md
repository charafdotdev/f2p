# F2P – Free-to-Play Games Explorer

![Deploy to VPS](https://github.com/charafdotdev/f2p/actions/workflows/deploy.yml/badge.svg)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Chakra UI](https://img.shields.io/badge/Chakra%20UI-319795?logo=chakraui&logoColor=white)

A beautiful, responsive explorer for **free-to-play** games — powered by the [FreeToGame API](https://www.freetogame.com/api).

![F2P Screenshot](https://raw.githubusercontent.com/charafdotdev/f2p/main/public/screenshot.png)

> Built while following Mosh’s React course — then taken way further with custom hooks, better UX, CI/CD, and production deployment.

### Live Demo

https://f2p.charaf.dev

---

## Features

- Responsive game grid with perfect shadows & hover lift
- Dynamic platform icons (PC, Browser) with tooltips
- “NEW” badge for games released in the last 6 months
- Full light/dark mode support (Chakra UI)
- Infinite scroll / pagination ready
- Zero API key needed (FreeToGame API)
- Automatic deployment on every push

---

## Tech Stack

- **React** + **TypeScript** + **Vite**
- **Chakra UI** – styling & dark mode
- **Axios** – data fetching
- **GitHub Actions** – CI/CD + auto-deploy to VPS
- Hosted on **LiteSpeed / CyberPanel** VPS

---

## Run Locally

```bash
git clone https://github.com/charafdotdev/f2p.git
cd f2p
npm install
npm run dev
```
