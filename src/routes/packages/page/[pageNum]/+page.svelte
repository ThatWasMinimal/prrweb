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

<section class="min-h-screen bg-[#111315] text-[#e6e6e6] px-6 py-24">
  <div class="max-w-4xl mx-auto">

    <div class="mb-14">
      <h1 class="text-5xl font-semibold tracking-tight mb-4">
        packages
      </h1>

      <p class="text-sm text-[#9ca3af] max-w-xl leading-relaxed">
        Package fetching relies on HTML parsing. If aurweb changes layout or goes down, results may fail.
      </p>
    </div>
    
    {#if !packages}
      <p class="text-center text-sm text-[#9ca3af]">Loading packages...</p>

    {:else if packages.length === 0}
      <p class="text-center text-sm text-[#9ca3af]">No packages found.</p>

    {:else}
          <div class="flex justify-end mb-6">
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
      
      <div class="flex justify-center mt-6">
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