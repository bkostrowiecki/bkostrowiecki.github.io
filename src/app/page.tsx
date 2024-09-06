import { Metadata } from "next";
import { GenericRouteParams } from "./templates/parse-params";
import PostsListPage from "./templates/posts-list.-page";
import { websiteDescription, websiteTitle } from "@/configuration/site";

export const metadata: Metadata = {
  title: websiteTitle,
  description: websiteDescription
};

export default async function HomePage({
  params,
}: {
  params: GenericRouteParams;
}) {
  return <PostsListPage params={params} urlPrefix={"/posts"} />;
}
