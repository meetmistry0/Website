import { parse } from 'path';

import type { RequestHandler } from '@sveltejs/kit';

interface Post {
    created: string;
    title: string;
    slug: string;
    read_time: string;
}

function dateSort(a: Post, b: Post) {
    return new Date(b.created).getTime() - new Date(a.created).getTime();
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
