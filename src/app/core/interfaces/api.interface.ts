import { IArticle } from './state/article.interface';

export interface ILaunch {
  launch_id: string;
  provider: string;
}

export interface IEvent {
  event_id: number;
  provider: string;
}

export interface ISearchResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IArticle[];
}
