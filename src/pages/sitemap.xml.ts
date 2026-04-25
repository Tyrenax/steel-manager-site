import { getCollection } from 'astro:content';

const site = 'https://devteix.com';

export async function GET() {
  const posts = await getCollection('blog');
  const urls = [
    { loc: `${site}/`, priority: '1.0' },
    { loc: `${site}/en/`, priority: '0.8' },
    { loc: `${site}/blog/`, priority: '0.9' },
    ...posts.map((post) => ({
      loc: `${site}/blog/${post.slug}/`,
      priority: post.data.featured ? '0.9' : '0.8',
      lastmod: (post.data.updatedDate ?? post.data.pubDate).toISOString().split('T')[0],
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>${url.lastmod ? `
    <lastmod>${url.lastmod}</lastmod>` : ''}
    <priority>${url.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
