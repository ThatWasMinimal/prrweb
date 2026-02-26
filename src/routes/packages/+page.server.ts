import type { PageServerLoad } from './$types';

import * as cheerio from 'cheerio';

const BASE =
  'https://aur.archlinux.org/packages?SB=p&SO=d&O=';

export const load: PageServerLoad = async ({ url }) => {
  const offset = url.searchParams.get('offset') ?? '0';

  const res = await fetch(`${BASE}${offset}`);
  if (!res.ok) {
    return new Response('Failed to fetch AUR', { status: 500 });
  }

  const html = await res.text();
  const $ = cheerio.load(html);

  const packages: any[] = [];

  $('table tbody tr').each((_, row) => {
    const cols = $(row).find('td');

    packages.push({
      name: $(cols[0]).text().trim(),
      version: $(cols[1]).text().trim(),
      votes: Number($(cols[2]).text().trim()),
      popularity: Number($(cols[3]).text().trim()),
      description: $(cols[4]).text().trim() || null,
      maintainer: $(cols[5]).text().trim() || undefined,
      lastupdated: $(cols[6]).text().trim() || undefined
    });
  });

  return {
    packages
  };
};