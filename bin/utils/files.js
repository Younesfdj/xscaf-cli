import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
export const __dirname = path.dirname(fileURLToPath(import.meta.url));
export function editFile(file, callback) {
    const content = fs.readFileSync(file, "utf-8");
    fs.writeFileSync(file, callback(content), "utf-8");
}
export function copy(src, dest, skipDir = []) {
    const stat = fs.statSync(src);
    if (stat.isDirectory()) {
        if (!skipDir.includes(src)) {
            copyDir(src, dest, skipDir);
        }
    }
    else {
        fs.copyFileSync(src, dest);
    }
}
export function emptyDir(dir) {
    if (!fs.existsSync(dir)) {
        return;
    }
    for (const file of fs.readdirSync(dir)) {
        if (file === ".git") {
            continue;
        }
        fs.rmSync(path.resolve(dir, file), { recursive: true, force: true });
    }
}
export function copyDir(srcDir, destDir, skipDir = []) {
    fs.mkdirSync(destDir, { recursive: true });
    for (const file of fs.readdirSync(srcDir)) {
        const srcFile = path.resolve(srcDir, file);
        const destFile = path.resolve(destDir, file);
        copy(srcFile, destFile, skipDir);
    }
}
export function isEmpty(path) {
    const files = fs.readdirSync(path);
    return files.length === 0 || (files.length === 1 && files[0] === ".git");
}
