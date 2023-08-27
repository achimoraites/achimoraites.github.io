import getPosts from "$lib/getPosts";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    
    const posts = await getPosts()
    if(!params || !posts) return {post: {}}

    const post = posts.find(p => p.slug === params.slug)
    if (!post) {
        return {
            posts,
        }
    }
    let postContent = await import(`../../../content/blog/${post.slug}.md`)
    postContent = await postContent.default.render()
    return {
        post,
        content: postContent.html,
        posts,
    };
  }