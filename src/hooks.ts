import type Post from './types/blog/Post'
import getPosts from '$lib/getPosts';
/** @type {import('@sveltejs/kit').GetSession} */
export const getSession: import('@sveltejs/kit').GetSession = async () => {
	const posts: Post[] = await getPosts()
	posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

	return {
		posts
	};
};
