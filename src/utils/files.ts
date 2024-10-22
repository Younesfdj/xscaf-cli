import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function editFile(file: string, callback: (content: string) => string) {
  const content = fs.readFileSync(file, "utf-8");
  fs.writeFileSync(file, callback(content), "utf-8");
}

export function copy(src: string, dest: string, skipDir: string[] = []) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!skipDir.includes(src)) {
      copyDir(src, dest, skipDir);
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}
export function emptyDir(dir: string) {
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
export function copyDir(
  srcDir: string,
  destDir: string,
  skipDir: string[] = []
) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file);
    const destFile = path.resolve(destDir, file);
    copy(srcFile, destFile, skipDir);
  }
}

export function isEmpty(path: string) {
  const files = fs.readdirSync(path);
  return files.length === 0 || (files.length === 1 && files[0] === ".git");
}

export function dirExists(path: string) {
  // if not a dir return false
  if (!fs.existsSync(path)) return false;
  if (!fs.lstatSync(path).isDirectory()) return false;
  return true;
}

// get the directories only in the specified directory, exclude .git
export function getAllDirs(rootDirPath: string) {
  return fs
    .readdirSync(rootDirPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory() && dirent.name !== ".git")
    .map((dirent) => dirent.name);
}

// a function to remove a directory and its content
export function removeDir(dirPath: string) {
  fs.rmSync(dirPath, { recursive: true, force: true });
}
