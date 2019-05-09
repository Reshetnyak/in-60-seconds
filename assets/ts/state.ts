export interface HomePageState {
    news: Array<NewsItem>
}

export interface NewsItem {
    id: number;
    topic: string;
    content: string;
}

export const initialState: HomePageState = {
    news: []
}