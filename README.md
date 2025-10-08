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

📝 Notes

Legacy top-level HTML files and root assets are removed to avoid confusion

Additional pages: add .njk file under src/templates/pages/ → will compile to dist/ automatically

Images: add under src/assets/images/ → copied to dist/assets/images/ automatically

