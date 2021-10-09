import type Post from '../types/blog/Post'
export default function getPosts(): Promise<Post[]> {
    return Promise.all(
		Object.entries(import.meta.glob('/src/routes/blog/*.md')).map(async ([path, page]) => {
			const { metadata } = await page();
			const filename = path.split('/').pop();
			return { ...metadata, uri: `/blog/${metadata.slug}`, filename };
		})
	);
}