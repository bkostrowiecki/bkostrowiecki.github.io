import { websiteTitle } from "@/configuration/site";
import { extractCategoriesFromPosts, extractTagsFromPosts, queryAllPosts } from "@/domain/query";
import { queryResumeData } from "@/domain/resume";
import { MainLayout } from "@/ui/main-layout";
import { ResumePreview } from "@/ui/resume-preview";

export async function generateMetadata() {
  return {
    title: websiteTitle + ' >> Resume',
    description: 'Resume'
  }
}

export default async function ResumePage() {
  const allPosts = await queryAllPosts();
  const allCategories = await extractCategoriesFromPosts(allPosts);
  const allTags = await extractTagsFromPosts(allPosts);

  const resumeData = await queryResumeData();

  return (
    <MainLayout allCategories={allCategories} allTags={allTags}>
      <ResumePreview resumeData={resumeData} />
    </MainLayout>
  );
}
