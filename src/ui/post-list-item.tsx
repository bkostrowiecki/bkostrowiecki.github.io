import { dayjs } from "@/configuration/dayjs";
import { PostEntity } from "@/domain/post";
import Link from "next/link";
import { PostCategoryAndTags } from "./post-category-and-tags";
import { websiteDateFormat } from "@/configuration/site";

type Props = {
  post: PostEntity;
};

export function PostListItem({ post }: Props) {
  return (
    <article className="shadow-2xl bg-gray-900 rounded-2xl px-6 py-5 flex flex-col">
      <header>
        <h2 className="text-4xl text-gray-100 font-bold">
          <Link href={`/${post.data.slug}`}>{post.data.title}</Link>
        </h2>
        <div>
          <span className="text-gray-400 text-sm">
            Published on{" "}
            {dayjs(post.data.publicationAt).format(websiteDateFormat)}
          </span>
          <PostCategoryAndTags post={post} />
        </div>
      </header>
      <main className="pt-4">{post.data.abstract}</main>
    </article>
  );
}
