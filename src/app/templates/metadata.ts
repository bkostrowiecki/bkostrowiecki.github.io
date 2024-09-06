import { websiteDescription, websiteTitle } from "@/configuration/site";
import { GenericRouteParams } from "./parse-params";
import { unslugify } from "@/domain/slug";
import { Metadata } from "next";

export function generateMetadataForPostList(params: GenericRouteParams): Metadata {
  let title = `${websiteTitle}`;
  let description = `${websiteDescription}`;

  if (params.categorySlug) {
    const visibleCategory = unslugify(params.categorySlug);

    title += ` >> ${visibleCategory}`;
    description += "\n" + `Posts in category ${visibleCategory}`;
  }

  if (params.tagSlug) {
    const visibleTags = unslugify(params.tagSlug);

    title += ` >> ` + visibleTags;
    description += "\n" + `Posts with tag ${visibleTags}`;
  }

  if (params.page) {
    const visiblePage = parseInt(params.page, 10) + 1;
    title += `, page ${visiblePage}`;
    description += "\n" + `Page ${visiblePage}`;
  }

  return {
    title,
    description
  };
}