import type { PageServerLoad } from './$types';
import type { AURResponse, AURPackageDetailed } from '$lib/types';

const TTL = 60 * 10; // 10 minutes

export const load: PageServerLoad = async (event) => {
	const { params, fetch, platform } = event;
	const kv = platform?.env?.cache;

	const key = `pkg:${params.package}`;

	if (kv) {
		const cached = await kv.get(key, { type: 'json' });
		if (cached) {
			return { pkg: cached };
		}
	}

	const res = await fetch(
		`https://aur.archlinux.org/rpc/v5/info/${encodeURIComponent(params.package)}`
	);

	if (!res.ok) {
		throw new Error('Failed to fetch package info');
	}

	const json: AURResponse = await res.json();
	const pkg: AURPackageDetailed | null = json.results?.[0] ?? null;

	if (kv && pkg) {
		await kv.put(key, JSON.stringify(pkg), {
			expirationTtl: TTL
		});
	}

	return { pkg };
};
