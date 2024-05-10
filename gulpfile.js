const gulp = require('gulp');
const sassCompiler = require('sass');
const sass = require('gulp-sass')(sassCompiler);
const browserSync = require('browser-sync').create();

// Compile SCSS into CSS
gulp.task('sass', done => {
	gulp.src('./assets/src/styles/**/*.scss')
		.pipe(sass().on('error', function(err) {
			console.error(err.message);
			this.emit('end'); // Prevent gulp from catching the error and exiting the watch process
		}))
		.pipe(gulp.dest('./assets/dist/styles'))
		.pipe(browserSync.stream());
	done();
});

// Move js into dist folder for future minify
gulp.task('js', done => {
	gulp.src(['./assets/src/js/*'])
		.pipe(gulp.dest('./assets/dist/js'))
		.pipe(browserSync.stream());
	done();
});

// Static Server
gulp.task('serve', gulp.series('sass', 'js', done => {
	browserSync.init({
		server: './',
		port: 3000
	});

	gulp.watch('./assets/src/styles/**/*.scss', gulp.series('sass'));
	gulp.watch('./assets/src/js/*.js', gulp.series('js'));
	gulp.watch('./*.html').on('change', browserSync.reload);
	done();
}));

gulp.task('default', gulp.series('serve'));