import classNames from "classnames";
import Link from "next/link";
import { Button } from "./button";

type Props = {
  pagesNumber: number;
  currentPage: number;
  urlPrefix: string;
};

export function Pagination({ pagesNumber, currentPage, urlPrefix }: Props) {
  return (
    <div className="py-5">
      {Array.from(new Array(pagesNumber), (_, index) => index).map((item) => {
        return (
          <Button key={item}
            href={`${urlPrefix}/${item + 1}`}
            className={classNames("text-sm", {
              "font-bold": currentPage,
            })}
          >
            {item + 1}
          </Button>
        );
      })}
    </div>
  );
}
