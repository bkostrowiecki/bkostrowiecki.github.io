import { calculatePages, filterPosts, queryAllPosts } from "@/domain/query";
import { GenericRouteParams } from "../../templates/parse-params";
import PostsListPage from "../../templates/posts-list.-page";

export async function generateStaticParams() {
  const allPosts = await queryAllPosts();
  const sortedPosts = filterPosts(allPosts);

  const pagesNumber = calculatePages(sortedPosts);

  return [...Array.from(Array(pagesNumber), (_, index) => index)].map(
    (page) => {
      return {
        page: (page + 1).toString(),
      };
    }
  );
}

export default async function PostsPage({
  params,
}: {
  params: GenericRouteParams;
}) {
  return <PostsListPage params={params} urlPrefix="/posts" />;
}
