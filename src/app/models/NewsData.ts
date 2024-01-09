type User = {
    name: string;
    profile_image_90: string;
}

export type NewsData = {
    id: number;
    title: string;
    description: string;
    cover_image: string;
    tag_list: string[];
    url: string;
    user: User;
    readable_publish_date: string;
}

export type NewsList = NewsData[];