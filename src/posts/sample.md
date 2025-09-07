---
title: "Sample Blog Post"
description: "A sample blog post showing the features I want to integrate in the blog posts."
date: "2025-01-01"
categories:
  - post
  - example
published: true
---

<script lang="ts">
  import Link from "$lib/components/Link.svelte";
  import Heading from "$lib/components/Heading.svelte";
</script>

Hello! This is a sample blog post to show the features I want to have integrated into my blog posts.

So this is a sample paragraph, with a sample **bold text** and *italicized text*. Besides that, there's anchors, like this one to the website [example.com](https://www.example.com). But that is the `mdsvex`-rendered default link.

Now, I have this `Link` component that can render links far better, like how I use it <Link as="inbound" url="https://www.example.com">here</Link> for example. You'll notice how it's styled more fancy-like, akin to all the other links on this website.

But that link still loads that website in this same tab, and sometimes we don't want to have such behavior. Which is why there's the option to have the link open a new tab, like <Link as="outbound" url="https://www.example.com">this one here</Link>.

Now, let's move on.

## This here is the default heading (a level 2 one)

All these headings are good, but they can be better. What I mainly want is to have the headings have an on-page link for that particular heading. This allows for easy linking of particular parts of the article. Let's see what we can do.

<Heading level="2" label="This is our custom heading at level 2" />

As you can see, this heading has the stuff we would actually want from a heading. And the component allows me to set a custom linkable id for it, or just use the text of the heading as is (well, ecept with spaces turned into dashes and everything being lowercase). Let me show you a custom id in action.

<Heading level="2" label="This heading has a custom id" id="custom-id" />

And there's multiple heading levels from 2 through 6.

<Heading level="3" label="This is a level 3 heading" />

<Heading level="4" label="This is a level 4 heading" />

<Heading level="5" label="This is a level 5 heading" />

<Heading level="6" label="This is a level 6 heading" />

The only exception is the main heading. The `h1` as we call it here, can't be set with this custom heading component. Since it's just the title of the article, it can just remain as a static element as you would typically have by default. But let's move on.

<Heading level="2" label="Improved codeblocks" />

Let's see what the default codeblock looks like as parsed by `mdsvex`. Here's a simple JavaScript example:

```js
function greeting(subject = "world!") {
  // construct the message, integrating the subject.
  let message = `Hello, ${subject}`;
  // return the message.
  return message;
}
```

...and a CSS version perhaps:

```css
.box {
  width: 100px;
  height: 100px;
  aspect-ratio: 1;
  display: block;
  background: color-mix(in oklab, #ffffff 100%, transparent 50%);
}
```

<Heading level="2" label="Footnotes all the way down" />

I've been interested in using <Link as="inbound" url="#fn-a" id="fn-a-origin">footnotes</Link><sup>a</sup> for additional context and <Link as="inbound" url="#fn-1" id="fn-1-origin">external links</Link><sup>1</sup>

------

<Heading level="6" label="Footnotes" />

<p id="fn-a"><sup>a</sup> - Footnotes are quite simple to use and integrate. They should be more prevalent in websites, I posit. <Link as="inbound" url="#fn-a-origin">Go back</Link></p>

<p id="fn-1"><sup>1</sup> - Here's an external link to <Link as="outbound" url="https://example.com">example.com</Link>. <Link as="inbound" url="#fn-1-origin">Go back</Link></p>
