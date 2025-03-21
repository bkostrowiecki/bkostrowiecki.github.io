'use client';

import Markdown, { ExtraProps } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeFigure from 'rehype-figure';
import remarkGfm from "remark-gfm";
import remarkCodeBlocks from 'remark-code-blocks'
import { ClassAttributes, HTMLAttributes, ImgHTMLAttributes } from "react";

export function MarkdownPresenter(props: { content: string }) {

  return (<>
    <Markdown
      className="prose prose-invert w-full max-w-full"
      rehypePlugins={[rehypeFigure, rehypeAutolinkHeadings]}
      remarkPlugins={[remarkGfm, remarkCodeBlocks]}
      components={{
        code(props: ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");

          return match ? (
            <SyntaxHighlighter
              ref={rest.ref as any}
              {...rest}
              PreTag="div"
              // eslint-disable-next-line react/no-children-prop
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
        img: ({ src, alt, ...rest }: ClassAttributes<HTMLImageElement> & ImgHTMLAttributes<HTMLImageElement> & ExtraProps) => {
          return <a href={src} data-src={src} target="_blank">
            <img
              src={src}
              alt={alt}
              style={{ cursor: 'pointer', maxWidth: '100%', margin: '10px 0' }}
            />
          </a>
        },
      }}
    >
      {props.content}
    </Markdown>
  </>
  );
}
