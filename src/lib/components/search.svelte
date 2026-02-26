<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { Search } from "@lucide/svelte";

  export let placeholder = "Search packages...";

  let value = "";
  let searchBy = "name-desc";

  const dispatch = createEventDispatcher();

  function submit() {
    const query = value.trim();
    if (!query) return;

    dispatch("search", {
      query,
      by: searchBy
    });
  }

  function handleKey(e: KeyboardEvent) {
    if (e.key === "Enter") submit();
  }

  const options = [
    { label: "Name", value: "name" },
    { label: "Name + Description", value: "name-desc" },
    { label: "Maintainer", value: "maintainer" },
    { label: "Depends", value: "depends" },
    { label: "Make Depends", value: "makedepends" },
    { label: "Optional Depends", value: "optdepends" },
    { label: "Check Depends", value: "checkdepends" },
    { label: "Provides", value: "provides" },
    { label: "Conflicts", value: "conflicts" },
    { label: "Replaces", value: "replaces" },
    { label: "Keywords", value: "keywords" },
    { label: "Groups", value: "groups" },
    { label: "Submitter", value: "submitter" },
    { label: "Co-maintainers", value: "comaintainers" }
  ];
</script>

<div class="w-full flex justify-center">
  <div class="relative w-full max-w-2xl flex">

    <select
      bind:value={searchBy}
      class="bg-[#1a1d21] border border-[#2a2f36]
             text-[#9ca3af] text-sm
             px-3 py-3 rounded-l-xl
             focus:outline-none focus:border-[#a3b18a]"
    >
      {#each options as opt}
        <option value={opt.value}>{opt.label}</option>
      {/each}
    </select>

    <input
      type="text"
      bind:value
      placeholder={placeholder}
      on:keydown={handleKey}
      class="flex-1 bg-[#1a1d21] border-t border-b border-[#2a2f36]
             text-[#e6e6e6] placeholder-[#6b7280]
             px-4 py-3 pr-14
             focus:outline-none focus:border-[#a3b18a]"
    />

    <button
      on:click={submit}
      class="bg-[#a3b18a] text-[#111315]
             px-4 rounded-r-xl
             hover:opacity-90 transition"
    >
      <Search class="w-4 h-4" />
    </button>

  </div>
</div>