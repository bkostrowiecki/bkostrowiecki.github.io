import {
  calculatePages,
  extractCategoriesFromPosts,
  filterPosts,
  queryAllPosts,
} from "@/domain/query";
import { GenericRouteParams } from "../../../templates/parse-params";
import PostsListPage from "../../../templates/posts-list.-page";
import { slugifyForStaticParams } from "@/domain/slug";
import { generateMetadataForPostList } from "@/app/templates/metadata";

export async function generateStaticParams() {
  const allPosts = await queryAllPosts();
  const categories = await extractCategoriesFromPosts(allPosts);

  const categoryMetadata = categories.map((category) => {
    const posts = filterPosts(allPosts, {
      category,
    });

    return {
      category,
      postsNumber: posts.length,
      pagesNumber: calculatePages(posts),
    };
  });

  const staticParams = categoryMetadata
    .map((categoryMetadata) => {
      return [
        ...Array.from(Array(categoryMetadata.pagesNumber), (_, index) => index),
      ].map((item) => {
        return {
          categorySlug: slugifyForStaticParams(categoryMetadata.category),
          page: (item + 1).toString(),
        };
      });
    })
    .flat();

  return staticParams;
}

export async function generateMetadata({
  params,
}: {
  params: GenericRouteParams;
}) {
  return generateMetadataForPostList(params);
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
