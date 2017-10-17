const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

gulp.task("hello", function() {
  console.log("Hello");
});

gulp.task("styles", function() {
  gulp.src("sass/**/*.scss")
    .pipe(sass({
      outputStyle: "compressed"
    })).on("error", sass.logError)

    .pipe(gulp.dest("./dist/css"));
});