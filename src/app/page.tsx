import { GenericRouteParams } from "./templates/parse-params";
import PostsListPage from "./templates/posts-list.-page";

export default async function HomePage({
  params,
}: {
  params: GenericRouteParams;
}) {
  return <PostsListPage params={params} urlPrefix={"/posts"} />;
}
