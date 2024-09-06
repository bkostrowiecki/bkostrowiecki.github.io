import matter, { GrayMatterFile } from "gray-matter";
import fs from "fs/promises";
import * as yup from "yup";

const postMetadataSchema = yup.object({
  title: yup.string().required(),
  slug: yup.string().required(),
  category: yup.string().required(),
  tags: yup.string().required(),
  publicationAt: yup.date().required(),
  abstract: yup.string().required(),
});

export interface PostMetadataInput
  extends yup.InferType<typeof postMetadataSchema> {}

export type TagEntity = string & {
  __brand: "tag";
};

export type CategoryEntity = string & {
  __brand: "tag";
};

export interface PostMetadata {
  title: string;
  slug: string;
  category: CategoryEntity;
  tags: TagEntity[];
  publicationAt: Date;
  abstract: string;
}

export interface PostEntity extends GrayMatterFile<string> {
  content: string;
  data: PostMetadata;
}

export const parsePostFile = async (path: string): Promise<PostEntity> => {
  const fileContent = await fs.readFile(path, "utf8");

  const parsedFrontMatter = matter(fileContent);

  try {
    await postMetadataSchema.validate(parsedFrontMatter.data);

    return {
      ...parsedFrontMatter,
      data: {
        ...parsedFrontMatter.data,
        publicationAt: new Date(parsedFrontMatter.data.publicationAt),
        tags: parsedFrontMatter.data.tags
          .split(",")
          .map((splitted: string) => splitted.trim()),
      } as PostMetadata,
    };
  } catch (error) {
    console.error(`Error trying to parse file ${path}!`);
    throw error;
  }
};
