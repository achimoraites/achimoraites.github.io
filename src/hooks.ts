import type Post from './types/blog/Post'
/** @type {import('@sveltejs/kit').GetSession} */
export const getSession: import('@sveltejs/kit').GetSession = async () => {
	const posts: Post[] = await Promise.all(
		Object.entries(import.meta.glob('/src/routes/blog/*.md')).map(async ([path, page]) => {
			const { metadata } = await page();
			const filename = path.split('/').pop();
			return { ...metadata, uri: `/blog/${metadata.slug}`, filename };
		})
	);
	posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

	return {
		posts
	};
};
