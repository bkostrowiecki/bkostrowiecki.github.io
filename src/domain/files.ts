import * as fs from "fs/promises";
import * as path from "path";
import * as util from "util";

export const stat = util.promisify(fs.stat);

export type Path = string & {
  __brand: "path";
};

function pathifyString(str: string) {
  return str as Path;
}
export type FileRead = {
  path: Path;
  creationAt: Date;
};

export const fetchAllFilesFromGivenFolder = async (fullPath: Path) => {
  let files: FileRead[] = [];

  const readdirResult = await fs.readdir(fullPath);

  await Promise.allSettled(
    readdirResult.map((file) => {
      return new Promise<void>(async (resolve, reject) => {
        const absolutePath = pathifyString(path.join(fullPath, file));

        const stat = await fs.stat(absolutePath);

        if (stat.isDirectory()) {
          const filesFromNestedFolder = await fetchAllFilesFromGivenFolder(
            absolutePath
          );
          filesFromNestedFolder.forEach((file) => {
            files.push(file);
          });
        } else {
          const creationAt = new Date(stat.birthtimeMs);
          const path = absolutePath;

          files.push({
            path,
            creationAt,
          });

          resolve();
        }
      });
    })
  );

  return files.reverse();
};

export const getPostsFolder = () =>
  pathifyString(path.join(process.cwd(), "data/posts"));

export const getResumeFilePath = () =>
  pathifyString(path.join(process.cwd(), "data/resume/resume.json"));

export const fetchJsonFile = async (fullPath: string) => {
  const content = await fs.readFile(fullPath, "utf8");

  console.log(content);

  return JSON.parse(content);
}
