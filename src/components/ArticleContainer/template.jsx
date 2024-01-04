import React from "react";

export const ArticlesBlockTemplate = {
  name: "ArticlesContainer",
  label: "ArticlesContainer",
  fields: [
    {
      name: "items",
      label: "ArticlesContainer",
      type: "object",
      list: true,
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string",
        },
        {
          name: "description",
          label: "Description",
          type: "rich-text",
        },
        {
          name: "link",
          label: "Link",
          type: "string",
        },
      ],
    },
  ],
};
