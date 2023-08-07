export class GetArticleList {
  static readonly type = '[Article] Get Article List';
  constructor(public search: string = '') { }
}

export class GetArticle {
  static readonly type = '[Article] Get Article';
  constructor(public id: string) { }
}

export class ShowNotificationError {
  static readonly type = '[Notification] Show Error';
  constructor(public message: string) {}
}
