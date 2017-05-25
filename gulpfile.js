'use strict';

var gulp = require('gulp'),
		watch = require('gulp-watch'),
		prefixer = require('gulp-autoprefixer'),
		cleancss = require('gulp-clean-css'),
		sass = require('gulp-sass'),
		uglify = require('gulp-uglify'),
		sourcemap = require('gulp-sourcemaps'),
		rigger = require('gulp-rigger'),
		pngquant = require('imagemin-pngquant'),
		imagemin = require('gulp-imagemin'),
		rimraf = require('rimraf'),
		browserSync = require('browser-sync'),
		reload = browserSync.reload;
