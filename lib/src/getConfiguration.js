"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var yargs_1 = __importDefault(require("yargs"));
var commandLineArgs = yargs_1.default
    .usage('Usage: $0 [path]')
    .describe('n', 'Specify a project name.')
    .alias('n', 'name')
    .nargs('n', 1)
    .demandCommand(1)
    .argv;
var configuration = {
    folder: commandLineArgs._[0],
    name: commandLineArgs.n || commandLineArgs._[0],
};
exports.default = configuration;
//# sourceMappingURL=getConfiguration.js.map