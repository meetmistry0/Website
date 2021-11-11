---
title: "Post-1"
description: "description"
date: "2021-10-04"
published: true
---

how do [links look](https://meetmistry.netlify.app) in between?

The `inline code is` pretty cool.

```js
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
```