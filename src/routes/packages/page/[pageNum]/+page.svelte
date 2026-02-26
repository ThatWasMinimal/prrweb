<script lang="ts">
	import Items from '$lib/components/packages/items.svelte';
	import Pagenator from '$lib/components/packages/pagenator.svelte';
	import type { PackageInfo } from '$lib/types';

	export let data: {
		packages: PackageInfo[];
		page: number;
	};

	const packages = data.packages;
	const page = data.page;
</script>

<section class="min-h-screen bg-[#111315] px-6 py-24 text-[#e6e6e6]">
	<div class="mx-auto max-w-4xl">
		<div class="mb-14">
			<h1 class="mb-4 text-5xl font-semibold tracking-tight">packages</h1>

			<p class="max-w-xl text-sm leading-relaxed text-[#9ca3af]">
				Package fetching relies on HTML parsing. If aurweb changes layout or goes down, results may
				fail.
			</p>
		</div>

		{#if !packages}
			<p class="text-center text-sm text-[#9ca3af]">Loading packages...</p>
		{:else if packages.length === 0}
			<p class="text-center text-sm text-[#9ca3af]">No packages found.</p>
		{:else}
			<div class="mb-6 flex justify-end">
				<Pagenator
					currentPage={page}
					totalPages={2130}
					on:change={(e) => {
						window.location.href = `/packages/page/${e.detail}`;
					}}
				/>
			</div>
			<div class="grid gap-3">
				{#each packages as pkg}
					<Items
						PackageName={pkg.name}
						PackageVersion={pkg.version}
						PackageVotes={pkg.votes}
						PackagePopularity={pkg.popularity}
						PackageDescription={pkg.description ?? 'No description provided.'}
						PackageMaintainer={pkg.maintainer ?? 'Unknown'}
						PackageLastUpdated={pkg.lastupdated ?? 'Unknown'}
					/>
				{/each}
			</div>

			<div class="mt-6 flex justify-center">
				<Pagenator
					currentPage={page}
					totalPages={2130}
					on:change={(e) => {
						window.location.href = `/packages/page/${e.detail}`;
					}}
				/>
			</div>
		{/if}
	</div>
</section>
