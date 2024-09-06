import { TagEntity } from "@/domain/post";
import { slugify } from "@/domain/slug";
import Link from "next/link";

type Props = {
  tag: TagEntity;
};

export function TagLink({ tag }: Props) {
  return (
    <Link
      className="px-3 py-1.5 bg-blue-700 rounded-lg inline-block text-sm"
      href={"/tag/" + slugify(tag)}
    >
      {tag}
    </Link>
  );
}
