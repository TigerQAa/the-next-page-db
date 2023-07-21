<script lang="ts">
	import { page } from "$app/stores";
	import { trpc } from "$lib/trpc/client";
	import type { PageData } from "./$types";

	async function loadData() {
		// use $ because page is a store.
		const greet = await trpc($page).greeting.query();
		greeting = greet;
	}
	let greeting = "loading...";
	export let data: PageData
	loadData();
</script>

<h1>Welcome to The Next Page</h1>

<p>The server sends you this picture!</p>
<img src={data.link} alt="Cat"/>

<p>TRPC says {greeting}</p>
