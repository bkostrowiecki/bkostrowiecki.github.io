import { PropsWithChildren } from "react";
import { CategoryEntity, TagEntity } from "@/domain/post";
import { MainNavigation } from "./main-navigation";

type Props = PropsWithChildren & {
  allTags: TagEntity[];
  allCategories: CategoryEntity[];
};

export function MainLayout({ allTags, allCategories, children }: Props) {
  return (
    <div className="bg-gray-800 w-full min-h-svh text-gray-50 flex flex-row">
      <MainNavigation allCategories={allCategories} allTags={allTags} />
      <div className="min-h-full flex-1">
        <div className="container mx-auto px-5 py-10">{children}</div>
      </div>
    </div>
  );
}
