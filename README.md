DevFlare 
Task 2 – Nunjucks + Gulp Implementation
🛠️ Technology Stack

Templating Engine: Nunjucks

Task Runner: Gulp

📂 Project Structure
project2/
│
├─ internship-task-2/
│  ├─ src/
│  │  ├─ templates/
│  │  │  ├─ pages/        # Nunjucks page templates (index.njk, about.njk, contact.njk)
│  │  │  └─ layouts/      # Base layouts and includes
│  │  └─ assets/           # CSS, JS, images
│  │      ├─ css/
│  │      │  └─ style.css
│  │      └─ js/
│  │          └─ script.js
│  ├─ dist/                # Compiled HTML and copied assets (output of Gulp build)
│  └─ gulpfile.js          # Gulp tasks: clean, templates, assets, serve
│
├─ package.json             # Dependencies and npm scripts
└─ README.md                # Project documentation

⚡ Features Implemented

Clean dist/ before build

Compile Nunjucks templates → minified HTML

Copy static assets (css, js, images)

Live dev server with BrowserSync + file watching

Source-of-truth: src/**, build output: dist/**

Optional: easily add new pages or images

💻 Installation & Usage

Install dependencies

npm install


Start development server (live reload)

npm start


Opens a live server at: http://localhost:3000

Watches for changes in templates and assets

Build project once (no live reload)

npm run build


Generates compiled output in dist/

📝 Notes

Legacy top-level HTML files and root assets are removed to avoid confusion

Additional pages: add .njk file under src/templates/pages/ → will compile to dist/ automatically

Images: add under src/assets/images/ → copied to dist/assets/images/