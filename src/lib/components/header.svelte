<script lang="ts">
	import { ArrowUpRight, Package, PawPrint } from '@lucide/svelte';
</script>

<header
	class="absolute top-0 left-0 w-full border-b border-[#2a2f36] bg-[#111315]/70 backdrop-blur-md"
>
	<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
		<a
			href="/"
			class="flex items-center gap-2 text-sm tracking-tight text-[#e6e6e6] transition-colors duration-200 hover:text-[#a3b18a]"
		>
			prrweb <PawPrint size={16} />
		</a>

		<a
			href="/packages"
			class="flex items-center gap-2 text-sm text-[#9ca3af] transition-colors duration-200 hover:text-[#e6e6e6]"
		>
			browse packages <Package size={16} />
		</a>

		<a
			href="https://github.com/prrweb/prrweb"
			target="_blank"
			rel="noopener noreferrer"
			class="flex items-center gap-2 text-sm text-[#9ca3af] transition-colors duration-200 hover:text-[#a3b18a]"
		>
			source code <ArrowUpRight size={16} />
		</a>
	</div>
</header>
