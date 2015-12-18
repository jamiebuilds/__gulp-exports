import gulp from 'gulp';
import babel from 'gulp-babel';

export function build() {
  return gulp.src('src/*')
    .pipe(babel())
    .pipe(gulp.dest('lib'));
}

export default build;
