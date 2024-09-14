import { PropsWithChildren } from "react";

export function KeywordTag({ children }: PropsWithChildren) {
  return (
    <span className="px-3 py-1.5 mr-3 mb-3 bg-green-700 rounded-sm inline-block text-xs transition-all print:bg-gray-500 print:text-white">
      {children}
    </span>
  );
}
