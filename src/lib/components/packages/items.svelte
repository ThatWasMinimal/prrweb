<script lang="ts">
	import { Package } from '@lucide/svelte';

	export let PackageName: string;
	export let PackageVersion: string;
	export let PackageVotes: number;
	export let PackagePopularity: number;
	export let PackageDescription: string;
	export let PackageMaintainer: string;
	export let PackageLastUpdated: string;
</script>

<a href={`/packages/${PackageName}`} class="block">
	<div
		class="group rounded-2xl border border-[#2a2f36] bg-[#1a1d21]
          p-5 transition-all duration-200
          hover:border-[#3a4048] hover:bg-[#1f2328]"
	>
		<div class="mb-2 flex items-center justify-between">
			<div class="flex items-center gap-3">
				<h2 class="text-lg tracking-tight text-[#e6e6e6]">
					<Package class="mr-2 inline-block" size="18" />
					{PackageName}
				</h2>
				<span
					class="rounded-md border border-[#2a2f36] bg-[#111315] px-2 py-1 text-xs text-[#9ca3af]"
				>
					v{PackageVersion}
				</span>
			</div>

			<span class="text-xs text-[#9ca3af]">
				{PackageLastUpdated}
			</span>
		</div>

		<p class="mb-4 text-sm leading-relaxed text-[#9ca3af]">
			{PackageDescription}
		</p>

		<div class="flex flex-wrap items-center gap-6 text-sm text-[#9ca3af]">
			<span>
				by <span class="text-[#e6e6e6]">{PackageMaintainer}</span>
			</span>

			<span class="flex items-center gap-1">
				Votes: {PackageVotes}
			</span>

			<span class="flex items-center gap-1">
				Popularity: {PackagePopularity}
			</span>
		</div>
	</div>
</a>
