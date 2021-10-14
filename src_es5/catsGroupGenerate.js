"use strict";

function catsGroupGenerate(n) {
  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultParametrs;
  var catsGroup = [];

  for (var i = 0; i < n; i++) {
    catsGroup.push(catFactory(defaults));
  }

  return catsGroup;
}
