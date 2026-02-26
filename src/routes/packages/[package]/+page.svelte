<script lang="ts">
  import type { AURPackageDetailed } from '$lib/types';

  export let data: {
    pkg: AURPackageDetailed | null;
  };

  function formatDate(dateStr: number | null): string {
    if (!dateStr) return 'Unknown';
    const date = new Date(dateStr * 1000);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
</script>

<section class="min-h-screen bg-[#111315] text-[#e6e6e6] px-10 py-20">

  {#if data.pkg}
    <div class="max-w-5xl">

      <div class="mb-10">
        <div class="flex items-center gap-4 mb-4">
          <h1 class="text-5xl font-semibold tracking-tight">
            {data.pkg.Name}
          </h1>

          <span class="text-xs text-[#9ca3af] bg-[#1a1d21] px-3 py-1 rounded-md border border-[#2a2f36]">
            v{data.pkg.Version}
          </span>
        </div>

        <p class="text-lg text-[#9ca3af] max-w-3xl leading-relaxed">
          {data.pkg.Description}
        </p>
      </div>

      <div class="grid grid-cols-2 gap-y-6 gap-x-16 text-sm border-t border-[#2a2f36] pt-8">

        <div>
          <p class="text-[#9ca3af] mb-1">Votes</p>
          <p class="font-medium">{data.pkg.NumVotes}</p>
        </div>

        <div>
          <p class="text-[#9ca3af] mb-1">Popularity</p>
          <p class="font-medium">
            {data.pkg.Popularity ?? '—'}
          </p>
        </div>

        <div>
          <p class="text-[#9ca3af] mb-1">Maintainer</p>
          <p class="font-medium">
            {data.pkg.Maintainer ?? 'orphaned'}
          </p>
        </div>

        <div>
          <p class="text-[#9ca3af] mb-1">Submitter</p>
          <p class="font-medium">
            {data.pkg.Submitter}
          </p>
        </div>

        <div>
          <p class="text-[#9ca3af] mb-1">First Submitted</p>
          <p class="font-medium">
            {formatDate(data.pkg.FirstSubmitted)}
          </p>
        </div>

        <div>
          <p class="text-[#9ca3af] mb-1">Last Modified</p>
          <p class="font-medium">
            {formatDate(data.pkg.LastModified)}
          </p>
        </div>

        <div>
          <p class="text-[#9ca3af] mb-1">License</p>
          <p class="font-medium">
            {data.pkg.License?.join(', ') ?? '—'}
          </p>
        </div>

        <div>
          <p class="text-[#9ca3af] mb-1">Project URL</p>
          {#if data.pkg.URL}
            <a
              href={data.pkg.URL}
              target="_blank"
              rel="noopener noreferrer"
              class="font-medium text-[#a3b18a] hover:underline break-all"
            >
              {data.pkg.URL}
            </a>
          {:else}
            <p class="font-medium">—</p>
          {/if}
        </div>

      </div>

    </div>
  {:else}

    <div class="max-w-4xl">
      <h1 class="text-4xl font-semibold mb-4">
        Package not found
      </h1>

      <p class="text-[#9ca3af]">
        The requested package could not be located.
      </p>
    </div>

  {/if}

</section>