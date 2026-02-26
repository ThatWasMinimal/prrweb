<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { Search } from "@lucide/svelte";

  export let placeholder = "Search packages...";
  let value = "";

  const dispatch = createEventDispatcher();

  function submit() {
    const query = value.trim();
    if (!query) return;
    dispatch("search", query);
  }

  function handleKey(e: KeyboardEvent) {
    if (e.key === "Enter") submit();
  }
</script>

<div class="w-full flex justify-center">
  <div class="relative w-full max-w-2xl">
    <input
      type="text"
      bind:value
      placeholder={placeholder}
      on:keydown={handleKey}
      class="w-full bg-[#1a1d21] border border-[#2a2f36]
             text-[#e6e6e6] placeholder-[#6b7280]
             px-5 py-3 pr-14 rounded-xl
             focus:outline-none focus:border-[#a3b18a]
             transition-colors"
    />

    <button
      on:click={submit}
      class="absolute right-2 top-1/2 -translate-y-1/2
             bg-[#a3b18a] text-[#111315]
             p-2 rounded-lg hover:opacity-90 transition"
    >
      <Search class="w-4 h-4" />
    </button>
  </div>
</div>