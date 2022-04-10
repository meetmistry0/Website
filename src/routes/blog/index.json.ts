import type { RequestHandler } from '@sveltejs/kit';

interface Post {
  date: Date;
  title: string;
  slug: string;
  read_time: number;
  description: string;
}

function dateSort(a: Post, b: Post): number {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export const get: RequestHandler = async () => {
  const modules = import.meta.glob('./**/*.md');
  const posts = [];

  await Promise.all(
    Object.entries(modules).map(async ([_, module]) => {
      const { metadata } = await module();
      posts.push(metadata)
    })
  );

  // Newest first
  posts.sort(dateSort);

  return {
    body: {
      posts: posts
    }
  };
};
