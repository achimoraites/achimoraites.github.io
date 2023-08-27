import { getProjects } from "$lib/getPosts";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    
    const posts = await getProjects()
    if(!params || !posts) return {post: {}}

    const post = posts.find(p => p.slug === params.slug)
    if (!post) {
        return {
            posts,
        }
    }
    let postContent = await import(`../../../content/projects/${post.slug}.md`)
    postContent = await postContent.default.render()
    return {
        post,
        content: postContent.html,
        posts,
    };
  }