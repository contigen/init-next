import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), `posts`);

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // remove file extension name and use as id
    const id = fileName.slice(0, -3);
    const fullFilePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullFilePath, `utf-8`);
    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostsData.sort(({ date: a }, { date: b }) =>
    a < b ? 1 : a > b ? -1 : 0
  );
}
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    params: {
      id: fileName.slice(0, -3),
    },
  }));
}
export async function getPostData(id) {
  const fullFilePath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullFilePath, `utf-8`);
  const matterResult = matter(fileContents);
  const htmlContent = await (
    await remark().use(html).process(matterResult.content)
  ).toString();
  return {
    id,
    htmlContent,
    ...matterResult.data,
  };
}
