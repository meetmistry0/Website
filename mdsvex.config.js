import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const config = {
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [],
  rehypePlugins: [
    rehypeSlug, // Adds IDs to headings (h1-h6)
    [
      rehypeAutolinkHeadings, // Make headings clickable for navigation
      {
        behavior: 'wrap'
      }
    ]
  ],
};

export default config;