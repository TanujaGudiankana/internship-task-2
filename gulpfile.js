const gulp = require("gulp");
const nunjucksRender = require("gulp-nunjucks-render");
const htmlmin = require("gulp-htmlmin");
const { deleteAsync } = require("del");
const browserSync = require("browser-sync").create();

function clean() {
  return deleteAsync(["dist"]);
}

function templates() {
  return gulp
    .src("src/templates/pages/**/*.+(njk)")
    .pipe(
      nunjucksRender({
        path: ["src/templates/"],
      })
    )
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      })
    )
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
}

function assets() {
  return gulp.src("src/assets/**/*").pipe(gulp.dest("dist/assets"));
}

function serveTask() {
  browserSync.init({
    server: {
      baseDir: "dist",
    },
  });
  gulp.watch("src/templates/**/*.njk", templates);
  gulp.watch("src/assets/**/*", assets);
  gulp.watch("dist/*.html").on("change", browserSync.reload);
}

exports.clean = clean;
exports.templates = templates;
exports.assets = assets;
exports.serve = gulp.series(clean, gulp.parallel(templates, assets), serveTask);
exports.build = gulp.series(clean, gulp.parallel(templates, assets));


