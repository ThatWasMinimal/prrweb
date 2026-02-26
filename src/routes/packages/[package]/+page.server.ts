import type { PageServerLoad } from './$types';
import type { AURResponse, AURPackageDetailed } from '$lib/types';

export const load: PageServerLoad = async ({ params, fetch }) => {
    const res = await fetch(
        `https://aur.archlinux.org/rpc/v5/info/${encodeURIComponent(params.package)}`
    );

    if (!res.ok) {
        throw new Error('Failed to fetch package info');
    }

    const json: AURResponse = await res.json();
    const pkg: AURPackageDetailed | null = json.results?.[0] ?? null;

    return {
        pkg
    };
};