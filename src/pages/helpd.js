import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import "@docsearch/css";
import { Articles as ArticlesContainer } from "../components/ArticleContainer";
import HelpCenterHeader from "../components/helpCenterHeader";

const pageData = require("../../config/homepage/helpCenter.json");

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={pageData && pageData.title ? pageData.title : siteConfig.title}
      description={
        pageData && pageData.description
          ? pageData.description
          : siteConfig.tagline
      }
    >
      {pageData && pageData.helpCenterHeader ? (
        <HelpCenterHeader {...pageData.helpCenterHeader} />
      ) : null}
      {pageData && pageData.helpCenterArticle ? (
        <ArticlesContainer data={pageData.helpCenterArticle} />
      ) : null}
    </Layout>
  );
}
