import getPosts, { getProjects } from '$lib/getPosts';

const website = 'https://achimoraites.io';

export async function GET() {
	const [posts, projects] = await Promise.all([getPosts(), getProjects()]);
	const pages = [...posts, ...projects];
	return new Response(
		`
      <?xml version="1.0" encoding="UTF-8" ?>
      <urlset
        xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="https://www.w3.org/1999/xhtml"
        xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
      >
      ${pages
				.map(
					(post) => `
<url>
  <loc>${post.url}</loc>
  <priority>0.7</priority>
</url>
`
				)
				.join('')}
      </urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
