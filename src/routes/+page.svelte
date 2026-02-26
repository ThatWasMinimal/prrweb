<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	const things = [
		'aurweb but my version',
		'aurweb for everyone',
		'aurweb but cute',
		'its called prrweb for a reason',
		'i dont wanna get canceled',
		'its all cute and simple'
	];

	function sayRandomThings() {
		return things[Math.floor(Math.random() * things.length)];
	}
</script>

<div class="flex min-h-screen flex-col items-center justify-center gap-4 font-medium">
	<h1 class="text-[80px]">{sayRandomThings()}</h1>
	<h1 class="text-sm font-thin italic">a user friendly (and cute) aurweb made by 1 guy</h1>

	<a
		href="/packages"
		class="rounded-xl bg-[#a3b18a] px-4 py-2 text-[20px] font-medium text-[#111315] transition-colors duration-200 hover:bg-[#b7c4a0]"
		>browse packages <ArrowRight size={16} class="ml-2 inline" /></a
	>
</div>
