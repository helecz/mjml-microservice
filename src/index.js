require('babel-register')({
  ignore: function (filename) {  // eslint-disable-line object-shorthand, func-names
    if (/hele-mjml-components/.test(filename)) {
      return false;
    }
    return /node_modules/.test(filename);
  },
});

require('./main');
