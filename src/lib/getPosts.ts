import type Post from '../types/blog/Post'
export default function getPosts(): Promise<Post[]> {
    return Promise.all(
		Object.entries(import.meta.glob('/src/content/blog/*.md')).map(async ([path, page]) => {
			const { metadata } = await page();
			const filename = path.split('/').pop();
			return { ...metadata, uri: `/blog/${metadata.slug}`, filename };
		})
	);
}

export function getProjects(): Promise<Post[]> {
    return Promise.all(
		Object.entries(import.meta.glob('/src/content/projects/*.md')).map(async ([path, page]) => {
			const { metadata } = await page();
			const filename = path.split('/').pop();
			return { ...metadata, uri: `/projects/${metadata.slug}`, filename };
		})
	);
}