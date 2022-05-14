declare function setTitle(title: string | number): void;
declare function getTitle(): string;
declare let documentTitle: string;

interface String {
  getFirstLetter(): string
}
// 引入库依赖的声明文件
// /// <reference types="moment" />
// 对模块的依赖
// import * as moment from 'moment'

// 防止命名空间命名的污染
