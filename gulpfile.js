var gulp = require('gulp'),
	sass = require('gulp-ruby-sass');

// Task Sass
gulp.task('styles', function(){
	return sass('assets/scss/global.scss', {
		'sourcemap=none': true,
		style: "compressed",
		noCache: true
	})
	.pipe(gulp.dest('assets/css'))
});

// Task Watch
gulp.task('watch', function(){
	gulp.watch('assets/scss/*.scss', ['styles']);
});
