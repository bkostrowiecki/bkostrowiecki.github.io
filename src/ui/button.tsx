import classNames from "classnames";
import Link from "next/link";
import { PropsWithChildren } from "react";

export function Button({
  children,
  href,
  className,
}: PropsWithChildren & {
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={classNames(
        "px-3 py-1.5 rounded-xl bg-transparent border-2 border-solid border-gray-400 hover:border-blue-400 hover:text-blue-100 transition-all shadow-lg",
        className
      )}
    >
      {children}
    </Link>
  );
}
