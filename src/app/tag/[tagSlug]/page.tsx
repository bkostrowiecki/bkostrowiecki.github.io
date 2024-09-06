import { extractTagsFromPosts, queryAllPosts } from "@/domain/query";
import { GenericRouteParams } from "../../templates/parse-params";
import PostsListPage from "../../templates/posts-list.-page";
import { slugify } from "@/domain/slug";

export async function generateStaticParams() {
  const allPosts = await queryAllPosts();
  const tags = await extractTagsFromPosts(allPosts);

  const staticParams = tags.map((tag) => {
    return {
      tagSlug: slugify(tag),
    };
  });

  return staticParams;
}

export default async function CategoryPage({
  params,
}: {
  params: GenericRouteParams;
}) {
  return <PostsListPage params={{
    ...params,
    page: "1",
  }} urlPrefix={"/tag/" + params.tagSlug} />;
}
