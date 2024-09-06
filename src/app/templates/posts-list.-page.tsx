import {
  extractCategoriesFromPosts,
  filterPosts,
  extractTagsFromPosts,
  queryAllPosts,
  calculatePages,
} from "@/domain/query";
import { MainLayout } from "@/ui/main-layout";
import { Pagination } from "@/ui/pagination";
import { PostList } from "@/ui/post-list";
import { GenericRouteParams, parseRouteParams } from "./parse-params";
import { PostListPageMetadata } from "@/ui/post-list-page-metadata";

export default async function PostsListPage({
  params,
  urlPrefix,
}: {
  params: GenericRouteParams;
  urlPrefix: string;
}) {
  const postsQueryParams = parseRouteParams(params);

  const allPosts = await queryAllPosts();
  const allCategories = await extractCategoriesFromPosts(allPosts);
  const allTags = await extractTagsFromPosts(allPosts);

  const posts = await filterPosts(allPosts, postsQueryParams);

  const pagesNumber = calculatePages(allPosts);

  console.log(posts);

  return (
    <MainLayout allCategories={allCategories} allTags={allTags}>
      <PostListPageMetadata postsQueryParams={postsQueryParams} />
      <PostList posts={posts} />
      <Pagination
        pagesNumber={pagesNumber}
        currentPage={postsQueryParams.page ?? 0}
        urlPrefix={urlPrefix}
      />
    </MainLayout>
  );
}
