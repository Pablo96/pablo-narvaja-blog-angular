import { Tag } from "src/app/shared/basics.model";

export class Article {
  slug: string;
  title: string;
  description: string;
  publish_date: Date;
  author_email: string;
  thumbnail_url: string;
  tag: Tag[];
  content_html: string;
}
