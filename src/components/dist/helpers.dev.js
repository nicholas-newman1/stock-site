"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.truncate = truncate;
exports.formatData = exports.formatPhoneNumber = exports.shortenNumber = exports.formatAMPM = exports.getTimeAgoString = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function truncate(str, n, useWordBoundary) {
  if (str.length <= n) {
    return str;
  }

  var subString = str.substr(0, n - 1); // the original check

  return subString.substr(0, subString.lastIndexOf(' '));
}

var getTimeAgoString = function getTimeAgoString(date) {
  var timeAgo = new Date(Date.now() - Date.parse(date));
  if (timeAgo.getMinutes() < 1) return "less than a minute ago";
  if (timeAgo.getHours() < 1) return "".concat(timeAgo.getMinutes(), " minutes ago");
  if (timeAgo.getHours() === 1) return "An hour ago";
  if (timeAgo.getHours() > 1) return "".concat(timeAgo.getHours(), " hours ago");
};

exports.getTimeAgoString = getTimeAgoString;

var formatAMPM = function formatAMPM(timestamp) {
  var date = new Date(timestamp);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
};

exports.formatAMPM = formatAMPM;

var shortenNumber = function shortenNumber(number) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var trailingZeros = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // if value is not a number, return it unaltered
  if (typeof number !== 'number') return number; // divide by either a trillion, billion, or million, and add the respective letter (T,B,M)
  // toLocaleString formats number to be more readable

  var options = {
    minimumSignificantDigits: decimals,
    maximumSignificantDigits: decimals
  };

  if (number >= 1000000000000 || number <= -1000000000000) {
    return "".concat((number / 1000000000000).toLocaleString(undefined, options), "T");
  } else if (number >= 1000000000 || number <= -1000000000) {
    return "".concat((number / 1000000000).toLocaleString(undefined, options), "B");
  } else if (number >= 1000000 || number <= -1000000) {
    return "".concat((number / 1000000).toLocaleString(undefined, options), "M");
  } else {
    return trailingZeros ? number.toFixed(decimals) : parseFloat(number.toFixed(decimals)).toLocaleString();
  }
};

exports.shortenNumber = shortenNumber;

var formatPhoneNumber = function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    var intlCode = match[1] ? '+1 ' : '';
    return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
  }

  return phoneNumberString;
};

exports.formatPhoneNumber = formatPhoneNumber;

var formatData = function formatData(data) {
  for (var key in data) {
    // replace null values with 'N/A'
    data = _objectSpread({}, data, _defineProperty({}, key, data[key] === null ? 'N/A' : data[key])); // replace long numbers with a shortned version

    data = _objectSpread({}, data, _defineProperty({}, key, shortenNumber(data[key])));
  }

  return data;
};

exports.formatData = formatData;