import { PropsWithChildren } from "react";
import Image from "next/image";
import { TagLink } from "./tag-link";
import { CategoryLink } from "./category-link";
import { CategoryEntity, TagEntity } from "@/domain/post";
import Link from "next/link";

type Props = PropsWithChildren & {
  allTags: TagEntity[];
  allCategories: CategoryEntity[];
};

export function MainLayout({ allTags, allCategories, children }: Props) {
  return (
    <div className="bg-gray-800 w-full min-h-svh text-gray-50 flex flex-row ">
      <header className="bg-gray-900 min-h-full w-2/12 justify-center flex items-center flex-col shadow-lg text-center">
        <Link
          className="border-4 rounded-full center border-white "
          style={{ width: 120, height: 120 }}
          href={"/"}
        >
          <Image
            priority
            src="/avatar.jpeg"
            alt={"Avatar"}
            width="120"
            height="120"
            className="rounded-full border-4 border-black"
          />
        </Link>
        <h1 className="text-center pt-4 text-xl text-white">
          Bartosz Kostrowiecki
        </h1>
        <h2 className="text-center text-lg text-gray-200">
          <Link href="/">Homepage</Link>
        </h2>

        <div className="text-center flex justify-center items-center gap-2">
          <Link href="https://github.com/bkostrowiecki">
            <i className="bi bi-github text-2xl" />
          </Link>
          <Link href="https://www.youtube.com/@bkej420" className="mt-1">
            <i className="bi bi-youtube text-3xl" />
          </Link>
          <Link href="https://www.linkedin.com/in/bartosz-kostrowiecki/">
            <i className="bi bi-linkedin text-2xl" />
          </Link>
          <Link href="https://lichess.org/@/bkej">
            <i className="nai nai-lichess text-2xl mt-0.5" />
          </Link>
        </div>

        <nav>
          <div className="py-5">
            <h3>Categories</h3>
            {allCategories.map((category) => (
              <CategoryLink category={category} key={category} />
            ))}
          </div>
          <div className="py-5">
            <h3>Tags</h3>
            {allTags.map((tag) => (
              <TagLink tag={tag} key={tag} />
            ))}
          </div>
        </nav>
      </header>
      <div className="min-h-full flex-1">
        <div className="container mx-auto px-5 py-10">{children}</div>
      </div>
    </div>
  );
}
