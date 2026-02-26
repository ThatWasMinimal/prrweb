<script lang="ts">
	import './layout.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';

	let { children } = $props();
	console.log('wellcome to pawsole!, hope you dont find any bugs in here');
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cal+Sans&display=swap" rel="stylesheet" />

<div class="font-['Cal_Sans'] tracking-wide">
	<Header />
	<main class="min-h-screen bg-[#111315] text-[#e6e6e6]">
		{@render children()}
	</main>
	<Footer />
</div>
