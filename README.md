# gulp-exports

Experimental gulp with `exports` as tasks. See https://github.com/gulpjs/gulp-cli/pull/47

```js
import gulp from 'gulp';
import babel from 'gulp-babel';

export function build() {
  return gulp.src('src/*')
    .pipe(babel())
    .pipe(gulp.dest('lib'));
}

export default build;
```

To try this out for yourself, clone this repo and run:

```sh
$ npm install
$ npm dedupe # necessary because npm can't properly dedupe github dependencies
```

Then you can test it out with

```sh
$ npm run build # will run gulp build with the local gulp-cli
```
