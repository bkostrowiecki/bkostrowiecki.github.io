import { postsPerPageLimit } from "@/configuration/site";
import { fetchAllFilesFromGivenFolder, getPostsFolder } from "./files";
import { CategoryEntity, parsePostFile, PostEntity, TagEntity } from "./post";

export type QueryResult = {
  posts: PostEntity[];
};

export type PostsQueryParams = {
  page?: number;
  limit?: number;
  tags?: TagEntity[];
  category?: CategoryEntity;
};

export const queryAllPosts = async () => {
  const postFiles = await fetchAllFilesFromGivenFolder(getPostsFolder());

  const postFilesParsing = postFiles.map((postFile) => {
    return parsePostFile(postFile.path);
  });

  const allPosts = await Promise.all(postFilesParsing);

  return allPosts;
};

export const extractCategoriesFromPosts = async (posts: PostEntity[]) => {
  const categoriesWithDuplication = posts.map((post) => {
    return post.data.category;
  });

  const allCategories = new Set(categoriesWithDuplication);

  return Array.from(allCategories).sort();
};

export const extractTagsFromPosts = async (posts: PostEntity[]) => {
  const tagsWithDuplication = posts
    .map((post) => {
      return post.data.tags;
    })
    .flat();

  const allTags = new Set(tagsWithDuplication);

  return Array.from(allTags).sort();
};

export const findPostBySlug = (allPosts: PostEntity[], postSlug: string) => {
  return allPosts.find((item) => item.data.slug == postSlug) ?? null;
};

export const filterPosts = (
  allPosts: PostEntity[],
  queryParams?: PostsQueryParams
) => {
  const sortedPosts = allPosts.sort((a, b) => {
    return b.data.publicationAt.getTime() - a.data.publicationAt.getTime();
  });

  const queriedPosts = sortedPosts.filter((post) => {
    if (queryParams) {
      if (queryParams.tags) {
        const caseInsensitiveParamsTags = queryParams.tags.map((tag) => tag.toUpperCase());
        const caseInsensitivePostTags = post.data.tags.map((tag) => tag.toUpperCase());

        let hasAllTags = caseInsensitiveParamsTags!.every((tag) =>
          caseInsensitivePostTags.includes(tag!)
        );

        if (!hasAllTags) {
          return false;
        }
      }

      if (queryParams.category) {
        return post.data.category.toUpperCase() == queryParams.category.toUpperCase();
      }
    }
    return true;
  });

  const limitedPosts = queriedPosts.filter((_post, index) => {
    if (queryParams && queryParams.page != null && queryParams.limit) {
      const startingIndex = queryParams.limit * queryParams.page;
      const endingIndex = startingIndex + queryParams.limit;

      if (index < startingIndex || index >= endingIndex) {
        return false;
      }
    }

    return true;
  });

  return limitedPosts;
};

export function calculatePages<T>(entities: T[]) {
  return Math.ceil(entities.length / postsPerPageLimit);
}
