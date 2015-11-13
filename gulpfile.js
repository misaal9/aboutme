/*global require, console*/
(function () {
    "use strict";
    var gulp = require("gulp"),
        connect = require("gulp-connect"),
        sass = require("gulp-sass"),
        concat = require("gulp-concat");
    
    // to start server w livereload
    gulp.task("connect", function () {
        connect.server({
            root: 'app/',
            port: 8888,
            livereload: true
        });
    });
    
    // to watch html changes
    gulp.task("html", function () {
        console.log("html");
        gulp.src("app/**/*.html")
            .pipe(connect.reload());
    });
    
    // to watch css changes
    gulp.task("css", function () {
        console.log("css");
        gulp.src("app/**/*.css")
            .pipe(connect.reload());
    });
    
    // to watch html changes
    gulp.task("scss", function () {
        console.log("scss");
        return gulp.src("app/**/*.scss")
            .pipe(sass())
            .pipe(concat("style.css"))
            .pipe(gulp.dest("app/css/"))
            .pipe(connect.reload());
    });
    
    // to watch all changes
    gulp.task("watch", function () {
        console.log("watch");
        gulp.watch(["app/**/*.html"], ["html"]);
        gulp.watch(["app/**/*.scss"], ["scss"]);
        //gulp.watch(["app/**/*.css"], ["css"]);
        
    });
    
    
    gulp.task("default", ["html", "scss", "connect", "watch"]);
})();