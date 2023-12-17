export type NewsResult = {
    article_id: string;
        title: string;
        link: string;
        creator: string[];
        content: string;
        pubDate: string;
        image_url: string;
}

export type NewsData = {
    results: NewsResult[];
}