"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("util");
var child_process_1 = require("child_process");
exports.default = util_1.promisify(child_process_1.exec);
//# sourceMappingURL=exec.js.map