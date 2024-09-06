import { websiteDescription, websiteTitle } from "@/configuration/site";
import { PostsQueryParams } from "@/domain/query";
import Head from "next/head";

type Props = {
  postsQueryParams: PostsQueryParams;
};

export function PostListPageMetadata({ postsQueryParams }: Props) {
  let title = `${websiteTitle}`;
  let description = `${websiteDescription}`;

  if (postsQueryParams.category) {
    title += ` - ${postsQueryParams.category}`;
    description += "\n" + `Posts in category ${postsQueryParams.category}`;
  }

  if (postsQueryParams.tags) {
    title += ` - ` + postsQueryParams.tags.join(", ");
    description += "\n" + `Posts with tags ${postsQueryParams.tags.join(", ")}`;
  }

  if (postsQueryParams.page) {
    title += ` - ` + postsQueryParams.page + 1;
    description += "\n" + `Page ` + postsQueryParams.page + 1;
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
    </>
  );
}
