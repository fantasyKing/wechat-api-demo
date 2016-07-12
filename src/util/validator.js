var _ = require('lodash');
var validator = require('validator');
var PNF = require('google-libphonenumber').PhoneNumberFormat;
var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

exports.checkParamType = function (obj, attrs, musts, types) {
  var err = [];

  // 校验参数必须是不为空的数组
  if (!attrs || !musts || !types) {
    return err;
  }

  // 校验参数数组必须长度保持一致
  if (!(attrs.length == musts.length && attrs.length == types.length)) {
    err.push('attrs, musts and types length must be equivalent.');
    return err;
  }

  for (var i = 0; i < attrs.length; i++) {
    var _attr = attrs[i];
    var must = musts[i];
    var type = types[i];

    if (!mustExists(must, obj[_attr])) {
      err.push(_attr + ' is necessary');
    }

    if (!isValidType(obj, _attr, type)) {
      err.push(_attr + ' should be ' + type);
    }
  }

  // 检查必须的参数是否存在
  function mustExists(must, vaule) {
    if (must && (vaule == undefined || vaule == null)) {
      return false;
    }
    return true;
  }

  // 检查参数类型是否正确，escapse字符串，将json转成对象
  function isValidType(obj, attr, type) {
    var value = obj[attr];
    if (!value) {
      return true;
    }
    var trim = function (str) {
      return str.replace(/(^\s*)|(\s*$)/g, '');
    };
    var types = type.split(',');
    for (var i in types) {
      var _type = trim(types[i]).toLowerCase();
      switch (_type) {
        case 'array':
        {
          if (Array.isArray(value)) {
            return true;
          }
          break;
        }
        case 'mongoid':
        {
          if (validator.isMongoId(value)) {
            return true;
          }
          break;
        }
        case 'date':
        {
          if (validator.isDate(value)) {
            return true;
          }
          break;
        }
        case 'phone':
        {
          if (validator.isMobilePhone(value, 'zh-CN')) {
            return true;
          }
          break;
        }
        case 'number':
        {
          if (validator.isNumeric(value)) {
            return true;
          }
          break;
        }
        case 'float':
        {
          if (validator.isFloat(value)) {
            return true;
          }
          break;
        }
        case 'decimal':
        {
          if (validator.isDecimal(value)) {
            return true;
          }
          break;
        }
        case 'email':
        {
          if (validator.isEmail(value)) {
            return true;
          }
          break;
        }
        case 'file':
        {
          if (value) {
            return true;
          }
          break;
        }
        case 'json':
        {
          if (typeof value === 'string' && validator.isJSON(value)) {
            obj[attr] = JSON.parse(value);
            return true;
          }
          break;
        }
        default :
        {
          if (typeof value == _type) {
            return true;
          }
          break;
        }
      }
    }
    return false;
  }

  return err;
};

exports.e164 = function (phone, country_code) {
  try {
    var phoneNumber = phoneUtil.parse(String(phone), country_code || 'CN');
    var phoneNumberE164 = phoneUtil.format(phoneNumber, PNF.E164);
    console.log('phone.e164 =', phone + ' ---> ' + phoneNumberE164);
    return phoneNumberE164;
  } catch (e) {
    console.log('e164 error =', e, e.stack);
    return '';
  }
};

exports.unescapse = function (str) {
  return str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, '\'').replace(/&#x2F;/g, '\/');
};

/**
 * 检查字符串长度
 * @param text
 * @param min
 * @param max
 * @param cb
 */
exports.textLengthCheck = function (text, min, max) {
  var err;

  if (!text) {
    err = null;
  } else {
    if (text.length < min) {
      err = text + ' minimum length is ' + min;
    } else if (text.length > max) {
      err = text + ' maximum length is ' + max;
    } else {
      err = null;
    }
  }

  return err;
};
