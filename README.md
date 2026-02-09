# Security+ Command Center

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-19.0-61dafb.svg?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/typescript-5.0-3178c6.svg?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/vite-6.0-646cff.svg?style=flat&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/tailwind-4.0-38bdf8.svg?style=flat&logo=tailwindcss)

## 🛡️ Mission Overview

**Security+ Command Center** is a high-performance, gamified simulation platform designed to prepare candidates for the CompTIA Security+ certification. Unlike static flashcard apps, this project treats exam preparation as a mission-critical operation, blending rigorous testing with engaging arcade-style mechanics.

Built with a focus on modern web standards and user experience, it features a cyber-security themed UI, real-time performance analytics, and adaptive learning pathways.

## 🚀 Key Features

### 🎮 Gamified Learning System
- **Mission Control Dashboard**: A central hub tracking your "Security Clearance" (Level), XP progression, and daily streaks.
- **Smart Directives**: Algorithms analyze your progress to suggest the next best study module ("Priority Mission Detected").
- **XP & Rewards**: Earn experience points for every correct answer, quiz completion, and daily login.

### ⚔️ Combat Simulations (Exam Mode)
- **Quick Skirmish**: 10-question rapid-fire mode with immediate feedback and "Intel Analysis" explanations.
- **Full Mock Exam**: Authentic 90-minute, 90-question simulation mirroring the actual test environment.
- **Performance Based Questions (PBQs)**: Interactive drag-and-drop mechanics for matching ports, protocols, and security concepts.
- **Question Navigator**: Flag questions for review and navigate freely during full exams, just like the real test.

### 🕹️ Arcade: Port Blitz
- **High-Speed Matching**: A frantic 60-second challenge to map ports to protocols.
- **Combo System**: Speed and accuracy multipliers to maximize your score.
- **Visual Feedback**: Dynamic animations and sound effects for correct/incorrect matches.

### 📊 Tactical Analytics
- **Domain Breakdown**: Detailed visualization of strengths and weaknesses across all Security+ domains.
- **Accuracy Ratings**: Track your improvement over time with granular statistics.

## 🛠️ Tech Stack & Engineering Highlights

This project demonstrates a modern, scalable frontend architecture:

- **Core**: [React 19](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/) for type-safe, robust component logic.
- **Build Tooling**: [Vite](https://vitejs.dev/) for lightning-fast HMR and optimized production builds.
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) for a lightweight, scalable global store with local storage persistence.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) for a utility-first, highly responsive design system.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for complex layout transitions and micro-interactions.
- **Routing**: [React Router v7](https://reactrouter.com/) for seamless client-side navigation.
- **Drag & Drop**: [dnd-kit](https://dndkit.com/) for accessible, performant drag-and-drop interactions in PBQs.

## 💻 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/security-plus-command.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Initialize the simulation**
   ```bash
   npm run dev
   ```

4. **Build for deployment**
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
src/
├── components/     # Reusable UI components (Cards, Buttons, ProgressBars)
├── data/           # Question banks and static domain data
├── features/       # Feature-specific logic (future scaling)
├── pages/          # Main application views (Dashboard, Quiz, Arcade)
├── store/          # Zustand store definitions (useStore.ts)
├── types/          # TypeScript interfaces and type definitions
└── utils/          # Helper functions for gamification and scoring
```

---

*This project is a portfolio demonstration of advanced React patterns, gamification logic, and modern UI engineering.*
