module.exports = function(grunt) {
	grunt.initConfig({
		conf: grunt.file.readJSON("config.json"),
		uglify: {
			dist: {
				files: {
					"dist/app.min.js": "app/**/*.js"
				}
			}
		},
		watch: {
			files: "<%= conf.input %>",
			tasks: ['uglify']
		}
	});

	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");
}
