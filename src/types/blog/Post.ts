export default interface Post {
    title?: string;
    date?: string;
    excerpt?: string;
    image?: string;
    uri?: string;
    tags?: Array<string>;
    slug?: string;
    filename?: string;
}