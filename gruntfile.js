module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			dist: {
				options: {
					sourcemap: 'none',
					noCache: true,
					style: 'compressed'
				},
				files: {
					'assets/css/global.css': 'assets/scss/global.scss' 
				}
			},
			
		},

		watch: {
			styles: {
				files: '**/*.scss',
				tasks: ['compile']
			}
		}
	});
	
	//Tasks
	grunt.registerTask('compile', ['sass']);

	// Load Plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
}