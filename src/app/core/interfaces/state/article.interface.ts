import { IEvent, ILaunch } from '../api.interface';

export interface IArticle {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: ILaunch[];
  events: IEvent[];
}
