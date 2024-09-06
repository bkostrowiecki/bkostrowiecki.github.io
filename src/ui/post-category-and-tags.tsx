import { PostEntity } from "@/domain/post"
import { CategoryLink } from "./category-link"
import { TagLink } from "./tag-link"

type Props = {
  post: PostEntity
}

export function PostCategoryAndTags({
  post
}: Props) {
  return <div className="flex flex-wrap gap-2">
    <CategoryLink category={post.data.category} />
    {post.data.tags.map((tag) => <TagLink key={tag} tag={tag} />)}
  </div>
}