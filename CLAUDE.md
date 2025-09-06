# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm start` (React app runs on default port 3000)
- **Build for production**: `npm run build` (outputs to `build/` directory)
- **Run tests**: `npm test` (React testing library with Jest)
- **Deploy to GitHub Pages**: `npm run deploy` (builds and deploys to `master` branch)

## Project Architecture

This is a React-based portfolio website deployed to GitHub Pages at `eccentricdz.github.io`.

### Core Structure

- **App.js** - Main application with state management for dark/light mode toggle and content switching (work/about)
- **projects.json** - Central data file containing all portfolio projects with metadata (title, description, tags, URLs)
- **components/** - All React components organized by functionality
- **Styling** - SCSS-based with separate files for mobile and dark mode variants

### Key Components

- **Work.js** - Main portfolio grid displaying projects from `projects.json`, implements lazy loading with scroll-based pagination
- **Project.js** - Individual project card component with image loading and click tracking
- **About.js** - Static about page content
- **ContentToggle.js** - Navigation between work/about sections with animated transitions
- **Toggle.js** - Dark/light mode switcher
- **SuspenseImage.js** - Image component with lazy loading and fallback handling

### State Management

- Class-based React components with local state
- Main state in App.js handles:
  - Color mode (dark/light) with system preference detection
  - Content switching (work/about) with curtain animation
  - Google Analytics event tracking

### Styling System

- SCSS with modular component styles
- Responsive grid layout with explicit mobile breakpoints (`_App_Mobile.scss`)
- Dark mode support through CSS classes (`_App_Dark.scss`)
- Grid-based layout with decorative lines

### Assets & Content

- Project images stored in `public/project-images/` (supports jpg/gif extensions)
- All project metadata centralized in `src/projects.json`
- Google Analytics integration with custom event tracking for user interactions

### Deployment

- GitHub Pages deployment configured with `homepage` field in package.json
- Build artifacts deployed to `master` branch via `gh-pages` package
- Production builds include Google Analytics tracking code