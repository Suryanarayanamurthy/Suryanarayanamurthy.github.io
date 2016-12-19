var gulp = require('gulp');  
var sass = require('gulp-sass');

//style paths
var sassFiles = 'src/styles/*.scss',  
    cssDest = 'src/';

gulp.task('styles', function(){  
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

gulp.task('default', ['styles']);