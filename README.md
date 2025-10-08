# 📄 Internship Task 2 – Nunjucks + Gulp Implementation

## 🎯 Objective
Recreate the deliverables from Task 1 using a templating engine + bundler/task runner combination with a mandatory technology stack.

## 🛠️ Technology Stack

### Templating Engine
- **Nunjucks** - Used for all template files (.njk)

### Task Runner
- **Gulp** - Manages build process, asset copying, and development server

## 📂 Project Structure

```
internship-task-2/
│
├─ src/
│  ├─ templates/
│  │  ├─ pages/        # Nunjucks page templates
│  │  │  ├─ index.njk
│  │  │  ├─ about.njk
│  │  │  └─ contact.njk
│  │  └─ layouts/      # Base layouts and includes
│  └─ assets/          # Static assets
│      ├─ css/
│      │  └─ style.css
│      └─ js/
│          └─ script.js
│
├─ dist/               # Compiled output (auto-generated)
│  ├─ index.html
│  ├─ about.html
│  ├─ contact.html
│  └─ assets/
│      ├─ css/
│      └─ js/
│
├─ gulpfile.js         # Gulp tasks configuration
├─ package.json        # Dependencies and scripts
└─ README.md          # This file
```

## ⚡ Features Implemented

- ✅ Clean `dist/` folder before each build
- ✅ Compile Nunjucks templates to minified HTML
- ✅ Copy static assets (CSS, JS, images) to dist
- ✅ Live development server with BrowserSync
- ✅ File watching for automatic rebuilds
- ✅ Source-of-truth: `src/`, build output: `dist/`

## 💻 Installation & Usage

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. **Install dependencies:**
```bash
npm install
```

### Development

2. **Start development server (with live reload):**
```bash
npm start
```
- Opens browser at: `http://localhost:3000`
- Watches for changes in templates and assets
- Automatically rebuilds and reloads browser

### Production Build

3. **Build project for production:**
```bash
npm run build
```
- Generates optimized output in `dist/` folder
- Minifies HTML and copies all assets

## 🔧 Gulp Tasks

- `clean` - Removes dist folder
- `templates` - Compiles Nunjucks to HTML
- `assets` - Copies static files
- `serve` - Starts development server with file watching
- `build` - Production build (clean + templates + assets)

## 📝 Development Notes

- **Templates**: Edit `.njk` files in `src/templates/pages/`
- **Styles**: Edit `src/assets/css/style.css`
- **Scripts**: Edit `src/assets/js/script.js`
- **New Pages**: Add `.njk` file to `src/templates/pages/` → auto-compiles to `dist/`
- **Images**: Add to `src/assets/images/` → auto-copied to `dist/assets/images/`

## 🚀 Deployment

Deploy the contents of the `dist/` folder to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3

## 📋 Task 2 Compliance

- ✅ **Templating Engine**: Nunjucks (used throughout)
- ✅ **Task Runner**: Gulp (used throughout)
- ✅ **Folder Structure**: `src/templates/`, `src/assets/`, `dist/`
- ✅ **Build Process**: Managed by Gulp
- ✅ **Final Output**: Compiled HTML matching Task 1 deliverables
- ✅ **Documentation**: This README explains tech choices and setup

---
