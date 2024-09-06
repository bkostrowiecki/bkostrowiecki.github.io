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

  return (
    <MainLayout allCategories={allCategories} allTags={allTags}>
      <PostList posts={posts} />
      <Pagination
        pagesNumber={pagesNumber}
        currentPage={postsQueryParams.page ?? 0}
        urlPrefix={urlPrefix}
      />
    </MainLayout>
  );
}
