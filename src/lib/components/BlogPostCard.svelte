<script lang="ts">
	interface Props {
		post: BlogPost;
	}
	let { post }: Props = $props();
</script>

{#key post.slug}
	<article class="card">
		<h3 class="title" data-toc-ignore>{post.title}</h3>
		<p class="description">{post.description}</p>
		<a href="/blog/{post.slug}" class="link">Read more</a>
	</article>
{/key}
