// =====================================================================================================================
// CONFIGURATION
// =====================================================================================================================
var theme = 'themes/htwg-new/';
var basePaths = {
    src: 'src/main/resources/assets/',
    dest: 'src/main/resources/static/',
};


// =====================================================================================================================
// DO NOT CHANGE FROM HERE
// =====================================================================================================================
var paths = {
    fonts: {
        //src: basePaths.src + theme + 'fonts/',
        src: basePaths.src + 'font/',
        dest: basePaths.dest + 'font/'
    },
    images: {
        src: basePaths.src + 'img/',
        dest: basePaths.dest + 'img/'
    },
    scripts: {
        src: basePaths.src + 'js/',
        dest: basePaths.dest + 'js/'
    },
    styles: {
        src: basePaths.src + theme + 'sass/',
        dest: basePaths.dest + 'css/'
    },
    stylesOld: {
        src: basePaths.src + 'themes/htwg-old/sass/',
        dest: basePaths.dest + 'css/'
    },
    solver: basePaths.src + 'solver/'
}

var combiner = require('stream-combiner2');
var concat = require('gulp-concat');
var debug = require("gulp-debug");
var del = require('del');
var env = process.env.GULP_ENV;
var folders = require("gulp-folders-4x");
var gulp = require('gulp');
var gulpif = require('gulp-if');
var overrideUrls = require('gulp-rev-css-url');
var path = require('path');
var rev = require('gulp-rev');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var runSequence = require('gulp4-run-sequence');

// ******************
// JAVASCRIPT TASKS *
// ******************

gulp.task('js', function () {
	 return createJavascriptPipeline([
            //'node_modules/jquery/dist/jquery.js',
            paths.scripts.src + '**/*.js'
        ], 'script.js'
    );
});


gulp.task('solver_js', folders(paths.solver, function(folder){
	 return gulp.src(path.join(paths.solver, folder, '*.js'))
        .pipe(concat(folder + '.js'))
        // .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.dest));
}));

  
gulp.task('watch_js', gulp.series('js', function () {
	  gulp.watch([
        paths.scripts.src + '*.js'
    ], ['js']);
}));

// ***********
// CSS TASKS *
// ***********

gulp.task('css', function () {
    return createCssPipeline([
            paths.styles.src + 'style.scss'
        ], 'styles.css'
    );
});

gulp.task('cssnew', function () {
    return createCssPipeline([
            paths.styles.src + 'style.scss'
        ], 'htwg-new.css'
    );
});

gulp.task('cssold', function () {
    return createCssPipeline([
            paths.stylesOld.src + 'style.scss'
        ], 'htwg-old.css'
    );
});

gulp.task('watch_css', gulp.series('css', function () {
    gulp.watch([
        paths.styles.src + '**/*.scss'
    ], ['css']);
}));


// *************
// IMAGE TASKS *
// *************

gulp.task('img', function () {
    return gulp.src(paths.images.src + '**/*.*')
        .pipe(gulp.dest(paths.images.dest));
});

gulp.task('watch_img', gulp.series('img', function () {
    gulp.watch([
        paths.images.src + '**/*.*'
    ], ['img']);
}));

// ************
// FONT TASKS *
// ************

gulp.task('fonts', function () {
    return gulp.src([
        paths.fonts.src + '**/*.*'
    ])
    .pipe(gulp.dest(paths.fonts.dest));
});

// ******************
// EXECUTABLE TASKS *
// ******************

gulp.task('default', function(done) {
    runSequence(
        ["clean", "cssnew", "cssold", "js", "solver_js", "img", "fonts"],
        done()
    )
});

gulp.task('watch', function (done) {
    runSequence(
        ["clean", "default", "watch_css", "watch_js", "watch_img"],
        done()
    )
});


gulp.task('clean', function(done) {
    del([
        basePaths.dest + 'css/*',
        basePaths.dest + 'fonts/*',
        basePaths.dest + 'img/*',
    	basePaths.dest + 'js/*'
    ], done());
});

// =====================================================================================================================
// Utilities
// =====================================================================================================================

function createJavascriptPipeline(src, output) {
    return combined = combiner.obj([
        gulp.src(src),
        sourcemaps.init({loadMaps: true}),
        concat(output),
        // uglify(),
        sourcemaps.write('./'),
        gulp.dest(paths.scripts.dest)
    ]).on('error', console.error.bind(console));
}

function createCssPipeline(src, output) {
    return combiner.obj([
        gulp.src(src),
        gulpif(/[.]scss/, sass()),
        sourcemaps.init({loadMaps: true}),
        concat(output),
        uglifycss(),
        sourcemaps.write('./'),
        gulp.dest(paths.styles.dest)
    ]).on('error', console.error.bind(console));

}
