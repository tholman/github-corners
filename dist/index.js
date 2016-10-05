'use strict';

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('github-corners', ['exports', 'strip-indent', 'lodash'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('strip-indent'), require('lodash'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.stripIndent, global.lodash);
    global.githubCorners = mod.exports;
  }
})(this, function (exports, _stripIndent, _lodash) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.buildOptions = buildOptions;
  exports.svg = svg;
  exports.githubCorners = githubCorners;
  exports.generate = generate;

  var _stripIndent2 = _interopRequireDefault(_stripIndent);

  var _lodash2 = _interopRequireDefault(_lodash);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _slicedToArray = (function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  })();

  function buildOptions(theme) {
    if (Array.isArray(theme)) {
      var _theme = theme;

      var _theme2 = _slicedToArray(_theme, 6);

      var fill = _theme2[0];
      var color = _theme2[1];
      var position = _theme2[2];
      var style = _theme2[3];
      var wrap = _theme2[4];
      var url = _theme2[5];
      theme = {
        fill: fill,
        color: color,
        position: position,
        style: style,
        wrap: wrap,
        url: url
      };
    }

    theme.position = theme.position || 'right';
    theme.style = theme.style !== false;
    theme.url = theme.url || 'http://your-url';
    theme.positionStyle = theme.position === 'right' ? 'right: 0;' : 'left: 0; transform: scale(-1, 1);';
    theme.wrap = theme.wrap === false ? ['', ''] : ['<a href="' + theme.url + '" class="github-corner">', '</a>'];
    theme.styleHTML = !theme.style ? '' : (0, _stripIndent2.default)('\n    <style>\n      .github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}\n    </style>\n  ').trim();
    return theme;
  }

  function svg(theme) {
    var _buildOptions = buildOptions(theme);

    var fill = _buildOptions.fill;
    var color = _buildOptions.color;
    var positionStyle = _buildOptions.positionStyle;
    return (0, _stripIndent2.default)('\n    <svg width="80" height="80" viewBox="0 0 250 250" style="fill:' + fill + '; color:' + color + '; position: absolute; top: 0; border: 0; ' + positionStyle + '">\n      <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>\n    </svg>\n  ').trim();
  }

  function githubCorners(theme) {
    var _buildOptions2 = buildOptions(theme);

    var wrap = _buildOptions2.wrap;
    var styleHTML = _buildOptions2.styleHTML;
    return (0, _stripIndent2.default)('\n    ' + wrap[0] + '\n      ' + svg(theme) + '\n    ' + wrap[1] + '\n    ' + styleHTML + '\n  ').trim();
  }

  function generate(themes) {
    themes = themes || {
      black: ['#151513', '#fff'],
      green: ['#64CEAA', '#fff'],
      red: ['#FD6C6C', '#fff'],
      blue: ['#70B7FD', '#fff']
    };
    var colors = {};

    _lodash2.default.each(themes, function (val, key) {
      colors[key] = val;
      colors[key + 'Inverse'] = [val[1], val[0]];
    });

    var positions = {};

    _lodash2.default.each(colors, function (val, key, obj) {
      positions[key] = val.concat([null]);
      positions[key + 'Left'] = val.concat(['left']);
    });

    var styles = {};

    _lodash2.default.each(positions, function (val, key, obj) {
      styles[key] = val.concat([null]);
      styles[key + 'NoStyle'] = val.concat([false]);
    });

    var wraps = {};

    _lodash2.default.each(styles, function (val, key, obj) {
      wraps[key] = val.concat([null]);
      wraps[key + 'NoWrap'] = val.concat([false]);
    });

    var out = {};
    Object.assign(out, _lodash2.default.mapValues(wraps, githubCorners));

    _lodash2.default.each(positions, function (val, key) {
      return out[key + 'SVG'] = svg(val);
    });

    return out;
  }

  exports.default = githubCorners;
});
