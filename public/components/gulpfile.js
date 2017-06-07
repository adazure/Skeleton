var gulp = require("gulp");
var concat = require("gulp-concat");


var path = 'datas/';

var data = [

        path + 'skeleton.js',
        path + 'skeleton.queryparser.js',
        path + 'skeleton.stacker.js',
        path + 'skeleton.stacker.methods.js',
        path + 'skeleton.stacker.init.js',
        path + 'skeleton.global.prototypes.js',
        path + 'skeleton.global.prototypes.methods.js',
        path + 'skeleton.svg.js',
        path + 'skeleton.svg.methods.js',
        path + 'skeleton.svg.init.js',
        path + 'skeleton.helper.js',
        path + 'skeleton.helper.methods.js',
        path + 'skeleton.element.js',
        path + 'skeleton.element.methods.js',
        path + 'skeleton.element.init.js',
        path + 'skeleton.collection.js',
        path + 'skeleton.collection.methods.js',
        path + 'skeleton.collection.init.js',
        path + 'skeleton.tooltip.js',
        path + 'skeleton.tooltip.methods.js',
        path + 'skeleton.tooltip.init.js',
        path + 'skeleton.path.js',
        path + 'skeleton.path.data.js',
        path + 'skeleton.path.methods.js',
        path + 'skeleton.path.init.js',
        path + 'skeleton.menu.js',
        path + 'skeleton.menu.data.js',
        path + 'skeleton.menu.methods.js',
        path + 'skeleton.menu.init.js',
        path + 'skeleton.popup.js',
        path + 'skeleton.popup.methods.js',
        path + 'skeleton.popup.init.js',
        path + 'skeleton.regex.js',
        path + 'skeleton.regex.methods.js',
        path + 'skeleton.regex.init.js',
        path + 'skeleton.methods.js',
        path + 'skeleton.form.collection.js',
        path + 'skeleton.styles.js',
        path + 'skeleton.init.js'
    ];

gulp.task('scripts',function(){

   return  gulp.src(data)
    .pipe(concat('script.data.js'))
    .pipe(gulp.dest("./"));

});

gulp.task('default',function(){
    gulp.watch(data,['scripts']);
});