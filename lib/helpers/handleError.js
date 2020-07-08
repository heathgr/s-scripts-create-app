"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handleError = function (e) {
    if (e.message) {
        console.error(e.message);
    }
    if (e.stack) {
        console.error(e.stack);
    }
    if (e.stdout) {
        console.error(e.stdout);
    }
    if (e.stdout) {
        console.error(e.stderr);
    }
    process.exit(1);
};
exports.default = handleError;
//# sourceMappingURL=handleError.js.map