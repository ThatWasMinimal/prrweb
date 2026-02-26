export const load: PageServerLoad = async ({ params, fetch }) => {
  const perPage = 100;

  const query = params.query;
  const by = params.by ?? "name-desc";
  const page = Number(params.page ?? 0);
  const offset = page * perPage;

  const res = await fetch(
    `https://aur.archlinux.org/rpc/v5/search/${encodeURIComponent(query)}?by=${by}&offset=${offset}`
  );

  const data = await res.json();

  return {
    results: data.results ?? [],
    total: data.resultcount ?? 0,
    query,
    by,
    page
  };
};