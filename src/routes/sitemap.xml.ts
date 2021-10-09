/**
 * Generate Sitemap Dynamically when on SSR
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type Post from '../types/blog/Post'
import getPosts from '$lib/getPosts';
import generateSitemap from '$lib/generateSitemap'

export async function get() {
  const posts: Post[] = await getPosts()

  // will add more in the future :)
  const pages: string[] = [];
  const body = generateSitemap(posts, pages);

  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600',
    'Content-Type': 'application/xml'
  };
  return {
    headers,
    body
  };
}

