import {
  calculatePages,
  extractTagsFromPosts,
  filterPosts,
  queryAllPosts,
} from "@/domain/query";
import { GenericRouteParams } from "../../../templates/parse-params";
import PostsListPage from "../../../templates/posts-list.-page";
import { slugify } from "@/domain/slug";
import { generateMetadataForPostList } from "@/app/templates/metadata";

export async function generateStaticParams() {
  const allPosts = await queryAllPosts();
  const tags = await extractTagsFromPosts(allPosts);

  const tagMetadata = tags.map((tag) => {
    const posts = filterPosts(allPosts, {
      tags: [tag],
    });

    return {
      tag,
      postsNumber: posts.length,
      pagesNumber: calculatePages(posts),
    };
  });

  const staticParams = tagMetadata
    .map((tagMetadata) => {
      return [
        ...Array.from(Array(tagMetadata.pagesNumber), (_, index) => index),
      ].map((item) => {
        return {
          tagSlug: slugify(tagMetadata.tag),
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

export default async function TagPage({
  params,
}: {
  params: GenericRouteParams;
}) {
  return <PostsListPage params={params} urlPrefix={"/tag/" + params.tagSlug} />;
}
