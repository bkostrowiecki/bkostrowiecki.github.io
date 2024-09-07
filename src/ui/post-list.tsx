import { PostEntity } from "@/domain/post";
import { PostListItem } from "./post-list-item";

type Props = {
  posts: PostEntity[];
};

export function PostList({ posts }: Props) {
  return (
    <div className="flex flex-col gap-7 md:pt-6 lg:pt-0">
      {posts.map((post) => {
        return <PostListItem key={post.data.slug} post={post} />;
      })}
    </div>
  );
}
