import { PostEntity } from "@/domain/post";
import { PostListItem } from "./post-list-item";

type Props = {
  posts: PostEntity[];
};

export function PostList({ posts }: Props) {
  return posts.map((post) => {
    return <PostListItem key={post.data.slug} post={post} />;
  });
}
