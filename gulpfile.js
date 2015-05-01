var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	jshint = require('gulp-jshint');

// Task Sass
gulp.task('styles', function(){
	return sass('assets/scss/global.scss', {
		'sourcemap=none': true,
		style: "compressed",
		noCache: true
	})
	.pipe(gulp.dest('assets/css'))
});

// JShint
gulp.task('jshint', function(){
	return gulp.src('assets/js/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
});

// Task Watch
gulp.task('watch', function(){
	gulp.watch('assets/scss/*.scss', ['styles']);
	gulp.watch('assets/js/*.js', ['jshint']);
});
