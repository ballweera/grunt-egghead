module.exports = function(grunt) {
	grunt.initConfig({
		files: [".js", ".html"],
		compile: "Hello, <% _.forEach(files, function(file) {%>" +
				"<%= file %>" +
				"<%}) %>"
	});

	grunt.registerTask("default", function() {
		grunt.log.writeln(grunt.config.get("compile"));
		grunt.log.writeln(grunt.template.today());
		grunt.log.writeln(grunt.template.process("<%= files %>"));
	});
}
