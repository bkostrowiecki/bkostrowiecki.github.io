import { dayjs } from "@/configuration/dayjs";
import { websiteDateFormat, websiteTitle } from "@/configuration/site";
import {
  extractCategoriesFromPosts,
  extractTagsFromPosts,
  queryAllPosts,
  findPostBySlug,
} from "@/domain/query";
import { MainLayout } from "@/ui/main-layout";
import { MarkdownPresenter } from "@/ui/markdown/markdown-presenter";
import { PostCategoryAndTags } from "@/ui/post-category-and-tags";
import { renderToHTML, renderToHTMLImpl } from "next/dist/server/render";

export async function generateStaticParams() {
  const allPosts = await queryAllPosts();

  console.log('all posts');

  return allPosts.map((post) => {
    return {
      postSlug: post.data.slug,
    };
  });
}

export async function generateMetadata({
  params,
}: {
  params: {
    postSlug: string;
  };
}) {
  const allPosts = await queryAllPosts();
  const post = findPostBySlug(allPosts, params.postSlug);

  if (!post) {
    throw new Error("Cannot find post with slug " + params.postSlug);
  }

  return {
    title: `${websiteTitle} >> ${post.data.title}`,
    description: post.data.abstract,
  };
}

export default async function PostPage({
  params,
}: {
  params: { postSlug: string };
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
          {/* eslint-disable-next-line react/no-children-prop */}
          <MarkdownPresenter content={post.content} />
        </main>
      </article>
    </MainLayout>
  );
}
