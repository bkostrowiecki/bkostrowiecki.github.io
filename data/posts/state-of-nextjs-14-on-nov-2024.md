---
title: State of NextJS 14 on Oct 2024
slug: state-of-nextjs-14-on-oct-2024
publicationAt: 2024-10-03
tags: NextJS,Web,React
category: Notes
abstract: The current state of NextJS 14 from my projects perspective.
---

There is no way to efficentely use NextJS with Prisma.

* middleware runs only on Edge runtime, so Prisma cannot function properly in there. Even if you work locally there's an error regarding runtime environment
* you can't use Prisma in route handlers because of the same (or similar) reason like above

Middleware by themself are unusable:

* There is no way to inject values from middleware to pages
* ...because you cannot access request or response object in Page Component

Static rendering is unsuable because:

* There is no way to generate static content in multiple languages with properly translated routes

It feels like I'm motivated to try [Waku](https://waku.gg/) as a replacement of NextJS.

Some people state that NextJS implemented the old PHP paradigm. I find this statement false. NextJS is neiter there nor it's anybetter than PHP.
