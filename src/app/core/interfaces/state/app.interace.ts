import { IArticle } from './article.interface';

export interface IApp {
  list: IArticle[];
  listLoaded: boolean;
  article: IArticle | null;
  articleLoaded: boolean;
  search: string;
}
