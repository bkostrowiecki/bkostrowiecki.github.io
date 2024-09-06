import { extractTagsFromPosts, queryAllPosts } from "@/domain/query";
import { GenericRouteParams } from "../../templates/parse-params";
import PostsListPage from "../../templates/posts-list.-page";
import { slugify } from "@/domain/slug";
import { generateMetadataForPostList } from "@/app/templates/metadata";

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

export async function generateMetadata({
  params,
}: {
  params: GenericRouteParams;
}) {
  const metadata = generateMetadataForPostList(params);

  return metadata;
}

export default async function CategoryPage({
  params,
}: {
  params: GenericRouteParams;
}) {
  return (
    <PostsListPage
      params={{
        ...params,
        page: "1",
      }}
      urlPrefix={"/tag/" + params.tagSlug}
    />
  );
}