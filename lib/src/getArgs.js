"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var yargs_1 = __importDefault(require("yargs"));
var rawArgs = yargs_1.default
    .usage('Usage: $0 [path]')
    .describe('n', 'Specify a project name.')
    .alias('n', 'name')
    .nargs('n', 1)
    .demandCommand(1)
    .argv;
var args = __assign(__assign({}, rawArgs), { projectFolder: rawArgs._[0], projectName: rawArgs.n || rawArgs._[0] });
exports.default = args;
//# sourceMappingURL=getArgs.js.map