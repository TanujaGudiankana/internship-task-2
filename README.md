<<<<<<< HEAD
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

=======
# 🚀 DevFlare – Task 2: Nunjucks + Gulp Implementation

## 🛠️ Technology Stack

- **Templating Engine:** Nunjucks  
  All HTML pages are written as Nunjucks templates (`.njk`) located in `src/templates/pages/` and use reusable layouts from `src/templates/layouts/`.

- **Task Runner:** Gulp  
  Automates the build process including:
  - Cleaning the `dist/` folder  
  - Compiling Nunjucks templates to minified HTML  
  - Copying static assets (`css`, `js`, images)  
  - Starting a live development server with BrowserSync and file watching  

---

## 📂 Project Structure

<img width="844" height="491" alt="image" src="https://github.com/user-attachments/assets/6dd497df-f071-458c-8dee-f23e7316d698" />

**
**Notes:**  
- `src/` is the **source-of-truth**; `dist/` contains all compiled files.  
- Legacy top-level HTML files and root `assets/` folder are removed to avoid confusion.  

---

## ⚡ Features Implemented

- **Clean build:** `dist/` is deleted before every build to prevent stale files  
- **Template compilation:** Nunjucks pages (`.njk`) are compiled and minified to HTML  
- **Asset management:** CSS, JS, and images are copied to `dist/assets/`  
- **Live development server:** BrowserSync automatically reloads the browser on changes  
- **Watchers:** Templates and assets are monitored for changes  
- **Extensible:** Easily add new pages or images; they will automatically compile/copy  

---

## 💻 Installation & Usage

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

>>>>>>> 7a0598124d9866d7f086a3396d46bdc58c4abd23
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
<<<<<<< HEAD

## 🔧 Gulp Tasks

- `clean` - Removes dist folder
- `templates` - Compiles Nunjucks to HTML
- `assets` - Copies static files
- `serve` - Starts development server with file watching
- `build` - Production build (clean + templates + assets)
=======
>>>>>>> 7a0598124d9866d7f086a3396d46bdc58c4abd23

## 📝 Development Notes

- **Templates**: Edit `.njk` files in `src/templates/pages/`
- **Styles**: Edit `src/assets/css/style.css`
- **Scripts**: Edit `src/assets/js/script.js`
- **New Pages**: Add `.njk` file to `src/templates/pages/` → auto-compiles to `dist/`
- **Images**: Add to `src/assets/images/` → auto-copied to `dist/assets/images/`

## 🚀 Deployment

🌐 Live Website

👉 https://devflaretask2.netlify.app/

💻 GitHub Repository

📦

## 📋 Task 2 Compliance

- ✅ **Templating Engine**: Nunjucks (used throughout)
- ✅ **Task Runner**: Gulp (used throughout)
- ✅ **Folder Structure**: `src/templates/`, `src/assets/`, `dist/`
- ✅ **Build Process**: Managed by Gulp
- ✅ **Final Output**: Compiled HTML matching Task 1 deliverables
- ✅ **Documentation**: This README explains tech choices and setup

---
=======

