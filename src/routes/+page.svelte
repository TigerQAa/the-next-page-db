<script lang="ts">
	import { page } from "$app/stores";
	import { trpc } from "$lib/trpc/client";
	import type { PageData } from "./$types";

	async function loadData() {
			// let them run in parallel
		const [authorName, greet] = await Promise.all([
			trpc($page).author.getFirstAuthor.query(),
			await trpc($page).greeting.query()
		]);

		greeting = greet;
		author = authorName ? authorName : "Could not find author!";
	}
	let greeting = "loading...";
	let author = "loading...";
	export let data: PageData;
	loadData();
</script>

<h1 class="text-blue-700 text-5xl">Welcome to The Next Page</h1>
<br />
<p>TRPC says {greeting}</p>
<br />
<p>The first author is: {author}</p>
<p>The server sends you this picture before loading the page!</p>
<img src={data.link} alt="Cat" />
