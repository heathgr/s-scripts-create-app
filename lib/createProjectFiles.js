"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_extra_1 = require("fs-extra");
var path_1 = require("path");
var handlebars_1 = __importDefault(require("handlebars"));
var getTemplateFilePaths = function (path) { return __awaiter(void 0, void 0, void 0, function () {
    var itemsInPath, templateFiles;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (fs_extra_1.readdir(path))];
            case 1:
                itemsInPath = _a.sent();
                templateFiles = [];
                return [4 /*yield*/, Promise.all(itemsInPath.map(function (item) { return __awaiter(void 0, void 0, void 0, function () {
                        var itemPath, stats, subTemplateFiles;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    itemPath = path_1.join(path, item);
                                    return [4 /*yield*/, fs_extra_1.lstat(itemPath)];
                                case 1:
                                    stats = _a.sent();
                                    if (!stats.isDirectory()) return [3 /*break*/, 3];
                                    return [4 /*yield*/, getTemplateFilePaths(itemPath)];
                                case 2:
                                    subTemplateFiles = _a.sent();
                                    templateFiles = __spreadArrays(templateFiles, subTemplateFiles);
                                    return [3 /*break*/, 4];
                                case 3:
                                    templateFiles = __spreadArrays(templateFiles, [itemPath]);
                                    _a.label = 4;
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); }))];
            case 2:
                _a.sent();
                return [2 /*return*/, templateFiles];
        }
    });
}); };
var getTemplateSources = function (filePaths) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, Promise.all(filePaths.map(function (file) { return fs_extra_1.readFile(file, 'utf8'); }))];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
var getRenderedTemplates = function (templateSource, templateData) { return templateSource.map(function (source) {
    var template = handlebars_1.default.compile(source);
    return template(templateData);
}); };
var createProjectDirectories = function (targetFilePaths) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Promise.all(targetFilePaths.map(function (file) { return fs_extra_1.ensureFile(file); }))];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var writeProjectFiles = function (targetContents, targetFilePaths) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Promise.all(targetContents.map(function (contents, i) { return fs_extra_1.writeFile(targetFilePaths[i], contents, 'utf8'); }))];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var createProjectFiles = function (projectFolder, projectName) { return __awaiter(void 0, void 0, void 0, function () {
    var templatePath, templateFilePaths, templateSources, renderedTemplates, targetFilePaths;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                templatePath = path_1.join(__dirname, '../template_files/');
                return [4 /*yield*/, getTemplateFilePaths(templatePath)];
            case 1:
                templateFilePaths = _a.sent();
                return [4 /*yield*/, getTemplateSources(templateFilePaths)];
            case 2:
                templateSources = _a.sent();
                renderedTemplates = getRenderedTemplates(templateSources, { projectName: projectName });
                targetFilePaths = templateFilePaths.map(function (path) { return path_1.join(projectFolder, path.replace(templatePath, '')); });
                return [4 /*yield*/, createProjectDirectories(targetFilePaths)];
            case 3:
                _a.sent();
                return [4 /*yield*/, writeProjectFiles(renderedTemplates, targetFilePaths)];
            case 4:
                _a.sent();
                console.log('target files: ', targetFilePaths);
                console.log('templates: ', renderedTemplates);
                return [2 /*return*/];
        }
    });
}); };
exports.default = createProjectFiles;
//# sourceMappingURL=createProjectFiles.js.map