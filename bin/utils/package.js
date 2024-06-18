"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toValidPackageName = exports.isValidPackageName = void 0;
function isValidPackageName(projectName) {
    return /^(?:@[a-z\d\-*~][a-z\d\-*._~]*\/)?[a-z\d\-~][a-z\d\-._~]*$/.test(projectName);
}
exports.isValidPackageName = isValidPackageName;
function toValidPackageName(projectName) {
    return projectName
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/^[._]/, "")
        .replace(/[^a-z\d\-~]+/g, "-");
}
exports.toValidPackageName = toValidPackageName;
