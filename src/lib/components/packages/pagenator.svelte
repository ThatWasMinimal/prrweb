<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { ArrowLeft, ArrowRight } from "@lucide/svelte";

  export let currentPage: number = 0;     // starts at 0
  export let totalPages: number = 1;      // total count (e.g. 10 pages = 0–9)

  const dispatch = createEventDispatcher();

  const goTo = (page: number) => {
    if (page < 0 || page >= totalPages || page === currentPage) return;
    dispatch("change", page);
  };

  $: pages = getVisiblePages(currentPage, totalPages);

  function getVisiblePages(current: number, total: number) {
    const delta = 2;
    const range = [];

    for (
      let i = Math.max(0, current - delta);
      i <= Math.min(total - 1, current + delta);
      i++
    ) {
      range.push(i);
    }

    return range;
  }
</script>

<nav class="flex justify-center mt-16">
  <div class="inline-flex overflow-hidden rounded-xl border border-[#2a2f36] bg-[#1a1d21]">

    <button
      on:click={() => goTo(currentPage - 1)}
      disabled={currentPage === 0}
      class="px-3 py-2 text-sm 
             text-[#9ca3af] 
             hover:text-[#e6e6e6] 
             disabled:opacity-40 
             disabled:cursor-not-allowed 
             transition-colors"
    >
      <ArrowLeft class="w-4 h-4" />
    </button>

    <div class="w-px bg-[#2a2f36]" />

    {#if pages[0] > 0}
      <button
        on:click={() => goTo(0)}
        class="px-3 py-2 text-sm text-[#9ca3af] hover:text-[#e6e6e6] transition-colors"
      >
        0
      </button>
      <div class="w-px bg-[#2a2f36]" />
      <span class="px-3 py-2 text-[#9ca3af] text-sm">…</span>
      <div class="w-px bg-[#2a2f36]" />
    {/if}

    {#each pages as page, i}
      {#if page === currentPage}
        <button
          class="px-3 py-2 text-sm 
                 bg-[#a3b18a] 
                 text-[#111315] 
                 font-medium"
        >
          {page}
        </button>
      {:else}
        <button
          on:click={() => goTo(page)}
          class="px-3 py-2 text-sm 
                 text-[#9ca3af] 
                 hover:text-[#e6e6e6] 
                 transition-colors"
        >
          {page}
        </button>
      {/if}

      {#if i !== pages.length - 1}
        <div class="w-px bg-[#2a2f36]" />
      {/if}
    {/each}

    {#if pages[pages.length - 1] < totalPages - 1}
      <div class="w-px bg-[#2a2f36]" />
      <span class="px-3 py-2 text-[#9ca3af] text-sm">…</span>
      <div class="w-px bg-[#2a2f36]" />
      <button
        on:click={() => goTo(totalPages - 1)}
        class="px-3 py-2 text-sm text-[#9ca3af] hover:text-[#e6e6e6] transition-colors"
      >
        {totalPages - 1}
      </button>
    {/if}

    <div class="w-px bg-[#2a2f36]" />

    <button
      on:click={() => goTo(currentPage + 1)}
      disabled={currentPage === totalPages - 1}
      class="px-3 py-2 text-sm 
             text-[#9ca3af] 
             hover:text-[#e6e6e6] 
             disabled:opacity-40 
             disabled:cursor-not-allowed 
             transition-colors"
    >
      <ArrowRight class="w-4 h-4" />
    </button>

  </div>
</nav>