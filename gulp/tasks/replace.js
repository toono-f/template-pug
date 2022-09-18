const gulp = require('gulp');
const $ = require('../plugins');
const conf = require('../conf').replace;

gulp.task('replaceHtml', () => {
  const regJs = new RegExp('main.js');
  const regCss = new RegExp('main.css', 'g');
  return (
    gulp
      .src(conf.html.src)
      .pipe($.htmlhint('.htmlhintrc'))
      // .pipe(
      //   $.htmlmin({
      //     collapseWhitespace: true, // 余白を除去する
      //     removeComments: true, // HTMLコメントを除去する
      //   }),
      // )
      .pipe($.replace(regJs, 'main.min.js'))
      .pipe($.replace(regCss, 'main.min.css'))
      .pipe(gulp.dest(conf.html.dest))
  );
});
