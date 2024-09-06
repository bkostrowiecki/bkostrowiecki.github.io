import { dayjs } from "@/configuration/dayjs";
import { PostEntity } from "@/domain/post";
import Link from "next/link";
import { PostCategoryAndTags } from "./post-category-and-tags";

type Props = {
  post: PostEntity;
};

export function PostListItem({ post }: Props) {
  return (
    <article>
      <h2>
        <Link href={`/${post.data.slug}`}>{post.data.title}</Link>
      </h2>
      <div>
        <span>{dayjs(post.data.publicationAt).format("DD.MM.YYYY")}</span>
        <PostCategoryAndTags post={post} />
      </div>
      <div>{post.data.tags}</div>
      <div>{post.data.abstract}</div>
    </article>
  );
}
