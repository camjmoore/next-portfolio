const rudiment = {
  name: "rudiment",
  title: "Rudiments",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{type: "string"}],
      options: { layout: "tags" },
    }
  ],
};

export default rudiment;
