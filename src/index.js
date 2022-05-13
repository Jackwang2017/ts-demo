var Validation;
(function (Validation) {
    Validation.isletterReg = /^\w+$/;
    Validation.checkLetter = function (text) {
        return Validation.isletterReg.test(text);
    };
})(Validation || (Validation = {}));
var Validation;
(function (Validation) {
    Validation.isNumberReg = /^\d+$/;
    Validation.checkNumber = function (text) {
        return Validation.isNumberReg.test(text);
    };
})(Validation || (Validation = {}));
// import { name } from './b';
// import * as info from './b';
// import * as Adata from './a'
// import name from './c'
// import named = require('./c');
// import moment from 'moment';
// import * as moment from 'moment';
// import moment = require('moment')
// console.log(name)
// namespace表示内部模块， export表示外部可见模块
// namespace表示内部模块，可防止全局污染
/**
 * 使用三斜线来引入命名空间namespace
 */
/// <reference path="./letter-validation.ts" />
/// <reference path="./number-validation.ts" />
var isLetter = Validation.checkLetter('abc');
var isNumber = Validation.checkNumber('abc');
console.log(Validation, isLetter, isNumber);
