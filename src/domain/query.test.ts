import { CategoryEntity, PostEntity, TagEntity } from "./post";
import { filterPosts, findPostBySlug } from "./query";

describe("filter posts", () => {
  test("filter by tags 1", () => {
    const posts: PostEntity[] = [
      {
        content: "",
        data: {
          title: "",
          slug: "",
          category: "" as CategoryEntity,
          tags: ["Tag 1"] as TagEntity[],
          publicationAt: new Date(),
          abstract: "",
        },
        orig: "",
        language: "",
        matter: "",
        stringify: () => "",
      },
      {
        content: "",
        data: {
          title: "",
          slug: "",
          category: "" as CategoryEntity,
          tags: ["Tag 2"] as TagEntity[],
          publicationAt: new Date(),
          abstract: "",
        },
        orig: "",
        language: "",
        matter: "",
        stringify: () => "",
      },
    ];

    const filteredPosts = filterPosts(posts, {
      tags: ["Tag 1" as TagEntity],
    });

    expect(filteredPosts).toEqual([posts[0]]);
  });

  test("filter by tags 2", () => {
    const posts: PostEntity[] = [
      {
        content: "",
        data: {
          title: "",
          slug: "",
          category: "" as CategoryEntity,
          tags: ["Tag 1"] as TagEntity[],
          publicationAt: new Date(),
          abstract: "",
        },
        orig: "",
        language: "",
        matter: "",
        stringify: () => "",
      },
      {
        content: "",
        data: {
          title: "",
          slug: "",
          category: "" as CategoryEntity,
          tags: ["Tag 2"] as TagEntity[],
          publicationAt: new Date(),
          abstract: "",
        },
        orig: "",
        language: "",
        matter: "",
        stringify: () => "",
      },
    ];

    const filteredPosts = filterPosts(posts, {
      tags: ["Tag 2" as TagEntity],
    });

    expect(filteredPosts).toEqual([posts[1]]);
  });

  test("bugfix - post needs to have all filtered tags, but can have more!", () => {
    const posts: PostEntity[] = [
      {
        content: "",
        data: {
          title: "",
          slug: "",
          category: "" as CategoryEntity,
          tags: ["Tag 1", "Tag 2"] as TagEntity[],
          publicationAt: new Date(),
          abstract: "",
        },
        orig: "",
        language: "",
        matter: "",
        stringify: () => "",
      },
      {
        content: "",
        data: {
          title: "",
          slug: "",
          category: "" as CategoryEntity,
          tags: ["Tag 2"] as TagEntity[],
          publicationAt: new Date(),
          abstract: "",
        },
        orig: "",
        language: "",
        matter: "",
        stringify: () => "",
      },
    ];

    const filteredPosts = filterPosts(posts, {
      tags: ["Tag 1" as TagEntity],
    });

    expect(filteredPosts).toEqual([posts[0]]);
  });

  test("bugfix - tags should be case insensitive", () => {
    const posts: PostEntity[] = [
      {
        content: "",
        data: {
          title: "",
          slug: "",
          category: "" as CategoryEntity,
          tags: ["Tag 1", "tag 2"] as TagEntity[],
          publicationAt: new Date(),
          abstract: "",
        },
        orig: "",
        language: "",
        matter: "",
        stringify: () => "",
      },
      {
        content: "",
        data: {
          title: "",
          slug: "",
          category: "" as CategoryEntity,
          tags: ["tag 2"] as TagEntity[],
          publicationAt: new Date(),
          abstract: "",
        },
        orig: "",
        language: "",
        matter: "",
        stringify: () => "",
      },
    ];

    const filteredPosts = filterPosts(posts, {
      tags: ["Tag 2" as TagEntity],
    });

    expect(filteredPosts).toEqual([posts[0], posts[1]]);
  });

  test("bugfix - categories should be case insensitive", () => {
    const posts: PostEntity[] = [
      {
        content: "",
        data: {
          title: "",
          slug: "",
          category: "Category 1" as CategoryEntity,
          tags: ["Tag 1", "tag 2"] as TagEntity[],
          publicationAt: new Date(),
          abstract: "",
        },
        orig: "",
        language: "",
        matter: "",
        stringify: () => "",
      },
      {
        content: "",
        data: {
          title: "",
          slug: "",
          category: "category 1" as CategoryEntity,
          tags: ["tag 2"] as TagEntity[],
          publicationAt: new Date(),
          abstract: "",
        },
        orig: "",
        language: "",
        matter: "",
        stringify: () => "",
      },
    ];

    const filteredPosts = filterPosts(posts, {
      category: 'Category 1' as CategoryEntity
    });

    expect(filteredPosts).toEqual([posts[0], posts[1]]);
  });
});

describe("find post by slug", () => {
  test("happy path", () => {
    const posts: PostEntity[] = [
      {
        content: "",
        data: {
          title: "",
          slug: "test",
          category: "" as CategoryEntity,
          tags: ["Tag 1", "Tag 2"] as TagEntity[],
          publicationAt: new Date(),
          abstract: "",
        },
        orig: "",
        language: "",
        matter: "",
        stringify: () => "",
      },
      {
        content: "",
        data: {
          title: "",
          slug: "test2",
          category: "" as CategoryEntity,
          tags: ["Tag 2"] as TagEntity[],
          publicationAt: new Date(),
          abstract: "",
        },
        orig: "",
        language: "",
        matter: "",
        stringify: () => "",
      },
    ];

    const post = findPostBySlug(posts, "test2");

    expect(post).toEqual(posts[1]);
  });

  test("none found", () => {
    const posts: PostEntity[] = [
      {
        content: "",
        data: {
          title: "",
          slug: "test",
          category: "" as CategoryEntity,
          tags: ["Tag 1", "Tag 2"] as TagEntity[],
          publicationAt: new Date(),
          abstract: "",
        },
        orig: "",
        language: "",
        matter: "",
        stringify: () => "",
      },
      {
        content: "",
        data: {
          title: "",
          slug: "test2",
          category: "" as CategoryEntity,
          tags: ["Tag 2"] as TagEntity[],
          publicationAt: new Date(),
          abstract: "",
        },
        orig: "",
        language: "",
        matter: "",
        stringify: () => "",
      },
    ];

    const post = findPostBySlug(posts, "test3");

    expect(post).toEqual(null);
  });
});
