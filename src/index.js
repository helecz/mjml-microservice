require('babel-register')({
	ignore: function(filename) {
		if (/hele-mjml-components/.test(filename)) {
			return false;
		}
		return /node_modules/.test(filename);
	},
});

require('./main');
