"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.put = exports.patch = exports.del = exports.post = exports.get = void 0;
require("reflect-metadata");
var Methods_1 = require("./Methods");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        };
    };
}
exports.get = routeBinder(Methods_1.Methods.get);
exports.post = routeBinder(Methods_1.Methods.post);
exports.del = routeBinder(Methods_1.Methods.del);
exports.patch = routeBinder(Methods_1.Methods.patch);
exports.put = routeBinder(Methods_1.Methods.put);
// export function get(path: string) {
//   return function (target: any, key: string, desc: PropertyDescriptor) {
//     Reflect.defineMetadata('path', path, target, key);
//     Reflect.defineMetadata('method', 'get', target, key);
//   };
// }
// export function post(path: string) {
//   return function (target: any, key: string, desc: PropertyDescriptor) {
//     Reflect.defineMetadata('path', path, target, key);
//     Reflect.defineMetadata('method', 'post', target, key);
//   };
// }
