<script lang="ts">
	import { onMount } from 'svelte';

	const getData = async () => {
		const res = await fetch('/api/users');
		const data = await res.json();
		console.log(data);
	};

	onMount(getData);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
