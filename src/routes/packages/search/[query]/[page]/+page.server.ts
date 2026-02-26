import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch }) => {
  const perPage = 100;

  const query = params.query;
  const page = Number(params.page ?? 0);

  const offset = page * perPage;

  const res = await fetch(
    `https://aur.archlinux.org/rpc/?v=5&type=search&arg=${encodeURIComponent(query)}&offset=${offset}`
  );

  const data = await res.json();

  return {
    results: data.results ?? [],
    total: data.resultcount ?? 0,
    query,
    page
  };
};