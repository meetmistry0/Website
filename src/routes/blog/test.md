---
title: "Does it work?"
description: "hmmm..."
date: "2021-09-04"
published: true
---

# Heading level 1	
## Heading level 2	
### Heading level 3	
#### Heading level 4	
##### Heading level 5	
###### Heading level 6

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

does `inline code` work properly?

`yes it does.`