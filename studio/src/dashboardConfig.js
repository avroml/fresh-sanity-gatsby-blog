export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "609246a45f2e579613a55435",
                  title: "Sanity Studio",
                  name: "fresh-sanity-gatsby-blog-studio",
                  apiId: "5d98dae1-78c6-480a-ad36-3f53b873bf5b",
                },
                {
                  buildHookId: "609246a436eb4f909ef542ab",
                  title: "Blog Website",
                  name: "fresh-sanity-gatsby-blog",
                  apiId: "248c866e-1ee1-4960-a0da-ef762ff53af5",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/avroml/fresh-sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://fresh-sanity-gatsby-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
