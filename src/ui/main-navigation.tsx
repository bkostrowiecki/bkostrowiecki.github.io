'use client';

import { PropsWithChildren, useState } from "react";
import Image from "next/image";
import { TagLink } from "./tag-link";
import { CategoryLink } from "./category-link";
import { CategoryEntity, TagEntity } from "@/domain/post";
import Link from "next/link";
import classNames from "classnames";

type Props = PropsWithChildren & {
  allTags: TagEntity[];
  allCategories: CategoryEntity[];
};

export function MainNavigation({ allTags, allCategories }: Props) {
  const socialHoverClassNames = `hover:text-blue-300 transition-all`;

  const [isExpanded, setIsExpanded] = useState(false);

  const onHamburgerClick = () => {
      setIsExpanded(!isExpanded);
  }

  return (
    <>
      <div className="lg:hidden fixed right-2 md:right-5 bottom-16 sm:bottom-16 md:bottom-auto top-auto md:top-2">
        <button
          className="navbar-burger border-2 border-solid border-gray-400 hover:border-gray-100 hover:text-white rounded-xl flex items-center text-gray-200 p-3"
          onClick={onHamburgerClick}
        >
          <svg
            className="block h-5 w-5 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <header
        className={classNames(
          "bg-gray-900 p-5 min-h-full lg:w-3/12 xl:w-2/12 justify-center flex transition-all items-center flex-col text-center shadow-2xl fixed sm:fixed md:fixed lg:relative",
          {
            "-left-full sm:-left-full md:-left-full lg:left-0": !isExpanded,
            "w-10/12 sm:w-10/12 md:w-10/12 lg:w-auto left-0": isExpanded,
          }
        )}
      >
        <button onClick={onHamburgerClick} className="lg:hidden">
          <i className="bi bi-x text-3xl right-2 top-2 absolute text-gray-400"></i>
        </button>
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
          <Link
            href="https://bkostrowiecki.itch.io"
            target="_blank"
            title="Github account"
            className={socialHoverClassNames}
          >
            <i className="bi bi-github text-2xl mt-0.5" />
          </Link>
          <Link
            href="https://itch.io/@/bkostrowiecki"
            target="_blank"
            title="Itch.io account"
            className={socialHoverClassNames}
          >
            <i className="fab fa-itch-io text-2xl" />
          </Link>
          <Link
            href="https://www.youtube.com/@bkej420"
            target="_blank"
            className={classNames("mt-1", socialHoverClassNames)}
            title="YouTube account"
          >
            <i className="bi bi-youtube text-3xl" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/bartosz-kostrowiecki/"
            title="LinkedIn account"
            className={socialHoverClassNames}
          >
            <i className="bi bi-linkedin text-2xl" />
          </Link>
          <Link
            href="https://lichess.org/@/bkej"
            target="_blank"
            title="Lichess account"
            className={socialHoverClassNames}
          >
            <i className="nai nai-lichess text-2xl mt-0.5" />
          </Link>
        </div>

        <nav>
          <div className="py-5">
            <h3 className="text-gray-300 text-sm mb-1">Categories</h3>
            <div className="flex gap-2 justify-center">
              {allCategories.map((category) => (
                <CategoryLink category={category} key={category} />
              ))}
            </div>
          </div>
          <div className="pt-1">
            <h3 className="text-gray-300 text-sm mb-1">Tags</h3>
            <div className="flex gap-2 justify-center">
              {allTags.map((tag) => (
                <TagLink tag={tag} key={tag} />
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
