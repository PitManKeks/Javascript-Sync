"use strict";

function nameStats(list) {
  var result = {};

  for (var i = 0; i < list.length; i++) {
    result[list[i].name] = 0;
  }

  for (var _i = 0; _i < list.length; _i++) {
    result[list[_i].name]++;
  }

  return result;
}
