"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseToDate = void 0;
function parseToDate(str) {
    //'27/10/2018'
    const [day, month, year] = str.split('/').map((val) => parseInt(val));
    return new Date(year, month - 1, day);
}
exports.parseToDate = parseToDate;
//# sourceMappingURL=utils.js.map