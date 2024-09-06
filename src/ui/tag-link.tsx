import { TagEntity } from "@/domain/post";
import { slugify } from "@/domain/slug";
import Link from "next/link";

type Props = {
  tag: TagEntity;
};

export function TagLink({ tag }: Props) {
  return (
    <Link
      className="px-3 py-1.5 bg-blue-700 rounded-lg inline-block text-xs border-2 border-solid border-transparent shadow-blue-900 shadow-lg hover:border-blue-300 hover:border-2 transition-all"
      href={"/tag/" + slugify(tag)}
    >
      {tag}
    </Link>
  );
}
