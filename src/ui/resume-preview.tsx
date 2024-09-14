import { dayjs } from "@/configuration/dayjs";
import { websiteDateFormat } from "@/configuration/site";
import { ResumeRoot } from "@/domain/resume";
import { KeywordTag } from "./keyword-tag";
import React, { Fragment } from "react";

type Props = {
  resumeData: ResumeRoot;
};

export function ResumePreview({ resumeData }: Props) {
  return (
    <div className="prose prose-invert text-sm relative max-w-full">
      <h1 className="mb-0">Resume</h1>
      <h5>{resumeData.basics.label}</h5>
      <section>
        <h2>Work</h2>
        {resumeData.work.map((workItem) => {
          return (
            <article className="relative" key={workItem.company + workItem.position}>
              <h3>{workItem.company}</h3>
              <h4>{workItem.position}</h4>
              <div>
                {dayjs(workItem.startDate).format(websiteDateFormat)} -{" "}
                {dayjs(workItem.endDate).format(websiteDateFormat)}
              </div>
              <ul>
                {workItem.highlights.map((highlightItem) => {
                  return <li key={highlightItem}>{highlightItem}</li>;
                })}
              </ul>
              <div>
                {workItem.keywords.map((keywordItem) => {
                  return (
                      <KeywordTag key={keywordItem}>{keywordItem}</KeywordTag>
                  );
                })}
              </div>
            </article>
          );
        })}
      </section>
      <section>
        <h2>Skills</h2>
        <div>
          {resumeData.skills.map((skillsItem) => {
            return (
              <Fragment key={skillsItem.name}>
                <h3>{skillsItem.name}</h3>
                {skillsItem.keywords.map((keywordItem) => {
                  return (
                      <KeywordTag key={keywordItem}>{keywordItem}</KeywordTag>
                  );
                })}
              </Fragment>
            );
          })}
        </div>
      </section>
      <section>
        <h2>Education</h2>
        {resumeData.education.map((eduItem) => {
          return (
            <article key={eduItem.area + eduItem.institution + eduItem.studyType}>
              <h3>{eduItem.area}</h3>
              <div>{eduItem.studyType}</div>
              <div>{eduItem.institution}</div>
            </article>
          );
        })}
      </section>
      <section>
        <h2>References</h2>
        {resumeData.references.map((referenceItem) => {
          return (
            <figure key={referenceItem.name}>
              <blockquote>{referenceItem.reference}</blockquote>
              <figcaption>- {referenceItem.name}</figcaption>
            </figure>
          );
        })}
      </section>
    </div>
  );
}
