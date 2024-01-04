import React from "react";
import { Features } from "../Features";
import { Hero } from "../Hero";
import { Articles as ArticlesContainer} from '../ArticleContainer'

export const Blocks = ({ blocks }) => {
  return (
    <>
      {blocks
        ? blocks.map(function (block, i) {
            switch (block._template) {
              case "hero":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block._template}>
                    <Hero data={block} index={i} />
                  </div>
                );
              case "features":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block._template}>
                    <Features data={block} index={i} />
                  </div>
                );
              case "ArticlesContainer":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block._template}>
                    <ArticlesContainer data={block} index={i} />
                  </div>
                );
              default:
                return null;
            }
          })
        : null}
    </>
  );
};
