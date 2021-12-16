---
title: "Template"
description: "Description..."
date: "2021-11-30"
published: true
---

Zzz..

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

```js
import { slugFromPath } from '$lib/util';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ query }) {
    const modules = import.meta.glob('./*.{md,svx,svelte.md}');

    const postPromises = [];
    const limit = Number(query.get('limit') ?? Infinity);

    if (Number.isNaN(limit)) {
        return {
            status: 400
        };
    }

    for (let [path, resolver] of Object.entries(modules)) {
        const slug = slugFromPath(path);
        const promise = resolver().then((post) => ({
            slug,
            ...post.metadata
        }));

        postPromises.push(promise);
    }

    const posts = await Promise.all(postPromises);
    const publishedPosts = posts.filter((post) => post.published).slice(0, limit);

    publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

    return {
        body: publishedPosts.slice(0, limit)
    };
}
```