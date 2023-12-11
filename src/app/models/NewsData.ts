export type NewsData = {
    results: {
        article_id: string;
        title: string;
        link: string;
        creator: string[];
        content: string;
        pubDate: string;
        image_url: string;
    }[];
}