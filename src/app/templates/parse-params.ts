import { postsPerPageLimit } from "@/configuration/site";
import { PostsQueryParams } from "@/domain/query";
import { unslugify } from "@/domain/slug";

export type GenericRouteParams = {
  tagSlug?: string;
  categorySlug?: string;
  page: string;
};

export function parseRouteParams(params: GenericRouteParams): PostsQueryParams {
  return {
    page: params.page ? parseInt(params.page, 10) - 1 : 0,
    limit: postsPerPageLimit,
    category: params.categorySlug ? unslugify(params.categorySlug) : undefined,
    tags: params.tagSlug ? [unslugify(params.tagSlug)] : undefined,
  };
}
