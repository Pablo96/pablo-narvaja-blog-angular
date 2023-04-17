import { Tag } from "src/app/shared/basics.model";

export class ArticlePreview {
  slug: string;
  title: string;
  description: string;
  publish_date: Date;
  author_email: string;
  thumbnail_url: string;
  tag: Tag[];
}

export class Article extends ArticlePreview{
  content_html: string;
}
