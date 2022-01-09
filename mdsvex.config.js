const config = {
  layout: {
    blog: './src/lib/components/BlogLayout.svelte'
  },

  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [
    require('remark-abbr')
  ],
  rehypePlugins: [
    require('rehype-slug'),
    [
      require('rehype-autolink-headings'),
      {
        behavior: 'wrap'
      }
    ]
  ]
};

export default config;
