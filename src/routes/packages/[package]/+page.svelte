<script lang="ts">
	import type { AURPackageDetailed } from '$lib/types';
	import {
		ArrowBigDownDash,
		ArrowBigUpDash,
		FileCode,
		Flame,
		UserPen,
		UserStar,
		Pen,
		CalendarArrowUp,
		Link,
		Scale
	} from '@lucide/svelte';

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

<section class="flex min-h-screen justify-center bg-[#111315] px-6 py-24 text-[#e6e6e6]">
	{#if data.pkg}
		<div class="w-full max-w-4xl text-center">
			<div class="mb-14">
				<div class="mb-4 flex flex-wrap items-center justify-center gap-4">
					<h1 class="text-5xl font-semibold tracking-tight">
						{data.pkg.Name}
					</h1>

					<span
						class="rounded-md border border-[#2a2f36] bg-[#1a1d21] px-3 py-1 text-xs text-[#9ca3af]"
					>
						v{data.pkg.Version}
					</span>
				</div>

				<p class="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#9ca3af]">
					{data.pkg.Description}
				</p>

				<div class="relative flex justify-center gap-4">
					<div class="relative">
						<button
							on:click={() => (showInstallMenu = !showInstallMenu)}
							class="rounded-lg bg-[#a3b18a] px-6 py-2
                     text-sm font-medium text-[#111315] transition hover:opacity-90"
						>
							install via paru/yay <ArrowBigDownDash class="ml-1 inline-block" />
						</button>

						{#if showInstallMenu}
							<div
								class="absolute left-1/2 z-20 mt-3
                       w-44 -translate-x-1/2 overflow-hidden rounded-xl
                       border border-[#2a2f36] bg-[#1a1d21] shadow-xl"
							>
								<button
									on:click={() => copyInstallCommand('yay', data.pkg.Name)}
									class="w-full px-4 py-2 text-center text-sm
                         text-[#9ca3af] transition
                         hover:bg-[#20242a] hover:text-[#e6e6e6]"
								>
									yay -S {data.pkg.Name}
								</button>

								<button
									on:click={() => copyInstallCommand('paru', data.pkg.Name)}
									class="w-full px-4 py-2 text-center text-sm
                         text-[#9ca3af] transition
                         hover:bg-[#20242a] hover:text-[#e6e6e6]"
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
						class="rounded-lg border border-[#2a2f36]
                   bg-[#1a1d21] px-6 py-2 text-sm
                   text-[#9ca3af] transition-colors
                   hover:border-[#3a4048]
                   hover:text-[#e6e6e6]"
					>
						view PKGBUILD <FileCode class="ml-1 inline-block" />
					</a>
				</div>
			</div>

			<div class="grid grid-cols-1 gap-10 border-t border-[#2a2f36] pt-12 sm:grid-cols-2">
				<div>
					<p class="mb-2 text-[#9ca3af]">
						Votes <ArrowBigUpDash class="ml-1 inline-block" size="20" />
					</p>
					<p class="text-lg font-medium">{data.pkg.NumVotes}</p>
				</div>

				<div>
					<p class="mb-2 text-[#9ca3af]">
						Popularity <Flame class="ml-1 inline-block" size="20" />
					</p>
					<p class="text-lg font-medium">{data.pkg.Popularity ?? '—'}</p>
				</div>

				<div>
					<p class="mb-2 text-[#9ca3af]">
						Maintainer <UserPen class="ml-1 inline-block" size="20" />
					</p>
					<p class="text-lg font-medium">
						{data.pkg.Maintainer ?? 'orphaned'}
					</p>
				</div>

				<div>
					<p class="mb-2 text-[#9ca3af]">
						Submitter <UserStar class="ml-1 inline-block" size="20" />
					</p>
					<p class="text-lg font-medium">
						{data.pkg.Submitter}
					</p>
				</div>

				<div>
					<p class="mb-2 text-[#9ca3af]">
						First Submitted <CalendarArrowUp class="ml-1 inline-block" size="20" />
					</p>
					<p class="text-lg font-medium">
						{formatDate(data.pkg.FirstSubmitted)}
					</p>
				</div>

				<div>
					<p class="mb-2 text-[#9ca3af]">
						Last Modified <Pen class="ml-1 inline-block" size="20" />
					</p>
					<p class="text-lg font-medium">
						{formatDate(data.pkg.LastModified)}
					</p>
				</div>

				<div>
					<p class="mb-2 text-[#9ca3af]">License <Scale class="ml-1 inline-block" size="20" /></p>
					<p class="text-lg font-medium">
						{data.pkg.License?.join(', ') ?? '—'}
					</p>
				</div>

				<div>
					<p class="mb-2 text-[#9ca3af]">
						Project URL <Link class="ml-1 inline-block" size="20" />
					</p>
					{#if data.pkg.URL}
						<a
							href={data.pkg.URL}
							target="_blank"
							rel="noopener noreferrer"
							class="font-medium break-all text-[#a3b18a] hover:underline"
						>
							{data.pkg.URL}
						</a>
					{:else}
						<p class="text-lg font-medium">—</p>
					{/if}
				</div>
			</div>
		</div>
	{:else}
		<div class="text-center">
			<h1 class="mb-4 text-4xl font-semibold">woops! not found that package :(</h1>

			<p class="text-[#9ca3af]">uhh i dont know about this package</p>
		</div>
	{/if}
</section>
