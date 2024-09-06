import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeFigure from 'rehype-figure';
import remarkGfm from "remark-gfm";
import remarkCodeBlocks from 'remark-code-blocks';

export function MarkdownPresenter(props: any) {
  return (
    <Markdown
      className="prose prose-invert w-full max-w-full"
      rehypePlugins={[rehypeFigure, rehypeAutolinkHeadings]}
      remarkPlugins={[remarkGfm, remarkCodeBlocks]}
      components={{
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");

          return match ? (
            <SyntaxHighlighter
              ref={rest.ref as any}
              {...rest}
              PreTag="div"
              children={String(children).replace(/\n$/, "")}
              language={match[1]}
              style={okaidia}
            />
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}
    >
      {props.children}
    </Markdown>
  );
}
