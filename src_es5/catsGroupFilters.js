"use strict";

function maleCats(list) {
  var result = [];

  for (var i = 0; i < list.length; i++) {
    if (list[i].gender == "M") {
      result.push(list[i]);
    }
  }

  return result;
}

function namesCats(list) {
  var result = [];

  for (var i = 0; i < list.length; i++) {
    result.push(list[i].name);
  }

  return result;
}

function oldestMaleCats(list, n) {
  var result = [];
  var max;

  for (var i = 0; i < list.length; i++) {
    if (list[i].gender == "M") {
      if (max == undefined) {
        max = list[i].age;
      } else {
        max = Math.max(max, list[i].age);
      }
    }
  }

  for (var _i = 0; _i < list.length; _i++) {
    if (result.length == n) {
      break;
    }

    if (list[_i].age == max && list[_i].gender == "M") {
      result.push(list[_i]);
    }
  }

  return result;
}

function youngestFemaleNamesCats(list, n) {
  var result = [];
  var min;

  for (var i = 0; i < list.length; i++) {
    if (list[i].gender == "F") {
      if (min == undefined) {
        min = list[i].age;
      } else {
        min = Math.min(min, list[i].age);
      }
    }
  }

  for (var _i2 = 0; _i2 < list.length; _i2++) {
    if (result.length == n) {
      break;
    }

    if (list[_i2].age == min && list[_i2].gender == "F") {
      result.push(list[_i2].name);
    }
  }

  return result;
}
