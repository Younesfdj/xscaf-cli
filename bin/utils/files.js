"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = exports.copyDir = exports.emptyDir = exports.copy = exports.editFile = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function editFile(file, callback) {
    const content = fs_1.default.readFileSync(file, "utf-8");
    fs_1.default.writeFileSync(file, callback(content), "utf-8");
}
exports.editFile = editFile;
function copy(src, dest) {
    const stat = fs_1.default.statSync(src);
    if (stat.isDirectory()) {
        copyDir(src, dest);
    }
    else {
        fs_1.default.copyFileSync(src, dest);
    }
}
exports.copy = copy;
function emptyDir(dir) {
    if (!fs_1.default.existsSync(dir)) {
        return;
    }
    for (const file of fs_1.default.readdirSync(dir)) {
        if (file === ".git") {
            continue;
        }
        fs_1.default.rmSync(path_1.default.resolve(dir, file), { recursive: true, force: true });
    }
}
exports.emptyDir = emptyDir;
function copyDir(srcDir, destDir) {
    fs_1.default.mkdirSync(destDir, { recursive: true });
    for (const file of fs_1.default.readdirSync(srcDir)) {
        const srcFile = path_1.default.resolve(srcDir, file);
        const destFile = path_1.default.resolve(destDir, file);
        copy(srcFile, destFile);
    }
}
exports.copyDir = copyDir;
function isEmpty(path) {
    const files = fs_1.default.readdirSync(path);
    return files.length === 0 || (files.length === 1 && files[0] === ".git");
}
exports.isEmpty = isEmpty;
