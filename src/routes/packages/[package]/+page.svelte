<script lang="ts">
  import type { AURPackageDetailed } from '$lib/types';

  export let data: {
    pkg: AURPackageDetailed | null;
  };

  let showInstallMenu = false;

  function copyInstallCommand(manager: string, name: string) {
    navigator.clipboard.writeText(`${manager} -S ${name}`);
    showInstallMenu = false;
  }

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

<section class="min-h-screen bg-[#111315] text-[#e6e6e6] px-6 py-24 flex justify-center">

  {#if data.pkg}
    <div class="w-full max-w-4xl text-center">

      <div class="mb-14">

        <div class="flex justify-center items-center gap-4 mb-4 flex-wrap">
          <h1 class="text-5xl font-semibold tracking-tight">
            {data.pkg.Name}
          </h1>

          <span class="text-xs text-[#9ca3af] bg-[#1a1d21] px-3 py-1 rounded-md border border-[#2a2f36]">
            v{data.pkg.Version}
          </span>
        </div>

        <p class="text-lg text-[#9ca3af] max-w-2xl mx-auto leading-relaxed mb-10">
          {data.pkg.Description}
        </p>

        <div class="flex justify-center gap-4 relative">

          <div class="relative">
            <button
              on:click={() => (showInstallMenu = !showInstallMenu)}
              class="bg-[#a3b18a] text-[#111315] text-sm font-medium 
                     px-6 py-2 rounded-lg hover:opacity-90 transition"
            >
              install via paru/yay
            </button>

            {#if showInstallMenu}
              <div
                class="absolute left-1/2 -translate-x-1/2 mt-3
                       w-44 bg-[#1a1d21] border border-[#2a2f36]
                       rounded-xl overflow-hidden shadow-xl z-20"
              >
                <button
                  on:click={() => copyInstallCommand('yay', data.pkg.Name)}
                  class="w-full text-center px-4 py-2 text-sm 
                         text-[#9ca3af] hover:text-[#e6e6e6] 
                         hover:bg-[#20242a] transition"
                >
                  yay -S {data.pkg.Name}
                </button>

                <button
                  on:click={() => copyInstallCommand('paru', data.pkg.Name)}
                  class="w-full text-center px-4 py-2 text-sm 
                         text-[#9ca3af] hover:text-[#e6e6e6] 
                         hover:bg-[#20242a] transition"
                >
                  paru -S {data.pkg.Name}
                </button>
              </div>
            {/if}
          </div>

          <a
            href={`https://aur.archlinux.org/cgit/aur.git/tree/PKGBUILD?h=${data.pkg.PackageBase}`}
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm border border-[#2a2f36] 
                   bg-[#1a1d21] px-6 py-2 rounded-lg
                   text-[#9ca3af] hover:text-[#e6e6e6]
                   hover:border-[#3a4048]
                   transition-colors"
          >
            view PKGBUILD
          </a>

        </div>

      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-[#2a2f36] pt-12">

        <div>
          <p class="text-[#9ca3af] mb-2">Votes</p>
          <p class="font-medium text-lg">{data.pkg.NumVotes}</p>
        </div>

        <div>
          <p class="text-[#9ca3af] mb-2">Popularity</p>
          <p class="font-medium text-lg">{data.pkg.Popularity ?? '—'}</p>
        </div>

        <div>
          <p class="text-[#9ca3af] mb-2">Maintainer</p>
          <p class="font-medium text-lg">
            {data.pkg.Maintainer ?? 'orphaned'}
          </p>
        </div>

        <div>
          <p class="text-[#9ca3af] mb-2">Submitter</p>
          <p class="font-medium text-lg">
            {data.pkg.Submitter}
          </p>
        </div>

        <div>
          <p class="text-[#9ca3af] mb-2">First Submitted</p>
          <p class="font-medium text-lg">
            {formatDate(data.pkg.FirstSubmitted)}
          </p>
        </div>

        <div>
          <p class="text-[#9ca3af] mb-2">Last Modified</p>
          <p class="font-medium text-lg">
            {formatDate(data.pkg.LastModified)}
          </p>
        </div>

        <div>
          <p class="text-[#9ca3af] mb-2">License</p>
          <p class="font-medium text-lg">
            {data.pkg.License?.join(', ') ?? '—'}
          </p>
        </div>

        <div>
          <p class="text-[#9ca3af] mb-2">Project URL</p>
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
            <p class="font-medium text-lg">—</p>
          {/if}
        </div>

      </div>

    </div>
  {:else}
    <div class="text-center">
      <h1 class="text-4xl font-semibold mb-4">
        woops! not found that package :(
      </h1>

      <p class="text-[#9ca3af]">
        uhh i dont know about this package
      </p>
    </div>
  {/if}

</section>