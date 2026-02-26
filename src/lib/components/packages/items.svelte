<script lang="ts">
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
    class="group rounded-2xl bg-[#1a1d21] border border-[#2a2f36] 
          p-5 transition-all duration-200 
          hover:border-[#3a4048] hover:bg-[#1f2328]"
  >
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-3">
        <h2 class="text-lg  text-[#e6e6e6] tracking-tight">
          {PackageName}
        </h2>
        <span class="text-xs text-[#9ca3af] bg-[#111315] px-2 py-1 rounded-md border border-[#2a2f36]">
          v{PackageVersion}
        </span>
      </div>

      <span class="text-xs text-[#9ca3af]">
        {PackageLastUpdated}
      </span>
    </div>

    <p class="text-sm text-[#9ca3af] mb-4 leading-relaxed">
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