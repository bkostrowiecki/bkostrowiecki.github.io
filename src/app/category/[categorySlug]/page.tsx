import { extractCategoriesFromPosts, queryAllPosts } from "@/domain/query";
import { GenericRouteParams } from "../../templates/parse-params";
import PostsListPage from "../../templates/posts-list.-page";
import { slugify } from "@/domain/slug";

export async function generateStaticParams() {
  const allPosts = await queryAllPosts();
  const categories = await extractCategoriesFromPosts(allPosts);

  const staticParams = categories
    .map((category) => {
      return {
        categorySlug: slugify(category),
      };
    })
    .flat();

  return staticParams;
}

export default async function CategoryPage({
  params,
}: {
  params: GenericRouteParams;
}) {
  return (
    <PostsListPage
      params={params}
      urlPrefix={"/category/" + params.categorySlug}
    />
  );
}
