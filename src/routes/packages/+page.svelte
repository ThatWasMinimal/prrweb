<script lang="ts">
  import Items from '$lib/components/packages/items.svelte';
  import type { PackageInfo } from '$lib/types';

  export let data: {
    packages: PackageInfo[];
  };

  const packages = data.packages;
</script>

<section class="min-h-screen bg-[#111315] text-[#e6e6e6] px-6 py-24">
  <div class="max-w-4xl mx-auto">

    <div class="mb-14">
      <h1 class="text-5xl font-semibold tracking-tight mb-4">
        packages
      </h1>

      <p class="text-sm text-[#9ca3af] max-w-xl leading-relaxed">
        packages fetching rely on HTML parsing, this means if aurweb layout changes or web is down then it's done
      </p>
    </div>
    
    {#if !packages}
      <p class="text-center text-sm text-[#9ca3af]">Loading packages...</p>
    {:else if packages.length === 0}
      <p class="text-center text-sm text-[#9ca3af]">No packages found.</p>
    {:else}
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
    {/if}

  </div>
</section>