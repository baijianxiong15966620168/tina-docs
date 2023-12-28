import React from "react";

export const ArticlesBlockTemplate = {
  name: "articles",
  label: "Articles",
  fields: [
    {
      name: "items",
      label: "Articles",
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
