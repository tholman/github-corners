'use strict';

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('github-corners-gen', ['.', 'jsonfile'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('.'), require('jsonfile'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global._, global.jsonfile);
    global.githubCornersGen = mod.exports;
  }
})(this, function (_, _jsonfile) {
  var _jsonfile2 = _interopRequireDefault(_jsonfile);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var out = (0, _.generate)();

  _jsonfile2.default.writeFileSync('dist/github-corners.json', out, {
    spaces: 2
  });
});
