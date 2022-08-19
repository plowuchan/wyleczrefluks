import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Wylecz refluks żołądkowo-przełykowy" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <AboutSection sectionId="about" heading="Autorski program leczenia refluksu" />
        {/* <InterestsSection sectionId="details" heading="Details" /> */}
        <ProjectsSection sectionId="features" heading="Dostępne pakiety" />
        <ContactSection sectionId="github" heading="Pytania?" />
      </Page>
    </>
  );
}
