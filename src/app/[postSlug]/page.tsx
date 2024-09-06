import { dayjs } from "@/configuration/dayjs";
import { websiteDateFormat } from "@/configuration/site";
import {
  extractCategoriesFromPosts,
  extractTagsFromPosts,
  queryAllPosts,
  findPostBySlug,
} from "@/domain/query";
import { MainLayout } from "@/ui/main-layout";
import { MarkdownPresenter } from "@/ui/markdown-presenter";
import { PostCategoryAndTags } from "@/ui/post-category-and-tags";
import { PostListPageMetadata } from "@/ui/post-list-page-metadata";

export async function generateStaticParams() {
  const allPosts = await queryAllPosts();

  return allPosts.map((post) => {
    return {
      postSlug: post.data.slug,
    };
  });
}

export default async function PostPage({
  params,
}: {
  params: { postSlug: string };
  urlPrefix: string;
}) {
  const allPosts = await queryAllPosts();
  const allCategories = await extractCategoriesFromPosts(allPosts);
  const allTags = await extractTagsFromPosts(allPosts);

  const post = await findPostBySlug(allPosts, params.postSlug);

  if (post == null) {
    throw new Error("404");
  }

  return (
    <MainLayout allCategories={allCategories} allTags={allTags}>
      <article>
        <header className="pb-5">
          <h1 className="text-4xl font-bold">{post.data.title}</h1>
          <div className="text-sm text-gray-400">
            Published on{" "}
            {dayjs(post.data.publicationAt).format(websiteDateFormat)}
          </div>
          <div className="py-1.5">
            <PostCategoryAndTags post={post} />
          </div>
        </header>
        <main>
          <MarkdownPresenter children={post.content} />
        </main>
      </article>
    </MainLayout>
  );
}
