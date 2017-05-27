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

var path = {
	build: { //Куда складывать готовые файлы после сборки
		html: 'build',
		js: 'build/js',
		css: 'build/css',
		img: 'build/img',
		fonts: 'build/fonts'
	},
	src: { //Откуда брать исходники
		html: 'src/*.html', //Хотим взять все файлы с расширением .html
		js: 'src/js/main.js',
		style: 'src/scss/main.scss',
		img: 'src/img/**/*.*', //Взять все файлы, всех расширений из всех вложенных папок
		fonts: 'src/fonts/**/*.*' 
	},
	watch: { //Наблюдаем за изменениями файлов
		html: 'src/**/*.html',
		js: 'src/js/**/*.js',
		style: 'src/scss/**/*.scss',
		img: 'src/img/**/*.*',
		fonts: 'src/fonts/**/*.*'
	},
	clean: './build'
}







