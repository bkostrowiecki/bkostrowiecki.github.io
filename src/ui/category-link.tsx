import { CategoryEntity } from "@/domain/post";
import { slugify } from "@/domain/slug";
import Link from "next/link";

type Props = {
  category: CategoryEntity;
};

export function CategoryLink({ category }: Props) {
  return (
    <Link
      className="px-3 py-1.5 bg-blue-500 rounded-lg inline-block text-xs"
      href={"/category/" + slugify(category)}
    >
      {category}
    </Link>
  );
}
