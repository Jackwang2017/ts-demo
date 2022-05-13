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
let isLetter = Validation.checkLetter('abc');
let isNumber = Validation.checkNumber('abc');
console.log(Validation ,isLetter, isNumber)

namespace Shapes {
  export namespace Polygons {
    export class Triangle {}
    export class Squaire {}
  }
}
import polygons = Shapes.Polygons;
let triangle = new polygons.Triangle();

// 模块的解析，相对导入与非相对导入====> / , ./ , ../
// 配置项在tsconfig.json/moduleResolution上
// './a'
// '../example/class.ts'
// namespace命名空间不推荐使用，一般使用import、export
