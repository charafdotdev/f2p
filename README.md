# F2P – Free-to-Play Games Explorer

![Deploy to VPS](https://github.com/charafdotdev/f2p/actions/workflows/deploy.yml/badge.svg)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Chakra UI](https://img.shields.io/badge/Chakra%20UI-319795?logo=chakraui&logoColor=white)

**Live Demo** → https://f2p.charaf.dev

A beautiful, responsive explorer for **free-to-play** games — powered by the [FreeToGame API](https://www.freetogame.com/api).

![F2P Screenshot](https://raw.githubusercontent.com/charafdotdev/f2p/main/public/screenshot.png)

> Built during Mosh’s React course — then upgraded with custom hooks, perfect UI polish, **full CI/CD pipeline**, and **production deployment** with a custom PHP proxy.

---

## Features

- Responsive game grid with hover lift & perfect shadows
- Platform icons + tooltips
- “NEW” badge for recent releases
- Full light/dark mode support
- Custom `proxy.php` to bypass CORS (included in build)
- GitHub Actions + rsync → auto-deploy to VPS on every push
- No manual FTP ever again

---

## Tech Stack

- React + TypeScript + Vite
- Chakra UI (styling & dark mode)
- Axios
- GitHub Actions (CI/CD)
- Hosted on LiteSpeed / CyberPanel VPS

---

## Run Locally

```bash
git clone https://github.com/charafdotdev/f2p.git
cd f2p
npm install
npm run dev
```
