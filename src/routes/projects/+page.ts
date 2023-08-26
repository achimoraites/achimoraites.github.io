import { getProjects } from "$lib/getPosts";


/** @type {import('./$types').PageLoad} */
export async function load() {
    const posts = await getProjects()
    return {
      posts: posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    };
  }