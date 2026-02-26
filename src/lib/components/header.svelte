<script lang="ts">
	import { ArrowUpRight, Package, PawPrint } from '@lucide/svelte';
	import Search from '$lib/components/search.svelte';

	function handleSearch(e) {
		const { query, by } = e.detail;
		if (!query) return;

		window.location.href = `/packages/search/${query}/${by}/0`;
	}
</script>

<header
	class="fixed top-0 left-0 w-full z-50
	       border-b border-[#2a2f36]
	       bg-[#111315]/80 backdrop-blur-md"
>
	<div class="mx-auto max-w-7xl h-16 px-6
	            grid grid-cols-3 items-center">

		<div class="flex items-center">
			<a
				href="/"
				class="flex items-center gap-2 text-sm
				       tracking-tight text-[#e6e6e6]
				       hover:text-[#a3b18a] transition-colors"
			>
				prrweb <PawPrint size={16} />
			</a>
		</div>

		<div class="flex justify-center">
			<div class="w-full max-w-md">
				<Search on:search={handleSearch} />
			</div>
		</div>

		<div class="flex justify-end items-center gap-6">
			<a
				href="/packages"
				class="flex items-center gap-2 text-sm
				       text-[#9ca3af] hover:text-[#e6e6e6]
				       transition-colors"
			>
				browse <Package size={16} />
			</a>

			<a
				href="https://github.com/prrweb/prrweb"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-2 text-sm
				       text-[#9ca3af] hover:text-[#a3b18a]
				       transition-colors"
			>
				source <ArrowUpRight size={16} />
			</a>
		</div>

	</div>
</header>